# Notifications

[[TOC]]

Krayin raises an in-app notification when a record is created, and delivers it to the bell in the admin header. A notification is addressed to **people**, not to a role: the audience is worked out from each user's permissions and data scope at the moment the record is written.

This page covers how the pieces fit together, how to notify about your own package's records, and how the realtime drivers are configured.

## 🧱 How a notification is made

Four pieces do the work:

| Piece | Responsibility |
| --- | --- |
| `Webkul\Admin\Listeners\Notification` | Listens to the core `*.create.after` events and hands the record to the service. |
| `Webkul\Admin\Services\NotificationService` | Describes each entity — its owner column, its label and its route — and writes a row per recipient. |
| `Webkul\Admin\Repositories\NotificationRepository` | Works out who should be told, and reads the bell's list and unread count. |
| `Webkul\Admin\Events\NotificationCreated` | Broadcasts one notification to the user it belongs to, when a realtime driver is on. |

The audience is resolved once, when the rows are written. Nothing is filtered later at read time, so a notification that was never addressed to a user cannot reach them.

## 🔒 Who gets told

`NotificationRepository::resolveRecipients()` answers that, and applies three rules in turn.

### 1. The user must hold the permission for that section

Each entity maps to the permission its section is guarded by:

```php
const ENTITY_PERMISSIONS = [
    'lead' => 'leads',
    'quote' => 'quotes',
    'person' => 'contacts.persons',
    'product' => 'products',
    'activity' => 'activities',
    'email' => 'mail',
];
```

A user whose role does not grant that section is never a recipient.

### 2. The record must fall inside the user's data scope

This follows the `view_permission` on the user:

| Scope | Sees |
| --- | --- |
| `global` | Every record. |
| `group` | Records owned by users in the same groups. |
| `individual` | Only their own records. |

### 3. The user who caused it is excluded

Nobody is told about something they did themselves, and inactive users are skipped.

::: tip Why resolve the audience up front?
Writing one row per recipient means the bell can read a user's notifications with a simple `where user_id = ?`, and a permission change later cannot retroactively expose a record that was never theirs.
:::

## 🧩 Notify about your own records

The entity table is what makes this extensible. Adding an entity is a matter of describing it rather than writing new delivery code.

### 1. Describe the entity

Each entry names the column holding the owner, the column used as the notification's title, and the route the bell should open:

```php
const ENTITIES = [
    'lead' => [
        'owner' => 'user_id',
        'label' => 'title',
        'route' => 'admin.leads.view',
    ],
    'product' => [
        'owner' => null,
        'label' => 'name',
        'route' => 'admin.products.edit',
    ],
];
```

- **`owner`** — the column holding the user the record belongs to. Use `null` when the record has no owner, as a product does; it is then scoped by permission alone.
- **`label`** — the column shown as the notification's title.
- **`route`** — the named route the bell opens. Add `params` when the route needs more than the record id.

### 2. Dispatch from your own event

Inject the service and call `notify()` with the entity key, the action and the record:

```php
<?php

namespace Webkul\Example\Listeners;

use Webkul\Admin\Services\NotificationService;

class ExampleListener
{
    public function __construct(protected NotificationService $notificationService) {}

    public function created($record): void
    {
        $this->notificationService->notify('example', 'created', $record);
    }
}
```

### 3. Register the listener

Subscribe to your package's own event in its `EventServiceProvider`, the same way the core does:

```php
Event::listen('example.create.after', 'Webkul\Example\Listeners\ExampleListener@created');
```

::: warning Entity keys must be described first
`notify()` looks the entity up in `ENTITIES`, and a key that is not described there raises nothing. Add the entity to both `ENTITIES` and `ENTITY_PERMISSIONS` before dispatching with it.
:::

## ⚡ Delivery drivers

How a notification reaches the browser is chosen with one variable, and resolved by `Webkul\Admin\Services\NotificationDriver`.

```ini
NOTIFICATION_DRIVER=polling
```

| Driver | How it works | Needs |
| --- | --- | --- |
| `polling` | The browser asks for new notifications on an interval. | Nothing. This is the default. |
| `reverb` | Laravel's own websocket server. | Reverb credentials and a running server. |
| `pusher` | The hosted Pusher service. | Pusher credentials. |

### 1. Polling

The default, and the fallback. Set how often the browser checks, in seconds:

```ini
NOTIFICATION_POLL_INTERVAL=30
```

A shorter interval feels faster but costs one request per signed-in user per interval, so raise it on a busy installation rather than lowering it.

### 2. Reverb

```ini
NOTIFICATION_DRIVER=reverb

REVERB_APP_ID=
REVERB_APP_KEY=
REVERB_APP_SECRET=
REVERB_HOST=localhost
REVERB_PORT=8080
REVERB_SCHEME=http
```

Run the websocket server:

```bash
php artisan reverb:start
```

### 3. Pusher

```ini
NOTIFICATION_DRIVER=pusher

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1
```

### 4. Run a queue worker

`NotificationCreated` declares `broadcastQueue()`, so broadcasting never delays the request that caused it. Both realtime drivers therefore need a worker:

```bash
php artisan queue:work
```

::: warning An incomplete setup falls back to polling
`NotificationDriver::resolve()` checks that every credential a driver needs is present, and returns `polling` when any is missing. A half-configured install keeps working rather than going silent — so if realtime is not arriving, check the credentials before the websocket server.
:::

### Verify the resolved driver

```bash
php artisan tinker --execute="echo Webkul\Admin\Services\NotificationDriver::resolve();"
```

## 🔌 The broadcast channel

Each user has a private channel of their own:

```php
new PrivateChannel('notifications.'.$this->notification->user_id);
```

The event is broadcast as `notification.created`, and carries only what the bell renders — id, title, description, route, entity type, action and timestamp. The model is not broadcast wholesale, so a column added later cannot start leaking through the socket.

Channel authorisation lives in `routes/channels.php`.

::: tip Clear the config cache after changing drivers
`NotificationDriver` reads through `config()` rather than `env()`, because `env()` returns `null` once `config:cache` has run. After editing `.env`, run `php artisan config:clear`.
:::
