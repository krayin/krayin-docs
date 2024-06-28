# Controller

[[TOC]]

## Introduction

In Laravel, controllers are responsible for handling the request logic of an application. They act as intermediaries between the models and views, processing user input, interacting with the data layer, and returning the appropriate responses. By organizing related request handling logic into separate classes, controllers make it easier to manage and maintain the application's codebase.

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/controllers).

## How to create Controllers

To start building a controller for our category posts within the Laravel package named "Category", follow the steps below:

### Directory Structure

Create the necessary directory structure within the `packages/Webkul/Category/src` path. To create the directory structure follow the following steps:

1. Navigate to the `packages/Webkul/Category/src` directory.
2. Create an `Http` directory inside `src`.
3. Inside the `Http` directory, create another directory named `Controllers`.
4. Inside the `Controllers` directory, create one file named `Controller.php`
5. Inside both the `Admin` directory, create a `CategoryController.php` file. The updated directory structure will look like this:

```php
└── packages
    └── Webkul
        └── Category
            └── src
                ├── ...
                └── Http
                    └── Controllers
                        ├── Controller.php
                        └── Admin
                            └── CategoryController.php
```

### Creating Controller Files

Now, create the necessary controller files.

#### Base Controller (Controller.php)

In `packages/Webkul/Category/src/Http/Controllers/Controller.php`, you can define the base controller for your package:

```php
  <?php

  namespace Webkul\Category\Http\Controllers;

  use Illuminate\Foundation\Bus\DispatchesJobs;
  use Illuminate\Routing\Controller as BaseController;
  use Illuminate\Foundation\Validation\ValidatesRequests;
  use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

  class Controller extends BaseController
  {
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
  }
```


### CategoryController.php

In `packages/Webkul/Category/src/Http/Controllers/Shop/CategoryController.php`, define the post controller:

```php
  <?php

  namespace Webkul\Category\Http\Controllers\Shop;

  use Webkul\Category\Http\Controllers\Controller;
  use Webkul\Category\Repository\PostRepository;

  class CategoryController extends Controller
  {
    /**
     * Create a controller instance.
     * 
     * @return void
     */
    public function __construct(protected PostRepository $postRepository)
    {
    }

    /**
     * Display the listing of the resource.
     * 
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $categories = $this->postRepository->with(['author'])->all();

        return view('category::shop.index', compact('categories'));
    }

    /**
     * Category details.
     * 
     * @return \Illuminate\View\View
     */
    public function show(int $id) 
    {
        //
    }

    ...
  }
  ```

By following these steps, you will have created the necessary structure and files for handling category posts within your "Category" package. You can now add the specific logic for each method to handle the functionality required for your category posts in both the admin and shop areas.