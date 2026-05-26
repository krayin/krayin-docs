# Views

Views are the Blade templates your [controller](./controllers.md) returns. Each Krayin package owns its own view folder and registers a **view namespace** so callers can reference them with `package::path.to.view`.

For Blade-specific syntax, see the [Laravel views](https://laravel.com/docs/11.x/views) and [Blade docs](https://laravel.com/docs/11.x/blade).

## 📁 Create the views folder

By convention each package's templates live under `src/Resources/views/`, with one folder per Blade group:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Resources
                └── views
                    └── admin
                        ├── index.blade.php
                        ├── create.blade.php
                        └── edit.blade.php
```

### Standard Blade files

Krayin uses a consistent naming convention for CRUD pages:

| File | Used for | Controller action |
| --- | --- | --- |
| `index.blade.php` | List view (with [DataGrid](./datagrid.md)) | `index()` |
| `create.blade.php` | Create form | `create()` |
| `edit.blade.php` | Edit form | `edit()` |
| `show.blade.php` | Detail view (optional) | `show()` |

## 🧱 Write a basic template

Wrap your content in the shared admin [layout component](./layouts.md) so it picks up the sidebar, header, and theming for free:

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('example::app.examples.index.title')
    </x-slot>

    <div class="flex justify-between items-center max-sm:flex-wrap gap-4">
        <p class="text-xl font-bold dark:text-white">
            @lang('example::app.examples.index.title')
        </p>
    </div>

    {{-- Page content goes here --}}
</x-admin::layouts>
```

Common pieces &mdash; `<x-admin::layouts>`, breadcrumbs, datagrid, buttons &mdash; are documented in the [Blade Components guide](./blade-components.md).

## ⚙️ Register the views with the service provider

The view namespace is what lets you write `view('example::admin.index')`. Register it in `boot()`:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'example');
    }
}
```

`loadViewsFrom()` takes the absolute path to the views folder and a short namespace (`'example'`). After this, anywhere in the app can render your templates with the `example::` prefix.

## 🔌 Render a view from a controller

The `view()` helper takes the namespaced view name and an optional data array:

```php
public function index()
{
    $examples = $this->exampleRepository->with('children')->all();

    return view('example::admin.index', compact('examples'));
}
```

The variables passed in via `compact()` (or as a plain array) become available inside the Blade template as `$examples`, etc.

## 🧪 Verify

Visit the route from your browser:

```text
http://your-krayin.local/admin/examples
```

You should see the rendered template. If you get a `View [example::admin.index] not found.` error, check:

1. The view file actually exists at the path Laravel is looking at.
2. `loadViewsFrom()` is in the service provider's `boot()` method, not `register()`.
3. Run `php artisan view:clear` to drop any cached compiled views.

## 📝 Next steps

- [Layouts](./layouts.md) &mdash; the shared `<x-admin::layouts>` wrapper used above.
- [Blade Components](./blade-components.md) &mdash; full list of reusable admin UI primitives (breadcrumbs, datagrid, modals, etc.).
- [Localization](./localization.md) &mdash; replace hard-coded strings with `@lang('example::app.…')` keys.
