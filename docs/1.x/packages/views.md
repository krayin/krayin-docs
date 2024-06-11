# Views

[[TOC]]

To learn in detail about Views, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/views).

## Directory Structure

- Create a **`Resources`** folder in the **`packages/Webkul/Category/src`** path. Inside the **`Resources`** folder, create another folder named **`views`**. Now, inside the **`views`** folder, we need to create folders, named **`category`**. The updated directory structure will look like this:

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          └── category
  ```

- Inside this folder, **`category`**, create a file named **`index.blade.php`** and add some HTML to it.

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          └── category
                              ├── index.blade.php
                              ├── create.blade.php
                              └── edit.blade.php
  ```

  - **`category/index.blade.php`**

    ```html
        @extends('admin::layouts.master')

        @section('page_title')
            {{ __('Category') }}
        @stop

        @section('content-wrapper')
            <div class="content full-page">
                <table-component data-src="{{ route('admin.categories.index') }}">
                    <template v-slot:table-header>
                        <h1>
                            {!! view_render_event('admin.products.index.header.before') !!}

                            {{ Breadcrumbs::render('categories') }}

                            {{ __('Category') }}

                            {!! view_render_event('admin.products.index.header.after') !!}
                        </h1>

                    </template>

                    <template v-slot:table-action>
                        <a href="{{ route('admin.categories.create') }}" class="btn btn-md btn-primary">{{ __('Create Category') }}</a>
                    </template>
                <table-component>
            </div>
        @stop
    ```
## Load Views from Package

- Now, we need to register our views in the service provider's `boot` method. Open the file **`packages/Webkul/Category/src/Providers/CategoryServiceProvider.php`** and update it as follows:

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

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'category');
      }
  }
  ```

- Now, check the routes in your browser.

  ::: details category Output

  ![Admin Browser Output](../../assets/images/package-development/category-package-output.png)

  :::
