# Getting Started

[[TOC]]

## Introduction

A package is a self-contained module that encapsulates specific features or functionality, allowing developers to add custom features without altering the core codebase. This approach not only preserves the integrity of the core system but also ensures that updates and maintenance can be carried out smoothly.

By developing packages, you can introduce new functionalities, integrate third-party services, or customize existing features to better meet your business requirements. Each package is isolated, promoting clean code practices and enabling easier debugging and testing.

This guide will take you through the process of creating a package for Krayin, from setting up the directory structure to defining configurations, routes, controllers, models, and views. By the end of this guide, you will have a solid understanding of how to develop and integrate packages into the Krayin platform, enhancing its capabilities while maintaining a robust and maintainable codebase.

## Prerequisites

- A working Krayin application
- Composer installed

## Using Krayin Package Generator

To facilitate package development, you can use the [Krayin Package Generator](https://github.com/krayin/laravel-crm-package-generator). Follow the steps below to install it:

- Install the Krayin Package Generator by running the following command in the root directory of your Krayin application:

   ```bash
   composer require krayin/krayin-package-generator
   ```

- Once installed, you can generate your package using the following command:

    We will assume that the package name is "**Category**".

   - If the package directory does not exist:

    ```bash
    php artisan package:make Webkul/Category
    ```

   - If the package directory already exists, you can use the **`--force`** option to overwrite it:

    ```bash
    php artisan package:make Webkul/Category --force
    ```

   This command will set up the necessary files and directories in the **`packages`** directory.

### Registering Your Package

To register your package, follow these steps:

Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Krayin application. Update it as follows:

   ```json
    "autoload": {
       ...
       "psr-4": {
           "Webkul\\Category\\": "packages/Webkul/Category/src"
        }
       ...
    }
   ```

Register your package's service provider in the **`config/app.php`** file located in the root directory of your Krayin application. Add the following line to the **`providers`** array:

```php
<?php

return [
    
    // Other configuration options

    'providers' => ServiceProvider::defaultProviders()->merge([
        // Other service providers
        Webkul\Category\Providers\CategoryServiceProvider::class,
    ])->toArray(),
    
    // Other configuration options
];
```

### Registering Your Package Using CLI

#### Step 1: Verify the `composer.json` File

Before proceeding, ensure that your package has a valid `composer.json` file. This file defines your package's configuration and dependencies. Below is an example of what the `composer.json` file for `krayin/laravel-admin` should look like:

```json
{
    "name": "krayin/laravel-admin",
    "license": "MIT",
    "authors": [
        {
            "name": "Example",
            "email": "admin@example.com"
        }
    ],
    "autoload": {
        "psr-4": {
            "Webkul\\Admin\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Webkul\\Admin\\Providers\\AdminServiceProvider"
            ],
            "aliases": {}
        }
    },
    "minimum-stability": "dev"
}
```

#### Key Elements of the `composer.json` File

- **Package Name:** `"krayin/laravel-admin"` – The name of the package to be installed.
- **License:** `"MIT"` – Defines the license for the package.
- **Authors:** Information about the package authors, such as name and email.
- **Autoloading:** 
    - `"psr-4"` autoloading is used to map the `Webkul\Admin` namespace to the `src/` directory.
- **Providers:** The `AdminServiceProvider` is listed as a provider to be registered with Laravel automatically.
- **Minimum Stability:** Set to `"dev"` to allow development versions of the package to be installed.

#### Step 2: Install the Package Locally

Once the `composer.json` file is set up, you can install the package locally via Composer's command-line interface.

Run the following command:

```bash
composer require krayin/laravel-admin dev-master
```

This command tells Composer to require the `krayin/laravel-admin` package and install it along with any other dependencies listed in the package's `composer.json`.

### Run the Commands

Run the following commands to autoload your package and publish its assets and configurations:

```bash
composer dump-autoload
php artisan optimize
php artisan vendor:publish --provider=Webkul\Category\Providers\CategoryServiceProvider
```

When prompted to select which items to publish, choose the number corresponding to **`"Webkul\Category\Providers\CategoryServiceProvider"`** and press enter to publish all assets and configurations.

Congratulations! Your package is now registered and ready to use. Start creating something cool!

## Manual Setup of Files

If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default **`package`** directory in Krayin as an example.

### Create Package Directory

Inside the **`packages/Webkul`** directory, create a directory with your package name. Your structure should look like this:

```
└── packages
    └── Webkul
        └── Category
```

In your package directory, create a directory named as **`src`**. This is where you'll put all your package-related files. Your updated structure will look like this:

```
   └── packages
       └── Webkul
           └── Category
               └── src
```

### Create Service Provider

In the **`src`** directory, create a directory named as **`Providers`**. Inside that directory, create a file named as **`CategoryServiceProvider.php`**. Your structure should look like this:

```
   └── packages
       └── Webkul
           └── Category
               └── src
                   └── Providers
                       └── CategoryServiceProvider.php
```

Copy the following code and paste it into **`CategoryServiceProvider.php`**:

```php
   <?php

   namespace Webkul\Category\Providers;

   use Illuminate\Support\ServiceProvider;

   class CategoryServiceProvider extends ServiceProvider
   {
       /**
        * Bootstrap services.
        *
        * @return void
        */
       public function boot()
       {
           //
       }

       /**
        * Register services.
        *
        * @return void
        */
       public function register()
       {
           //
       }
   }
```

### Register Your Package

Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Krayin application. Update it as follows:

```json
    "autoload": {
       ...
        "psr-4": {
           // ...
           "Webkul\\Category\\": "packages/Webkul/Category/src"
        }
    }
```

Register your package's service provider in the **`config/app.php`** file located in the root directory of your Krayin application. Add the following line to the **`providers`** array:

```php
<?php

return [
    // ...

    'providers' => ServiceProvider::defaultProviders()->merge([
        // ...

        Webkul\Category\Providers\CategoryServiceProvider::class,

        // ...
    ])->toArray(),
    
    // ...
];
```

### Run the Commands

Run the following command to autoload your package:

```bash
   composer dump-autoload
```

Your package is now ready to use !