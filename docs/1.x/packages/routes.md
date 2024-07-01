# Routes

[[TOC]]

## Introduction

Routes in Laravel define the entry points of your application, mapping HTTP requests to specific controllers or closures. They play a crucial role in defining how users interact with your web application's endpoints.

Routes can be defined to handle various HTTP methods (GET, Category, PUT, DELETE, etc.) and can include parameters and route parameters to capture dynamic values from the URL. Laravel's routing system is powerful and flexible, allowing for easy RESTful routing and middleware application to routes.

For detailed information on Laravel routes, including how to define routes, use route parameters, and apply middleware, refer to the [Laravel Documentation on Routing](https://laravel.com/docs/11.x/routing).

## Create a new Route

Let's start by creating a route to display the categories. We will assume that the package name is "Category".

Start by creating a `Routes` directory inside `packages/Webkul/Category/src`.

Inside the `Routes` directory, create file named `routes.php`.

The updated directory structure will look like this:

```php
packages
└── Webkul
    └── Category
        └── src
            ├── ...
            └── Routes
                └── routes.php
```

### Routes

`routes.php` This file is for Routes. Add the following code to this file:

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Category\Http\Controllers\Admin\CategoryController;

Route::group([
    'middleware' => ['web', 'admin_locale'],
    'prefix'     => config('app.admin_path')
], function () {
    Route::get('/categories', [CategoryController::class, 'index']);
});
```

#### Explanation

Routes inside `routes.php` are prefixed with the admin URL (`config('app.admin_path')`) and apply the `web` and `admin_locale` middleware groups. Adjust the middleware and URL prefix according to your application's configuration.

## Loading Routes

### Register Routes in ServiceProvider

In the CategoryServiceProvider.php` class, load the routes using the loadRoutesFrom method inside the boot method.

```php
<?php

namespace Webkul\Category\Providers;

use Illuminate\Support\ServiceProvider;

CategoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
       // ...
        
        $this->loadRoutesFrom(__DIR__ . '/../Routes/routes.php');
    }

    /**
     * Register services.
     * 
     * @return void
     */
    public function register()
    {
        // ...
    }
}
```

#### Explanation

The `loadRoutesFrom` method registers the routes defined in `routes.php`, within the Laravel application, integrating them into the routing system.

## Available HTTP methods

Basic routes are the most common type of routes in Laravel. They respond to HTTP requests like `GET`, `POST`, `PUT`, `DELETE`, etc., and map the URL to a specific controller method or closure function. For example:

### GET

The `GET` method is used to retrieve data from the server. It is typically used to display pages or retrieve information.

```php
// Define a route that responds to a GET request
Route::get('categories', [CategoryController::class, 'index']);
```

### POST

The `POST` method is used to submit data to the server. It is commonly used for form submissions.

```php
// Define a route that responds to a Category request
Route::post('categories', [CategoryController::class, 'store']);
```

### PUT

The `PUT` method is used to update existing data on the server. It is usually used for updating resources.

```php
// Define a route that responds to a PUT request
Route::put('categories/{id}', [CategoryController::class, 'update']);
```

### DELETE

The `DELETE` method is used to delete data from the server. It is used to remove resources.

```php
// Define a route that responds to a DELETE request
Route::delete('categories/{id}', [CategoryController::class, 'destroy']);
```

### PATCH

The `PATCH` method is similar to `PUT`, but it is used to make partial updates to data on the server.

```php
// Define a route that responds to a PATCH request
Route::patch('categories/{id}', [CategoryController::class, 'partialUpdate']);
```
