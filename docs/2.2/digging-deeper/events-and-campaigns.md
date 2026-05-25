# Events and Campaigns

Krayin's **Marketing** package adds event-driven email campaigns &mdash; create an event with a date, attach an email template to it via a campaign, and Krayin queues one email per contact on the day the event fires.

This page covers the admin workflow, the command that processes campaigns, and the cron + queue setup required to keep it ticking.

::: tip Not the same as listener events
The "events" here are *marketing events* &mdash; admin-created records with a date, used to schedule email blasts. They are unrelated to the Laravel listener events documented in [Events Listeners](./events.md).
:::

## 🧩 What you can build

| Feature | Detail |
| --- | --- |
| **Date-bound campaigns** | Each campaign is tied to an event with a date. Krayin only processes it on (or before) that date. |
| **Template-driven** | Campaign body comes from an admin-managed email template &mdash; no code changes to tweak copy. |
| **Bulk send to all persons** | Every email address on every Person record gets the email. |
| **Queued delivery** | Emails go through Laravel's queue, so a large send doesn't block the request. |
| **Daily auto-run** | Scheduled command picks up eligible campaigns once per day. |

## 📋 Workflow overview

1. Create an **email template**.
2. Create an **event** (give it a date).
3. Create a **campaign** that links the event and the template.
4. Make sure the **scheduler** and **queue worker** are running.
5. On the event's date, the daily job queues an email to every person.

## 🗂️ 1. Create an email template

In the admin go to **Settings → Email Templates**, then **Create**.

| Field | Purpose |
| --- | --- |
| **Name** | Internal label for the template. |
| **Subject** | Email subject line. |
| **Content** | The email body &mdash; HTML supported. |

Save. The template is now selectable from the campaign form.

## 📅 2. Create an event

In the admin go to **Settings → Events**, then **Create**.

| Field | Purpose |
| --- | --- |
| **Name** | Label shown when picking the event on a campaign. |
| **Date** | The day the event "fires". Campaigns linked to this event are processed on this date. |
| **Description** | Optional note for context. |

::: tip Date semantics
The processor compares `event.date` against *today*. A campaign is eligible when the event date is **today** or **NULL**. Past-dated events are skipped.
:::

## 📧 3. Create a campaign

In the admin go to **Settings → Campaigns**, then **Create**.

| Field | Purpose |
| --- | --- |
| **Name** | Internal label. |
| **Subject** | Subject of the outgoing email (overrides the template subject). |
| **Event** | The event whose date triggers the send. |
| **Email Template** | The template to render as the email body. |
| **Status** | `Active` (1) campaigns run; anything else is ignored. |

Save. From this moment, the campaign is eligible &mdash; the daily job will pick it up when the event date matches today.

## ⚙️ 4. How processing works

The `Webkul\Marketing\Console\Commands\CampaignCommand` console command drives the send:

```bash
php artisan campaign:process
```

The command delegates to `Webkul\Marketing\Helpers\Campaign::process()`, which:

1. Joins `marketing_campaigns` with `marketing_events` and `email_templates`.
2. Filters to campaigns where `status = 1` and `event.date` is today (or NULL).
3. Pulls every email address from every Person record.
4. Queues one `CampaignMail` job per address:

   ```php
   Mail::queue(new CampaignMail($email, $campaign));
   ```

The helper builds the contact list with:

```php
return $this->personRepository->pluck('emails')
    ->flatMap(fn ($emails) => collect($emails)->pluck('value'))
    ->all();
```

### Daily auto-run

`MarketingServiceProvider` registers the command on Laravel's scheduler:

```php
public function boot(): void
{
    $this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
        $schedule->command('campaign:process')->daily();
    });
}
```

So once the scheduler cron is set up (next section), nothing else is required &mdash; the command fires every day at midnight.

## 🛠️ 5. Wire up cron + queue

Two background pieces have to be running for campaigns to actually go out.

### Scheduler cron

Add one entry to your server's crontab so Laravel's scheduler fires every minute (it then decides which scheduled commands are due):

```bash
* * * * * php /path/to/krayin/artisan schedule:run >> /dev/null 2>&1
```

Edit the crontab with:

```bash
crontab -e
```

Replace `/path/to/krayin` with the absolute path to your Krayin install.

### Queue worker

`Mail::queue(...)` writes jobs to the queue &mdash; a worker has to actually run them.

For local development:

```bash
php artisan queue:work
```

For production, run it under Supervisor so it restarts on crash. See the [Data Transfer queue setup](./data-transfer.md#option-a-supervisor-recommended-for-production) for a working Supervisor config &mdash; the same approach applies here.

Set a real queue driver in `.env`:

```ini
QUEUE_CONNECTION=database
```

or

```ini
QUEUE_CONNECTION=redis
```

::: warning Don't use the sync driver
With `QUEUE_CONNECTION=sync`, every queued email runs inside the `campaign:process` command itself &mdash; a campaign with thousands of recipients will time out. Use `database` or `redis` so the worker handles them in the background.
:::

## 🧪 Verify

Run the command manually to make sure the wiring works:

```bash
php artisan campaign:process
```

Then check the queue:

```bash
php artisan queue:work --once
tail -f storage/logs/laravel.log
```

You should see one queued `CampaignMail` job per person email, and the worker log them as processed. If nothing happens, the most common causes are:

- The campaign's event date isn't today (use today's date for testing).
- The campaign's status is not `1`.
- `MAIL_MAILER` in `.env` isn't pointing at a working mailer.
- No queue worker is running.

## 📝 Next steps

- [Events Listeners](./events.md) &mdash; hook into the lifecycle events Krayin fires (different concept &mdash; programmatic events, not marketing campaigns).
- [Data Transfer](./data-transfer.md) &mdash; bulk-import the Person records that campaigns will email.
