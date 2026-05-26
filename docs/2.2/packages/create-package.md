# Getting Started

A package in Krayin is a self-contained Laravel module that adds new functionality without touching the core. This is how every built-in Krayin feature ships (see [Packages](../architecture/packages.md)) and how you should add your own. The result is cleaner code, easier upgrades, and a clear path to share work between projects.

This guide walks you through creating a package called **Example** from scratch &mdash; the same `Example` you'll see referenced across the rest of the Package Development pages.

## ⚙️ Prerequisites

- A working Krayin application &mdash; see [Installation](../introduction/installation.md).
- **Composer** &mdash; bundled when you install PHP via [php.new](../introduction/requirements.md#install-php-8-3-or-higher).

There are two paths from here. **Quickstart** is recommended &mdash; one command does the whole scaffold for you. **Manual setup** is below if you want to see exactly what the generator does.

## 🪄 Quickstart &mdash; Package Generator

The official [Krayin Package Generator](https://github.com/krayin/krayin-package-generator) creates every folder, file, and service-provider stub for you.

### 1. Install the generator

Run this in your Krayin application's root directory:

```bash
composer require krayin/krayin-package-generator
```

### 2. Generate the package

```bash
php artisan package:make Webkul/Example
```

This creates the full `packages/Webkul/Example/` tree with all the standard sub-folders (`src/Config`, `src/Database`, `src/Http`, `src/Models`, `src/Providers`, `src/Routes`, etc.) and a working service provider.

::: tip Re-running the generator
If the package directory already exists and you want to overwrite it, pass `--force`:

```bash
php artisan package:make Webkul/Example --force
```
:::

### 3. Register the namespace in `composer.json`

Add your package to the `psr-4` block in the **root** `composer.json`:

```json
"autoload": {
    "psr-4": {
        "Webkul\\Example\\": "packages/Webkul/Example/src"
    }
}
```

### 4. Register the service provider

Add the provider to the `providers` array in `config/app.php`:

```php
'providers' => ServiceProvider::defaultProviders()->merge([
    // ...
    Webkul\Example\Providers\ExampleServiceProvider::class,
])->toArray(),
```

### 5. Autoload and publish

```bash
composer dump-autoload
php artisan optimize
php artisan vendor:publish --provider=Webkul\Example\Providers\ExampleServiceProvider
```

When prompted, pick the entry for `Webkul\Example\Providers\ExampleServiceProvider` to publish the package's assets and configs.

Done &mdash; jump to [Verify](#verify) below.

## 🧱 Manual setup

Use this path when you want to learn the package layout by building it by hand, or when you can't add the generator dependency.

### 1. Create the package directory

Inside `packages/Webkul/`, create your package folder with a `src/` sub-directory:

```text
packages
└── Webkul
    └── Example
        └── src
```

### 2. Create the service provider

Inside `src/`, create a `Providers/` folder and add `ExampleServiceProvider.php`:

```text
packages
└── Webkul
    └── Example
        └── src
            └── Providers
                └── ExampleServiceProvider.php
```

Paste this into the file:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        //
    }

    public function register(): void
    {
        //
    }
}
```

### 3. Register the namespace in `composer.json`

Add the package to the `psr-4` block in the **root** `composer.json`:

```json
"autoload": {
    "psr-4": {
        "Webkul\\Example\\": "packages/Webkul/Example/src"
    }
}
```

### 4. Register the service provider

Add the provider to the `providers` array in `config/app.php`:

```php
'providers' => ServiceProvider::defaultProviders()->merge([
    // ...
    Webkul\Example\Providers\ExampleServiceProvider::class,
])->toArray(),
```

### 5. Autoload

```bash
composer dump-autoload
```

## 🧪 Verify

Confirm Laravel picked up your service provider:

```bash
php artisan about | grep "Webkul\\\\Example"
```

You should see `Webkul\Example\Providers\ExampleServiceProvider` in the list. If nothing prints, re-check the namespace in `composer.json` and re-run `composer dump-autoload`.

## 📝 Next steps

Your package is registered but empty. Build it out in this order &mdash; each page assumes the previous one is done:

1. [Routes](./routes.md) &mdash; wire up admin URLs for your package.
2. [Migrations](./create-migrations.md) &mdash; define the database schema.
3. [Models](./create-models.md) &mdash; the Eloquent layer.
4. [Repository](./store-data-through-repositories.md) &mdash; the data-access layer Krayin standardises on.
5. [Controllers](./controllers.md) &mdash; handle requests, talk to repositories.
6. [Views](./views.md) and [Layouts](./layouts.md) &mdash; render Blade templates.
7. [Validation](./validation.md) &mdash; form requests for create / update.
8. [Admin Menu](./add-menu-in-admin.md) &mdash; surface your package in the sidebar.
9. [Access Control List](./create-acl.md) &mdash; gate routes by user permission.
10. [Localization](./localization.md) &mdash; translation files.
11. [Assets](./assets.md) &mdash; JS / CSS bundling for your package.
12. [DataGrid](./datagrid.md) &mdash; tabular list views with filters and sorting.
13. [Blade Components](./blade-components.md) &mdash; reuse the admin UI primitives.
