# Models

[[TOC]]

## Introduction

Laravel includes Eloquent, an object-relational mapper (ORM) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table. In addition to retrieving records from the database table, Eloquent models allow you to insert, update, and delete records from the table as well. 
To understand Models in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/eloquent).

We are using the [konekt/concord](https://packagist.org/packages/konekt/concord) package, which is an extension of Laravel. It helps in building modular Laravel applications.

Let's create a new model for your application. We will assume that the package name is "**Category**". Follow these steps:

## Using Krayin Package Generator

To create a new `Category` Model inside your package using the Krayin Package Generator, follow these steps

Execute the following command in your terminal:

  ```sh
  php artisan package:make-model Category Webkul/Category
  ```

This command creates the following files:

- New model **`Category.php`** in the **`packages/Webkul/Category/src/Models`** directory.
- New model proxy **`CategoryProxy.php`** in the **`packages/Webkul/Category/src/Models`** directory.
- New model contract **`Category.php`** in the **`packages/Webkul/Category/src/Contracts`** directory.

## Using Laravel Artisan Command

Before creating the model class, it's essential to create two additional components: the `Contract` and the `Proxy`.

### Create the Contract

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the **`Illuminate\Contracts\Queue\Queue`** contract defines the methods needed for queueing jobs, while the **`Illuminate\Contracts\Mail\Mailer`** contract defines the methods needed for sending an email.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with various drivers and a mailer implementation powered by SwiftMailer.

All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for all available contracts and a single, decoupled package that can be used by package developers.

Now, create a folder named **`Contracts`** inside **`Webkul/Category/src/`** and create an interface file named **`Category.php`**.

```structure
packages
└── Webkul
    └── Category
        └── src
            └── Contracts
                └── Category.php
```

Copy the following code into the **`Category.php`** file.

  ```php
  <?php

  namespace Webkul\Category\Contracts;

  interface Category
  {
  }
  ```

### Create the Proxy

Proxies, as their name suggests, act as intermediaries to the actual model class. Model proxies are used to override the functionality of existing models without creating a new database table.

Navigate to the directory `packages/Webkul/Category/src/` and create a new folder named `Models`.

```
└── packages
  └── Webkul
    └── Category
    └── src
      ├── ...
      └── Models
```

Inside the `Models` folder, create a new PHP file named `CategoryProxy.php`.

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  ├── Contracts
                  │   └── Category.php
                  └── Models
                      └── CategoryProxy.php
  ```

Copy the following code into the **`CategoryProxy.php`** file.

  ```php
  <?php

  namespace Webkul\Category\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class CategoryProxy extends ModelProxy
  {
  }
  ```

### Create the Model

The simple way to create a model is to execute the `make:model` artisan command

  ```sh
  php artisan make:model Category
  ```

Now, move your **`Category`** model from the project root directory (i.e., **`App/Models`**) to the **`packages/Webkul/Category/src/Models`** folder.

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  ├── Contracts
                  │   └── Category.php
                  └── Models
                      ├── Category.php
                      └── CategoryProxy.php
  ```

Copy the following code into the **`Category.php`** file.

```php
<?php

namespace Webkul\Category\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Webkul\User\Models\Admin;
use Webkul\Category\Contracts\Category as CategoryContract;

class Category extends Model implements CategoryContract
{
  /**
   * The attributes that are mass assignable.
   *
   * @var $fillable
   */
  protected $fillable = [
    'parent_id'
    'title',
    'description',
    'status'
  ];

  // ...
}
```

The `Category` model represents a Category Category in the application. It implements the `CategoryContract` and is part of the `Webkul\Category\Models` namespace.

`public function author(): BelongsTo` This method defines a `BelongsTo` relationship between the Category model and the Admin model.

### Create Module Service Provider

To create a provider named `ModuleServiceProvider.php` inside `Webkul/Category/src/Providers` for your Laravel package, follow these steps. 

```
└── packages
  └── Webkul
      └── Category
          └── src
              ├── ...
              └── Providers
                  ├── CategoryServiceProvider.php
                  └── ModuleServiceProvider.php
```

In this file, we register the models used in this package. You can see the code below.

```php
<?php

namespace Webkul\Category\Providers;

use Konekt\Concord\BaseModuleServiceProvider;

class ModuleServiceProvider extends BaseModuleServiceProvider
{
    protected $models = [
        \Webkul\Category\Models\Category::class,
    ];
}
```

The `ModuleServiceProvider` class registers models used in the Category package. It extends `BaseModuleServiceProvider` from the `Konekt\Concord` package.

### Registering ModuleServiceProvider

To integrate the `ModuleServiceProvider` with the Concord module system in Laravel, you need to register it in the `config/concord.php` configuration file.

- Navigate to Configuration File Locate and open the `config/concord.php` file in your Laravel application.

- Add ServiceProvider Inside the `modules` array, add the `ModuleServiceProvider` class to register it with Concord.

```php
<?php

return [
    'modules' => [
        // Other service providers
        \Webkul\Category\Providers\ModuleServiceProvider::class,
    ]
];
```