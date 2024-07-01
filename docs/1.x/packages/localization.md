# Localization

[[TOC]]

## Introduction

Laravel's localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.

Language strings may be stored in files within the application's lang directory. Within this directory, there may be subdirectories for each language supported by the application. This is the approach Laravel uses to manage translation strings for built-in Laravel features such as validation error messages:

To learn in detail about Localization, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/localization).

## Publishing the Language Files

By default, the Laravel application skeleton does not include the lang directory. If you would like to customize Laravel's language files or create your own, you should scaffold the lang directory via the lang:publish Artisan command. The lang:publish command will create the lang directory in your application and publish the default set of language files used by Laravel:

```
php artisan lang:publish
```

## Configuring the Locale

The default language for your application is stored in the `config/app.php` configuration file's `locale` configuration option, which is typically set using the `APP_LOCALE` environment variable. You are free to modify this value to suit the needs of your application.

You may also configure a `"fallback language"`, which will be used when the default language does not contain a given translation string. Like the default language, the fallback language is also configured in the `config/app.php` configuration file, and its value is typically set using the APP_FALLBACK_LOCALE environment variable.

```php
  /*
  |--------------------------------------------------------------------------
  | Application Locale Configuration
  |--------------------------------------------------------------------------
  |
  | The application locale determines the default locale that will be used
  | by the translation service provider. You are free to set this value
  | to any of the locales which will be supported by the application.
  |
  */

  'locale' => env('APP_LOCALE', 'en'),

  /*
  |--------------------------------------------------------------------------
  | Application Fallback Locale
  |--------------------------------------------------------------------------
  |
  | The fallback locale determines the locale to use when the current one
  | is not available. You may change the value to correspond to any of
  | the language folders that are provided through your application.
  |
  */

  'fallback_locale' => 'en',
```

## Create a new Locale

To support localization in your package, you need to create language files. Follow the steps below to set up a language file for English translations.

#### Create the `lang` Folder

- Navigate to the `packages/Webkul/Category/src/Resources` directory.
- Create a directory named `lang`.

#### Create Language Code Folders

- Inside the `lang` directory, create different folders for each language you want to support. For example, you can create folders for English (`en`), Hindi (`hi`), etc.
- For now, let's create a directory named `en` to represent English.

#### Create the `app.php` File

- Inside the `en` directory, create a file named `app.php` for language translations.

### Directory Structure

The updated directory structure will look like this:

```bash
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

### Writing a Translation in `app.php`

To add translations for your package, you can edit the `app.php` file located in the language directory (`en` in this case). Below is an example of how you can define translations:

#### Open the `app.php` File

- Navigate to `packages/Webkul/Category/src/Resources/lang/en`.
- Open the `app.php` file.

#### Add the Translation

- Inside `app.php`, define your translations as an associative array. For example:

```php
<?php

return [
  'categories' => [
    'index' => [
      'title' => 'Categories'
    ],
  ],
];
```

## Load Translation from Package

To make translations from your package accessible, you need to register the language file in the service provider and then use them in your Blade templates.

### Update the Service Provider

- Open the `CategoryServiceProvider.php` file located in `packages/Webkul/Category/src/Providers`.
- Add the following code to the `boot` method:

```php
<?php

namespace Webkul\Category\Providers;

use Illuminate\Support\ServiceProvider;

class CategoryServiceProvider extends ServiceProvider
{
  /**
   * Bootstrap the services.
   *
   * @return void
   */
  public function boot()
  {
    //... 

    $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'category');
  }
}
```

#### Explanation

- This code uses `$this->loadTranslationsFrom` to register translations from the lang directory of your package (`packages/  Webkul/Category/src/Resources/lang`) under the namespace `'category'`.

- The `loadTranslationsFrom` method registers translations for the `'category'` namespace from the specified path (`__DIR__ . '/../Resources/lang'`).

- This makes translations accessible throughout your Laravel application using the `'category'` namespace prefix.

### Use Translations in Blade Files

In your Blade templates (`.blade.php` files), you can use the `@lang` helper function to retrieve translations. Use the namespace 'category' followed by the translation key. For example:

```html
@lang('category::categories.index.title')
```

#### Explanation

- The `@lang('category::categories.index.title')` syntax fetches the translation for for `categories` > `index` > `title`

- Replace `'categories.index.title'` with your actual translation keys to use different translations as needed in your application.

By following these steps, you've effectively loaded translations from your package and integrated them into your Laravel application's Blade templates. This allows you to maintain language-specific content and support localization within your package.
