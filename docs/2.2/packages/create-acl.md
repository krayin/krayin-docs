# Access Control List

ACL is how Krayin gates admin features by role. Each permission node is declared in a small PHP config file inside your package and merged into the core `acl` config from your service provider &mdash; from then on, Krayin shows the matching checkboxes on the role-edit screen and your code can ask `bouncer()->hasPermission('your.key')` to gate UI or routes.

This page picks up from [Admin Menu](./add-menu-in-admin.md) &mdash; you'll usually add an ACL entry for every menu entry, so admins can hide things from users who shouldn't see them.

## 📁 Create the ACL config file

Inside your package's `Config/` folder (the same one that holds [`menu.php`](./add-menu-in-admin.md)), add `acl.php`:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Config
                ├── acl.php
                └── menu.php
```

### Permission entry schema

Each array element describes a single permission:

| Key | Required | Purpose |
| --- | --- | --- |
| `key` | yes | Unique identifier. Use dot-notation to nest (`examples.create`, `examples.delete`). |
| `name` | yes | Translation key for the label shown on the role-edit screen. |
| `route` | yes | The named route this permission protects. |
| `sort` | no | Display order on the role-edit screen. |

### Example

```php
<?php

return [
    [
        'key' => 'examples',
        'name' => 'example::app.acl.examples',
        'route' => 'admin.examples.index',
        'sort' => 2,
    ],
    [
        'key' => 'examples.create',
        'name' => 'example::app.acl.create',
        'route' => 'admin.examples.create',
        'sort' => 1,
    ],
    [
        'key' => 'examples.delete',
        'name' => 'example::app.acl.delete',
        'route' => 'admin.examples.destroy',
        'sort' => 3,
    ],
];
```

A top-level entry (`examples`) acts as the group; the dotted child entries (`examples.create`, `examples.delete`) become sub-permissions under it.

## ⚙️ Merge the config into the service provider

Add a `mergeConfigFrom()` call inside `register()`:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/acl.php',
            'acl',
        );
    }
}
```

Same rule as the [menu config](./add-menu-in-admin.md#merge-the-config-into-the-service-provider) &mdash; `mergeConfigFrom()` belongs in `register()`, not `boot()`.

## ⌨️ Clear cached config

```bash
php artisan optimize:clear
```

## 🛡️ Gate code with `bouncer()`

Once your permissions are registered, use the `bouncer()` helper anywhere in your package to check them:

### In a controller

```php
public function destroy(int $id)
{
    if (! bouncer()->hasPermission('examples.delete')) {
        abort(401, trans('admin::app.unauthorized'));
    }

    $this->exampleRepository->delete($id);

    return response()->json([
        'message' => trans('example::app.examples.delete-success'),
    ]);
}
```

### In a Blade view

Wrap UI in a permission check so unauthorised users don't see (or click) actions they can't perform:

```blade
@if (bouncer()->hasPermission('examples.create'))
    <a href="{{ route('admin.examples.create') }}" class="primary-button">
        @lang('example::app.examples.create-btn')
    </a>
@endif
```

## 🧪 Verify

1. Open **Settings → Roles** in the admin and edit any role &mdash; the new permissions should be listed under your group.
2. Sign in as a user assigned to a role *without* `examples.delete`. The Delete action should be hidden in the UI; if they try to call the route directly, they should get a 401.

If permissions don't appear on the role-edit screen, re-run `php artisan optimize:clear` and confirm `mergeConfigFrom()` is in `register()`.

## 📝 Next steps

- [Localization](./localization.md) &mdash; add the translation keys referenced by `name` in your `acl.php` entries.
- [Blade Components](./blade-components.md) &mdash; reusable UI primitives that already respect permission checks where relevant.
