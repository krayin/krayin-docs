# Migrations

[[TOC]]

To understand Migrations in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/migrations).

## Using Krayin Package Generator

This command creates a new migration class in the **`packages/Webkul/Category/src/Database/Migrations`** directory.

```sh
php artisan package:make-migration CreateCategoryTable Webkul/Category
```

## Using Laravel Artisan Command

- Create a **`Database`** folder in the **`packages/Webkul/Category/src`** path. Inside the **`Database`** folder, create **`Migrations`** and **`Seeders`** folders.

    ```
    └── packages
        └── Webkul
            └── Category
                └── src
                    ├── ...
                    └── Database
                        ├── Migrations
                        └── Seeders
    ```

- Run the following command with the **`--path`** option to specify where your migration file will be placed.

  ```sh
  php artisan make:migration create_categories_table --path=packages/Webkul/Category/src/Database/Migrations
  ```

- Copy the code provided here and paste it into your migration file.

  ```php
  <?php

  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;

  return new class extends Migration
  {
     /**
      * Run the migrations.
      *
      * @return void
      */
      public function up()
      {
          Schema::create('categories', function (Blueprint $table) {
              $table->id();
              $table->string('slug')->unique();
              $table->string('name');
              $table->longText('description')->nullable();
              $table->timestamps();
          });
      }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
      public function down()
      {
          Schema::dropIfExists('categories');
      }
  };
  ```

### Loading Migration from Package

- We need to add the migrations to our service provider to load them.

  ```php
  <?php

  namespace Webkul\Category\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * CategoryServiceProvider
  *
  * @copyright 2024 Webkul Software PVT. LTD. (http://www.webkul.com)
  */
  class CategoryServiceProvider extends ServiceProvider
  {
     /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {          
          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
      }
  }
  ```

### Creating Tables from Migrations

- Run the following command to create the **`categories`** table in your database.

  ```sh
  php artisan migrate
  ```
