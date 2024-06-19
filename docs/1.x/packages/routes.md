# Routes

[[TOC]]

To learn in detail about Routes, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/routing).

## Directory Structure

- Create a **`Routes`** folder inside **`packages/Webkul/Category/src`** and create two files named **`admin-routes.php`**. The updated directory structure will look like this:

    ```
    └── packages
        └── Webkul
            └── Category
                └── src
                    ├── ...
                    └── Routes
                        └── admin-routes.php
    ```

- **`admin-routes.php`**: This file is for admin routes. Add the following code to this file:

  ```php
    <?php

    use Illuminate\Support\Facades\Route;
    use Webkul\Category\Http\Controllers\Category\CategoryController;

    Route::group(['middleware' => ['web', 'admin_locale']], function () {
        Route::get('/', 'Webkul\Admin\Http\Controllers\Controller@redirectToLogin')->name('krayin.home');

        Route::prefix(config('app.admin_path'))->group(function () {
            Route::get('categories', [CategoryController::class, 'index'])->name('admin.categories.index');

            Route::get('categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');

            Route::post('categories/create', [CategoryController::class, 'store'])->name('admin.categories.store');

            Route::get('categories/edit/{id}', [CategoryController::class, 'edit'])->name('admin.categories.edit');

            Route::put('categories/edit/{id}', [CategoryController::class, 'update'])->name('admin.categories.update');

            Route::delete('categories/delete/{id}', [CategoryController::class, 'destroy'])->name('admin.categories.delete');

            Route::post('categories/massdelete', [CategoryController::class, 'massDestroy'])->name('admin.categories.massdelete');

            Route::post('categories/massupdate', [CategoryController::class, 'massUpdate'])->name('admin.categories.massupdate');
        });
    });

  ```

## Loading Routes

- Now, we need to register our routes in the service provider's boot method, which is located in **`CategoryServiceProvider.php`**.

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
          //... 
          
          $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
      }
  }
  ```