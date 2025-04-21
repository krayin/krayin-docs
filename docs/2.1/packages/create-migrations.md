# Migrations

[[TOC]]

## Introduction

Migrations are like version control for your database, allowing your team to define and share the application's database schema definition.

Krayin leverages the Laravel Schema facade to offer database-agnostic support for creating and manipulating tables across various database systems supported by Laravel. Migrations in Krayin utilize this powerful feature to manage database schema changes efficiently.

To understand Migrations in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/migrations).

Let's create a new migration file for your application. We will assume that the package name is "**Category**". Follow these steps:

## Using Krayin Package Generator

This command creates a new migration class in the **`packages/Webkul/Category/src/Database/Migrations`** directory.

```bash
php artisan package:make-migration CreateCategoryTable Webkul/Category
```

- `CreateCategoryTable` Specifies the name of the migration file.
- `Webkul/Category` Specifies the package name 

## Using Laravel Artisan Command

Create a `Database` directory in the `packages/Webkul/Category/src` path. Inside the `Database` directory, create `Migrations` and `Seeders` directories.

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

Run the following command with the `--path` option to specify where your migration file will be placed.

  ```bash
  php artisan make:migration create_categories_table --path=packages/Webkul/Category/src/Database/Migrations
  ```

To create a new database table Copy the code provided here and paste it into your migration file. The create method used on the Schema facade. The create method accepts two arguments: the first is the name of the table, while the second is a closure which receives a Blueprint object that may be used to define the new table:

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
            $table->integer('parent_id');
            $table->string('title')->nullable();
            $table->longText('description')->nullable();
            $table->tinyInteger('status')->default(0);
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

We need to add the migrations to our service provider to load them.

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
        $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
    }
}
```

### Creating Tables from Migrations

Run the following command to create the **`Category`** table in your database.

  ```
  php artisan migrate
  ```
