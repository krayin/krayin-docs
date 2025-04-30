# Overview

Krayin CRM enables seamless customization through overrides and events. You can override controllers, models, and views to modify core logic, database behavior, or UI. Additionally, view render events allow dynamic content injection into Blade templates, making extensions modular and non-intrusive.

## How to override controller

In some scenarios, you may need to override a controller or a specific method from an existing controller provided by a Krayin or Webkul package. Krayin's modular architecture supports a clean and extensible way to achieve this without modifying the core package code.

This guide outlines the proper steps to override a controller method.

### Directory Structure

First, create a controller within your custom package by following the existing structure:

```
└── Webkul
    └── <PackageName>
        └── src
            ├── Http
            │   └── Controllers
            │       └── Product
            │           └── ProductController.php
```

> Replace `<PackageName>` with the actual name of your custom package.

### Overriding a Method

To override a method such as `store` from the base `ProductController`, extend the base controller and redefine the method in your custom controller.

```php
<?php

namespace Webkul\<PackageName>\Http\Controllers\Product;

use Webkul\Admin\Http\Controllers\Products\ProductController as BaseProductController;
use Illuminate\Support\Facades\Event;
use Webkul\Product\Http\Requests\AttributeForm;

class ProductController extends BaseProductController
{
    /**
     * Store a newly created product.
     *
     * @param  \Webkul\Product\Http\Requests\AttributeForm  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AttributeForm $request)
    {
        Event::dispatch('product.create.before');

        $product = $this->productRepository->create($request->all());

        Event::dispatch('product.create.after', $product);

        session()->flash('success', trans('admin::app.products.index.create-success'));

        return redirect()->route('admin.products.index');
    }
}
```

This approach ensures that all methods from the original controller are available while allowing you to customize specific ones.

### Registering the Custom Controller

After creating the custom controller, bind it to the original controller in your package's service provider. This ensures that Laravel uses your overridden controller.

Typical structure of the service provider:

```
└── Webkul
    └── <PackageName>
        └── src
            ├── Providers
            │   ├── ProductServiceProvider.php
            │   └── ModuleServiceProvider.php
            └── Routes
                └── admin-routes.php
```

In your `ProductServiceProvider`, register the controller binding:

```php
<?php

namespace Webkul\<PackageName>\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\<PackageName>\Http\Controllers\Product\ProductController;
use Webkul\Admin\Http\Controllers\Products\ProductController as BaseProductController;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     */
    public function register()
    {
        $this->registerControllers();
    }

    /**
     * Bind the custom controller.
     */
    protected function registerControllers()
    {
        $this->app->bind(
            BaseProductController::class,
            ProductController::class,
        );
    }
}
```

## How to override Model

Sometimes, it becomes necessary to override an existing Eloquent model in Krayin, especially when you need to:

- Add or modify database table columns
- Add custom relationships
- Define new accessors or mutators
- Customize model-specific logic
- Modify `$fillable`, `$casts`, or other Eloquent properties

Instead of modifying the core model files directly (which is not recommended and will be lost on updates), Krayin supports model overriding using Laravel’s service container and Concord’s model registration system.

Krayin uses **Contracts** (interfaces) for its models, which makes overriding clean and maintainable.

Here’s how you can override an existing model, such as the `Product` model used by the Lead package.

### Step 1: Create Your Custom Model

Create a new model in your package that extends the core model:

```php
<?php

namespace Webkul\<PackageName>\Models;

use Webkul\Lead\Models\Product as BaseProduct;

class Product extends BaseProduct
{
    protected $fillable = [
        'name',
        'description',
        'type',
        'status',
        'custom_field', // your additional column
    ];

    // You can add new relationships, accessors, or business logic here
}
```

### Step 2: Register the Custom Model

Next, bind your custom model to the original contract using Concord in your package’s service provider.

```php
<?php

namespace Webkul\<PackageName>\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\Lead\Contracts\Product as ProductContract;
use Webkul\<PackageName>\Models\Product;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->overrideCoreModels();
    }

    /**
     * Register the custom models to override the core ones.
     */
    protected function overrideCoreModels(): void
    {
        $this->app->concord->registerModel(ProductContract::class, Product::class);
    }
}
```

> **Note:** Always register your service provider in the package’s `ModuleServiceProvider` or your Laravel application config to ensure it’s loaded.

### Why Override a Model?

Model overriding gives you full flexibility to tailor Krayin to your business needs without touching the core package files. Some common use cases include:

- Adding new database fields (`$fillable`)
- Customizing behavior like attribute casting or query scopes
- Defining new relationships with other models
- Enhancing logic for specific modules

By overriding via contract binding, Krayin will automatically resolve your version of the model wherever the contract is used — keeping your changes modular, upgrade-safe, and clean.

