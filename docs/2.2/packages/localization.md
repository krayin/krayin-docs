# Localization

Localization is how Krayin renders the same UI in any supported language. Each package ships its own translation files under `Resources/lang/<locale>/app.php` and registers a translation namespace so callers can reference strings with `package::path.to.key`.

For deeper Laravel-specific guidance see the [Laravel localization docs](https://laravel.com/docs/11.x/localization).

## ⚙️ Configure the default and fallback locale

The application-wide default lives in `config/app.php`:

```php
'locale' => env('APP_LOCALE', 'en'),
'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),
```

| Setting | Why |
| --- | --- |
| `locale` | Which language Laravel renders if the user has no other preference. |
| `fallback_locale` | Used when a string is missing from the requested locale &mdash; keep this set to `en` so untranslated keys still render something readable. |

Set both via your `.env`:

```ini
APP_LOCALE=en
APP_FALLBACK_LOCALE=en
```

## 📁 Create the language files

By convention each package keeps translations under `src/Resources/lang/<locale>/app.php`. Add a folder per language &mdash; we'll start with English:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Resources
                └── lang
                    └── en
                        └── app.php
```

Inside `app.php`, return an associative array of keys. Nest the array to match your view's dot-notation:

```php
<?php

return [
    'examples' => [
        'index' => [
            'title' => 'Examples',
        ],

        'create-btn' => 'Create Example',
        'create-success' => 'Example created successfully.',
        'update-success' => 'Example updated successfully.',
        'delete-success' => 'Example deleted successfully.',
    ],

    'acl' => [
        'examples' => 'Examples',
        'create' => 'Create',
        'delete' => 'Delete',
    ],
];
```

To add another language, copy `en/` to `fr/`, `de/`, `hi/`, etc. and translate the values &mdash; keep the keys identical.

## 🔌 Register translations with the service provider

The translation namespace is what lets you write `@lang('example::examples.index.title')`. Register it in `boot()`:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'example');
    }
}
```

`loadTranslationsFrom()` takes the absolute path to the `lang/` folder and a short namespace (`'example'`). After this, callers anywhere in the app can use the `example::` prefix.

## 🌐 Use translations

### In Blade templates

```blade
@lang('example::app.examples.index.title')
```

### In PHP code

```php
trans('example::app.examples.create-success');
__('example::app.examples.create-success'); // alias for trans()
```

### With placeholders

Add named placeholders in your language file with `:` prefix:

```php
'welcome' => 'Welcome back, :name!',
```

Then pass the replacement when calling the helper:

```blade
{{ __('example::app.welcome', ['name' => $user->name]) }}
```

## 🧪 Verify

Pick a string you just translated and:

1. Visit a page that renders it &mdash; confirm the value comes from your `app.php`, not the raw key (`example::app.examples.index.title`).
2. Change `APP_LOCALE` in `.env` to a locale you've translated for, run `php artisan config:clear`, reload, and confirm the page switches language.

If you see the raw key on the page, `loadTranslationsFrom()` didn't run &mdash; check it's inside `boot()` and re-run `php artisan optimize:clear`.

## 📝 Next steps

- [Assets](./assets.md) &mdash; once your package speaks the user's language, ship JS / CSS with it.
- [DataGrid](./datagrid.md) &mdash; uses translation keys for column labels and filter options.
