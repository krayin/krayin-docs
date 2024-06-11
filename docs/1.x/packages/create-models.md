# Models

[[TOC]]

To understand Models in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/eloquent).

We are using the [konekt/concord](https://packagist.org/packages/konekt/concord) package, which is an extension of Laravel. It helps in building modular Laravel applications.

## Using Krayin Package Generator

- This command creates a new **`Category`** Model inside your package.

  ```sh
  php artisan package:make-model Category Webkul/Category
  ```

- This command creates the following files:
  - New model **`Category.php`** in the **`packages/Webkul/Category/src/Models`** directory.
  - New model proxy **`CategoryProxy.php`** in the **`packages/Webkul/Category/src/Models`** directory.
  - New model contract **`Category.php*`** in the **`packages/Webkul/Category/src/Contracts`** directory.

## Using Laravel Artisan Command

Before creating the model class, we need to create two things: the **`Contract`** and the **`Proxy`**.

### Contract

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the **`Illuminate\Contracts\Queue\Queue`** contract defines the methods needed for queueing jobs, while the **`Illuminate\Contracts\Mail\Mailer`** contract defines the methods needed for sending an email.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with various drivers and a mailer implementation powered by SwiftMailer.

All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for all available contracts and a single, decoupled package that can be used by package developers.

- Now, create a folder named **`Contracts`** inside **`Webkul/Category/src/`** and create an interface file named **`Category.php`**.

  ```
  packages
  └── Webkul
      └── Category
          └── src
              ├── ...
              └── Contracts
                  └── Category.php
  ```

- Copy the following code into the **`Category.php`** file.

  ```php
  <?php

  namespace Webkul\Category\Contracts;

  interface Category
  {
  }
  ```

### Proxy

Proxies, as their name suggests, lead you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

- Now, create a **`Models`** folder inside **`packages/Webkul/Category/src/`**. Inside the **`Models`** folder, create a model proxy file named **`CategoryProxy.php`**. This Proxy class will extend **`Konekt\Concord\Proxies\ModelProxy`**.

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

- Copy the following code into the **`CategoryProxy.php`** file.

  ```php
  <?php

  namespace Webkul\Category\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class CategoryProxy extends ModelProxy
  {
  }
  ```

### Model

- The simple way to create a model is to execute the `make:model` artisan command:

  ```sh
  php artisan make:model Category
  ```

- Now, move your **`Category`** model from the project root directory (i.e., **`App/Models`**) to the **`packages/Webkul/Category/src/Models`** folder.

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

- Copy the following code into the **`Category.php`** file.

  ```php
  <?php

  namespace Webkul\Category\Models;

  use Illuminate\Database\Eloquent\Model;
  use Webkul\Attribute\Traits\CustomAttribute;
  use Webkul\Category\Contracts\Category as CategoryContract;

  class Category extends Model implements CategoryContract
  {
      use CustomAttribute;

      /**
      * The attributes that are mass assignable.
      *
      * @var array
      */
      protected $fillable = [
          'name',
          'slug',
          'description',
      ];
  }

  ```

### Module Service Provider

- Now, we need to create a provider named **`ModuleServiceProvider.php`** inside **`Webkul/Category/src/Providers`**.

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

- In this file, we register the models used in this package. You can see the code below.

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

- Finally, register your **`ModuleServiceProvider.php`** in the **`config/concord.php`** file.

  ```php
  <?php

  return [
      'modules' => [
          // Other service providers
          \Webkul\Category\Providers\ModuleServiceProvider::class,
      ]
  ];
  ```