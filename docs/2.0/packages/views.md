# Views

[[TOC]]

## Introduction

Views in Laravel are responsible for separating the application's logic from the presentation layer. They provide a clean way to manage and organize the HTML content of your application. Views are typically stored in the `resources/views` directory and are rendered using the Blade templating engine, which offers a simple and powerful way to create dynamic content.

By using views, you can create reusable templates and components, making your code more maintainable and easier to understand. Blade templates allow you to use control structures like loops and conditionals, as well as to include other templates, which helps to keep your views organized and modular.

To learn in detail about Views, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/views).

Here's a basic example of a Blade template:

## Directory Structure

To organize the views for our `Category` package, we need to set up a specific directory structure. Follow the steps below to create the necessary directories.

#### Create the `Resources` Directory

- Navigate to the `packages/Webkul/Category/src` directory.
- Create a directory named `Resources`.

#### Create the `views` Directory

- Inside the `Resources` directory, create another directory named `views` and inside the views directory create category directory.
- Inside the `views/category` directory, create a file named `index.blade.php`, `create.blade.php`, `edit.blade.php` .

The updated directory structure will look like this:

```bash
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          └── category
                              ├── create.blade.php
                              ├── edit.blade.php
                              └── index.blade.php
  ```

### Adding HTML Content

Below is an example of basic HTML content that you can add to each `index.blade.php` file.

#### `index.blade.php` in the `category` Directory

```php
<x-admin::layouts>
    <x-slot:title>
        @lang('category::app.categories.index.title')
    </x-slot>

    <!-- Content -->
    <div class="flex gap-4">

    </div>
</x-admin::layouts>
```

## Load Views from Package

To make the views in our package accessible, we need to register them in the service provider's `boot` method. This involves updating the `CategoryServiceProvider.php` file to include the view loading logic. Follow the steps below:

#### Open the Service Provider File

- Navigate to the `packages/Webkul/Category/src/Providers` directory.
- Open the `CategoryServiceProvider.php` file.

#### Update the `boot` Method

- Inside the `boot` method of the `CategoryServiceProvider` class, add the logic to load views from the package.

#### Updated `CategoryServiceProvider.php`

Here is the updated code for `CategoryServiceProvider.php`:

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
        // ... 

        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'category');
    }
}
```

#### Explanation

- The `namespace` keyword defines the namespace for the `CategoryServiceProvider` class, which is `Webkul\Category\Providers`.
- The `CategoryServiceProvider` class extends Laravel's base `ServiceProvider` class.
- The `boot` method is used to bootstrap any application services.
- Inside the `boot` method, we use the `$this->loadViewsFrom` method to register the views from the package.
- The `loadViewsFrom` method takes two arguments:

    - The path to the views directory within the package: `__DIR__ . '/../Resources/views'`.
    - A namespace for the views: `'category'`.

## Rendering Views

In Laravel applications, views are typically rendered from controller methods using the `view` helper function. This section describes how views are invoked and passed data from a controller.

```php
<?php

namespace Webkul\Category\Http\Controllers;

use Illuminate\View\View;
use Webkul\Category\Http\Controllers\Controller;
use Webkul\Category\Repository\CategoryRepository;

class CategoryController extends Controller
{
    /**
     * Create a controller instance.
     * 
     * @return void
     */
    public function __construct(protected CategoryRepository $categoryRepository)
    {
    }

    /**
     * Display the listing of the resource.
     */
    public function index(): View
    {
        $categories = $this->categoryRepository->with(['author'])->all();

        return view('category::category.index', compact('categories'));
    }
}
```

#### Explanation

- The `view` helper function in Laravel is used within the `index` method of the `CategoryController` to render the `category::category.index` view.

- It accepts two parameters the name of the view (`category::category.index`) and an array of data (`compact('categories')`) to pass to the `view`.

## Blade File Naming Convention

Krayin utilizes Blade templates to handle `listing`, `creation`, and `updating` operations for resources like products, leads, persons, organizations, and categories. This section provides a detailed guide on how to implement these operations using Blade templates within your Krayin package.

### Listing (Index Blade):

- The `index.blade.php` template is used to display a list of all records (categories).

- The controller's `index` method fetches all categories and passes them to the view.

### Creation (Create Blade):

- The `create.blade.php` template contains a form for creating new records.

- The controller's `create` method renders this view.

### Updating (Edit Blade):

- The `edit.blade.php` template contains a form for editing existing records.

- The controller's `edit` method fetches the specific categories and passes it to the view.

By following these steps, you can effectively utilize Blade templates in Krayin for listing, creating, and updating resources, ensuring a structured and maintainable approach to managing CRUD operations within your application.