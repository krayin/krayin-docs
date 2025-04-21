[[TOC]]

# Events and Campaigns - Developer Documentation

Krayin CRM provides an Events and Campaigns feature to facilitate event-based email marketing. This module enables administrators to create events, configure campaigns associated with these events, and automatically send emails to contacts based on configured schedules.

This documentation outlines the steps required to create and manage events and campaigns, and explains the internal command and scheduling logic used to process and send campaign emails.

## Overview

The marketing feature allows campaigns to be triggered based on scheduled events. Each campaign is linked to a specific event and email template. The system automatically processes active campaigns daily and queues emails to all contacts in the CRM.

## Creating Events

To create an event:

**Navigation:**  
`Admin Dashboard > Settings > Events`

The event date is used to determine when the campaign emails should be processed.

## Creating Campaigns

Once events are created, campaigns can be configured to send emails associated with those events.

**Navigation:**  
`Admin Dashboard > Settings > Campaigns`

**Required Fields:**

- **Name**: The name of the campaign.
- **Subject**: The subject line of the campaign email.
- **Event**: The event associated with the campaign.
- **Email Template**: The template used for the campaign email.
- **Status**: Indicates whether the campaign is active.

Only active campaigns (status = 1) will be processed.

## Email Templates

Before associating an email template with a campaign, templates must be created:

**Navigation:**  
`Admin Dashboard > Settings > Email Templates`

The selected template defines the content and structure of the campaign emails.

## Campaign Processing

Campaigns are processed using a custom console command. The logic filters campaigns based on the following conditions:

- The campaign is marked as active.
- The associated event is scheduled for the current date or has no date set.

All email addresses from the contact list (Persons) are retrieved, and an email is queued for each.

## Command and Scheduling

### Command Class

`Webkul\Marketing\Console\Commands\CampaignCommand`

**Command Name:**

```bash
php artisan campaign:process
```

**Functionality:**

- Invokes the `process()` method from `Webkul\Marketing\Helpers\Campaign`.
- Queues campaign emails for eligible campaigns and contacts.

### Service Provider Scheduling

In `MarketingServiceProvider`, the command is scheduled to run daily:

```php
public function boot(): void
{
    $this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
        $schedule->command('campaign:process')->daily();
    });
}
```

## Email Sending Logic

### Location

`Webkul\Marketing\Helpers\Campaign`

### Method: `process()`

- Joins `marketing_campaigns` with `marketing_events` and `email_templates`.
- Filters campaigns:
  - Status = 1 (active)
  - Event date is today or null
- Retrieves all contact emails.
- Queues emails using Laravel's queue system:

```php
Mail::queue(new CampaignMail($email, $campaign));
```

### Method: `getPersonsEmails()`

Retrieves all emails from the `persons` repository, flattens the structure, and returns a plain array of email addresses:

```php
return $this->personRepository->pluck('emails')
    ->flatMap(fn ($emails) => collect($emails)->pluck('value'))
    ->all();
```

## Queue and Scheduler Configuration

### Laravel Queue

Emails are queued using Laravel’s `queue` system. Ensure that the queue worker is running:

```bash
php artisan queue:work
```

For production, a process manager like Supervisor is recommended to keep the queue running.

### Laravel Scheduler

Ensure that the Laravel scheduler is configured to run via a cron job:

**Cron Entry:**

```bash
* * * * * php /path/to/krayin/artisan schedule:run >> /dev/null 2>&1
```

This allows Laravel to execute scheduled tasks such as the campaign processing command.
