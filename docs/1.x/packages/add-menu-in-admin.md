# Menu

[[TOC]]

## Introduction

The menu in Krayin allows developers to customize and extend the default menu items within the admin panel. By adding custom menu items, you can provide easy access to various sections and features specific to your package. This guide will walk you through the process of configuring the menu for your custom package.

## Configure the menu

To ensure that the menu includes the necessary configuration, follow these steps:

### Create Configuration File

- Navigate to your package's source directory, typically located at `packages/Webkul/Category/src`.

- Create a new directory named `Config` if it doesn't already exist.

- Inside the `Config` directory, create a file `named menu.php`.

```php
└── packages
    └── Webkul
        └── Category
            └── src
                ├── ...
                └── Config
                    └── menu.php
```

### Define Menu Items

Open `menu.php` and define your menu items using an array structure. Each item should include:

- `key` Unique identifier for the menu item.
- `name` Display name of the menu item.
- `route` Laravel route name corresponding to the menu item.
- `sort` Optional. Sort order for menu items.
- `icon` Optional. CSS class for an icon associated with the menu item.

```php
<?php

return [
    [
        'key'   => 'categories',
        'name'  => 'categories',
        'route' => 'category.admin.index',
        'sort'  => 2,
        'icon'  => 'icon-category',
    ],
];
```

### Define Routes

In your package's `routes.php` file, define the named route used in` menu.php` as follows.

```php
Route::get('/category', [CategoryController::class, 'index'])->name('category.admin.index');
```

In this step, we define the route that corresponds to the menu item added in the previous step.

### Add Menu Icon

You can add menu icon by creating the file icons.scss, follow the below provided directory structure.

```php
└── packages
    └── Webkul
        └── Category
            └── src
                ├── ...
                └── Resources
                    ├── ...
                    └── assets
                        ├── sass
                        │   ├── icon.scss
                        │   └── app.sass
                        ├── js
                        │   └── app.js
                        └── images
                    
```

Here the example how you can add menu icon.

```scss
.icon-category {
    background-position: -371px -2px;
    background-image: url("../images/sprite-main.svg");
}
```


### Merge Configuration

In your package's service provider (`CategoryServiceProvider`), use `mergeConfigFrom()` to integrate your `menu.php` configuration with the core menu.

```php
<?php

namespace Webkul\Category\Providers;

use Illuminate\Support\ServiceProvider;

class CategoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/menu.php', 'menu.admin'
        );
    }
}
```

### Optimize Application

Finally, run the following command to optimize your application:

```bash
php artisan optimize:clear
```

After completing these steps, your custom menu item (categories) with its associated route and icon should appear within the admin panel of Krayin.

## Level of Menu

In Krayin, the menu offers two levels of navigation to organize and access different sections and features efficiently:

### First Level (Sidebar)

This level appears in the sidebar and contains the primary menu items. These are the main sections of the admin panel, such as Dashboard, Catalog, and Sales.

### Second Level (Hover Menu)

When you hover over an item in the first-level sidebar menu, the second level appears. This level contains sub-items related to the main section, providing more specific options. For example, hovering over "Catalog" might show options like Products, Categories, and Attributes.
