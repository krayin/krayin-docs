# Admin Menu

The admin sidebar is config-driven. To make your package show up there, you write a small PHP config file listing the menu entries and merge it into the core `menu.admin` config from your service provider. This page picks up from [Routes](./routes.md) &mdash; the named route you created (`admin.examples.index`) is what each menu entry will point at.

## 📁 Create the menu config file

Inside your package, add a `Config/` folder with `menu.php`:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Config
                └── menu.php
```

### Menu item schema

Each entry in the array describes one menu item:

| Key | Required | Purpose |
| --- | --- | --- |
| `key` | yes | Unique identifier for the item. Use dot-notation to nest (`examples.list`). |
| `name` | yes | Translation key for the visible label. |
| `route` | yes | Named Laravel route this item links to. |
| `sort` | no | Display order (lower = earlier). Defaults to position in the file. |
| `icon` | no | CSS class for the icon to show next to the label. |

### Example: top-level item

```php
<?php

return [
    [
        'key' => 'examples',
        'name' => 'example::app.examples.menu.title',
        'route' => 'admin.examples.index',
        'sort' => 2,
        'icon' => 'icon-example',
    ],
];
```

## 🎨 Add a menu icon

Krayin's icons are sprite-driven &mdash; you give the class an absolute position into a shared SVG sprite. Add the CSS rule to your package's stylesheet:

```text
packages
└── Webkul
    └── Example
        └── src
            └── Resources
                └── assets
                    ├── css
                    │   └── app.css
                    ├── js
                    │   └── app.js
                    └── images
```

```scss
.icon-example {
    background-position: -371px -2px;
    background-image: url("../images/sprite-main.svg");
}
```

See [Assets](./assets.md) for bundling the CSS into the admin build.

## ⚙️ Merge the config into the service provider

`mergeConfigFrom()` blends your `menu.php` into the global `menu.admin` config so Krayin's sidebar picks it up. Add the call inside `register()`:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/menu.php',
            'menu.admin',
        );
    }
}
```

::: tip Use `register()`, not `boot()`
Menu config has to be merged before Laravel resolves the sidebar component. `register()` runs earlier in the lifecycle and is the safe place for `mergeConfigFrom()`.
:::

## ⌨️ Clear cached config

After editing menu config you have to clear Laravel's cached config so the new entries show up:

```bash
php artisan optimize:clear
```

## 🧱 Menu levels

The Krayin sidebar has two levels:

| Level | When it appears | Used for |
| --- | --- | --- |
| **First level** &mdash; sidebar | Always visible | The top-level sections (Leads, Contacts, Settings, …) |
| **Second level** &mdash; hover menu | Appears on hover over a first-level item | Sub-items grouped under that section |

To create a nested entry, give it a dotted `key` that starts with the parent's key:

```php
return [
    [
        'key' => 'catalogue',
        'name' => 'catalogue::app.menu.title',
        'route' => 'admin.catalogue.index',
        'sort' => 5,
        'icon' => 'icon-catalogue',
    ],
    [
        'key' => 'catalogue.examples',
        'name' => 'example::app.menu.examples',
        'route' => 'admin.examples.index',
        'sort' => 1,
    ],
    [
        'key' => 'catalogue.products',
        'name' => 'product::app.menu.products',
        'route' => 'admin.products.index',
        'sort' => 2,
    ],
];
```

`catalogue` becomes the parent (first level); `catalogue.examples` and `catalogue.products` appear on hover.

## 🧪 Verify

Reload your admin and look at the sidebar &mdash; the new entry should be there with its icon. If it's missing, check in order:

1. `php artisan optimize:clear` was run after the last config change.
2. The route name in `menu.php` matches a real route &mdash; `php artisan route:list | grep examples` should show it.
3. `mergeConfigFrom()` is inside `register()`, not `boot()`.
4. The translation key in `name` resolves &mdash; otherwise the label is empty and the entry can look invisible.

## 📝 Next steps

- [Access Control List](./create-acl.md) &mdash; once the menu links to your routes, gate them by permission so non-admins don't see entries they can't open.
- [Localization](./localization.md) &mdash; add the translation key your `name` references.
