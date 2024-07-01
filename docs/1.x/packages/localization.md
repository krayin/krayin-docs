# Localization

[[TOC]]

To learn in detail about Localization, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/localization).

## Directory Structure

- Now, let's create a language file for our package. Create a **`lang`** directory in the **`packages/Webkul/Category/src/Resources`** path.

- Inside the **`lang`** directory, you can create different folders for language translations. For example, you can create folders for English ('en'), Hindi ('hi'), etc. For now, let's create a directory named **`en`** (representing the language code). Inside the **`en`** directory, create a file named **`app.php`** for language translation.

```php
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Resources
                      ├── ...
                      └── lang
                          └── en
                              └── app.php
```

- Now, let's write a translation in **`app.php`** as follows:

```php
  <?php

  return [
    'admin' => [
        'name' => 'John Doe'
    ]
  ];
```

## Load Translation from Package

- We need to register the language file in the service provider.

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
         // ...

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'category');
      }
  }
  ```

- Add the following code to your Blade file:

  ```html
  {{ __('category::app.admin.name') }}
  ```

  ::: details Admin Output

  ![Translation Output](../../assets/images/package-development/category-admin-lang-output.png)

  :::