Here's the cleaned-up and professional version of your documentation on **Overriding Blade View Files in Krayin**, with improved clarity, structure, and grammar — and no incorrect or misleading information:

## How to override Blade file

In some cases, you may want to override the default blade view files provided by Krayin. This is typically required when:

- You need to change the UI or layout of specific views
- You want to add or remove form fields
- You want to customize how content is displayed without modifying the core Krayin package

Krayin supports this via Laravel's **publishing mechanism**, which allows you to publish and override views in your own package.

### Example: Overriding `create.blade.php` from the Admin Package

Let’s say you want to override the following view:

```
packages/Webkul/Admin/src/Resources/views/quotes/create.blade.php
```

### Step 1: Create the View File in Your Package

You can replicate the same directory structure or use a custom location inside your package. Example structure:

```
Webkul/<PackageName>/src/Resources/views/quotes/create.blade.php
```

> **Note:** The structure under the `views` folder should match the one you are overriding to ensure consistent publishing.

### Step 2: Add Publishable Views in Your Service Provider

In your package's service provider (e.g., `ProductServiceProvider`), define the view file that should be published.

```php
<?php

namespace Webkul\<PackageName>\Providers;

use Illuminate\Support\ServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->publishAssets();
    }

    /**
     * Publish the view files for overriding.
     */
    protected function publishAssets(): void
    {
        $this->publishes([
            __DIR__ . '/../Resources/views/quotes/create.blade.php' =>
                resource_path('views/vendor/admin/quotes/create.blade.php'),
        ]);
    }
}
```

This maps your package’s custom view file to Laravel's expected override location within the `resources/views/vendor` path.

### Step 3: Publish the Views

Once the service provider is registered and the publishable assets are defined, run the following command in your terminal:

```bash
php artisan vendor:publish
```

You’ll see a list of providers. Select your package’s provider (e.g., `Webkul\<PackageName>\Providers\ProductServiceProvider`) to publish the file.

After publishing, Laravel will use your version of the view instead of the default one provided by the core Krayin package.
Here’s a professionally revised version of your documentation for **View Render Events in Krayin**, with corrected grammar, clear structure, and accurate technical guidance:

## How to use View Render Event

Sometimes, you may not want to override an entire Blade file just to add or remove a small HTML snippet. In such cases, **Krayin** supports dynamic template injection using Laravel’s **view render event** mechanism.

This allows you to insert content into specific areas of the DOM without duplicating entire views, making your customizations modular and maintainable.

### Example Usage in a Blade File

Here’s how `view_render_event()` is used in a Blade view:

```blade
<div class="flex items-center gap-x-2.5">
    {!! view_render_event('admin.contacts.quotes.create.save_button.before') !!}

    <button type="submit" class="primary-button">
        @lang('admin::app.quotes.create.save-btn')
    </button>

    {!! view_render_event('admin.contacts.quotes.create.save_button.after') !!}
</div>
```

In the example above, the `view_render_event()` helper fires an event (`admin.contacts.quotes.create.save_button.before`) before and after the "Save" button. You can hook into these events to inject custom Blade views at runtime.

### How to Listen to a View Render Event

To listen to a render event and inject content, follow these steps:

### Step 1: Create an `EventServiceProvider`

Create a file named `EventServiceProvider.php` inside your package’s `Providers` directory:

```
└── Webkul
    └── <PackageName>
        └── src
            ├── Providers
            │   ├── ProductServiceProvider.php
            │   └── EventServiceProvider.php
```

### Step 2: Define the Event Listener

```php
<?php

namespace Webkul\<PackageName>\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        Event::listen('admin.contacts.quotes.create.save_button.before', function ($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('product::shop.quotes.create');
        });
    }
}
```

In this example:

- We’re listening to the event: `admin.contacts.quotes.create.save_button.before`
- We're dynamically injecting the template: `product::shop.quotes.create`
- The contents of that Blade file will be rendered at the position of the event in the DOM

> **Note:** The event name is arbitrary—you can define it as needed for your use case.

### Step 3: Register the EventServiceProvider

Open your main service provider (e.g., `ProductServiceProvider.php`) and register the event service provider:

```php
<?php

namespace Webkul\<PackageName>\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\<PackageName>\Providers\EventServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->register(EventServiceProvider::class);
    }
}
```

- **Why use view render events?**  
  To inject or modify parts of a view dynamically without overriding the entire Blade template.

- **How does it work?**  
  Use `view_render_event()` to mark injectable points and listen to them via Laravel events.

- **Where should the event logic go?**  
  In a dedicated `EventServiceProvider` registered in your main package service provider.

This approach allows you to extend Krayin’s frontend in a clean, non-invasive way, ideal for custom packages or plugins.
