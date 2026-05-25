# Override a Layout

Krayin's modular architecture lets your package replace core controllers, models, and Blade views without modifying core code. For smaller changes &mdash; injecting a snippet into an existing page &mdash; use the *view render event* system instead of a full override.

This page covers all four mechanisms:

| Mechanism | When to use |
| --- | --- |
| **Override a controller** | You need to change how an existing route handles a request. |
| **Override a model** | You're adding fields, relationships, or business logic to a core model. |
| **Override a Blade view** | You're restyling or restructuring a whole page. |
| **View render events** | You only need to inject a small snippet into a page. |

Before any of these, make sure your package is set up &mdash; see [Create a Package](../packages/create-package.md).

## 🛠️ Override a controller

Use this when a core controller method's logic needs to change &mdash; e.g. you want to add a validation rule, fire an extra event, or change the redirect target.

### 1. Create the custom controller

Extend the core controller and override just the method you care about. Everything else stays inherited.

```text
packages/Webkul/Example/src/Http/Controllers/Product/ProductController.php
```

```php
<?php

namespace Webkul\Example\Http\Controllers\Product;

use Illuminate\Support\Facades\Event;
use Webkul\Admin\Http\Controllers\Products\ProductController as BaseProductController;
use Webkul\Product\Http\Requests\AttributeForm;

class ProductController extends BaseProductController
{
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

### 2. Bind it in the service provider

In your package's main service provider, bind the base controller to your custom one. Laravel's container will then resolve your version everywhere the base is requested.

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\Admin\Http\Controllers\Products\ProductController as BaseProductController;
use Webkul\Example\Http\Controllers\Product\ProductController;

class ExampleServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            BaseProductController::class,
            ProductController::class,
        );
    }
}
```

That's it &mdash; the existing route definitions still point at `BaseProductController`, but the container resolves *your* class.

## 🧱 Override a model

Use this when you need to:

- Add or modify database columns (paired with a migration).
- Add custom relationships, accessors, or mutators.
- Change `$fillable`, `$casts`, or other Eloquent properties.
- Add business logic that the rest of Krayin will inherit automatically.

Krayin uses **Concord** to register models against **Contracts** (interfaces). Bind a different class against the contract and every `app(Contract::class)` resolution &mdash; including inside core repositories &mdash; returns your class.

### 1. Create your model

Extend the core model so you inherit its table, relationships, and behavior, then layer on what's new.

```php
<?php

namespace Webkul\Example\Models;

use Webkul\Lead\Models\Product as BaseProduct;

class Product extends BaseProduct
{
    protected $fillable = [
        'name',
        'description',
        'type',
        'status',
        'custom_field',
    ];
}
```

### 2. Register it against the contract

In your service provider's `boot()`, swap the contract binding:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\Example\Models\Product;
use Webkul\Lead\Contracts\Product as ProductContract;

class ExampleServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->app->concord->registerModel(ProductContract::class, Product::class);
    }
}
```

::: tip ModuleServiceProvider works too
You can also register the override in your package's `ModuleServiceProvider` &mdash; whichever provider you prefer to keep model wiring in. Just make sure the provider itself is registered in `bootstrap/providers.php`.
:::

After this, every `app(ProductContract::class)` (and every core repository that resolves the contract) returns *your* `Product` class &mdash; without you touching any core file.

## 🎨 Override a Blade view

Use this when you want to restyle or restructure a whole page &mdash; not just inject a snippet.

The mechanism is Laravel's standard view publishing &mdash; your package ships an alternate copy of a core blade file, and once published, Laravel resolves your copy instead of the core one.

### Example: override `quotes/create.blade.php`

Suppose you want to override:

```text
packages/Webkul/Admin/src/Resources/views/quotes/create.blade.php
```

### 1. Create your replacement view

Keep the same path under `views/` so the publish mapping is one-to-one.

```text
packages/Webkul/Example/src/Resources/views/quotes/create.blade.php
```

Put whatever Blade you want in there &mdash; it can copy and tweak the original, or be a complete rewrite.

### 2. Register a publish path

In your service provider, map your file to Laravel's vendor-override location (`resources/views/vendor/admin/...`):

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../Resources/views/quotes/create.blade.php' =>
                resource_path('views/vendor/admin/quotes/create.blade.php'),
        ]);
    }
}
```

### 3. Publish

Run the vendor publisher and pick your package's provider when prompted:

```bash
php artisan vendor:publish
```

Select `Webkul\Example\Providers\ExampleServiceProvider`. Laravel copies the file into `resources/views/vendor/admin/quotes/create.blade.php` &mdash; and from now on, that's the file rendered for the Quotes create page.

::: tip Edit the published file, not the package file
After publishing, *the file in `resources/views/vendor/admin/...` is the one Laravel actually loads*. Edit it directly. The package copy is just the source for the initial publish.
:::

## 🪄 Use view render events

Use this when you only need to inject a small snippet &mdash; a button, a badge, an extra field &mdash; instead of forking the whole view.

Krayin sprinkles `view_render_event(...)` calls throughout core blades. Listen for one of those events, push a Blade template into it, and your snippet renders inline.

### How a render event looks in core blade

```blade
<div class="flex items-center gap-x-2.5">
    {!! view_render_event('admin.contacts.quotes.create.save_button.before') !!}

    <button type="submit" class="primary-button">
        @lang('admin::app.quotes.create.save-btn')
    </button>

    {!! view_render_event('admin.contacts.quotes.create.save_button.after') !!}
</div>
```

The helper fires the event `admin.contacts.quotes.create.save_button.before` (and `.after`) and renders any templates listeners push into it.

### 1. Add an `EventServiceProvider`

```text
packages/Webkul/Example/src/Providers/EventServiceProvider.php
```

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Event::listen('admin.contacts.quotes.create.save_button.before', function ($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('example::quotes.extra-button');
        });
    }
}
```

`addTemplate(...)` takes a Blade view path &mdash; the contents are rendered exactly where the event fired in the parent view.

### 2. Register the event provider

In your main service provider, register the event provider so it boots:

```php
<?php

namespace Webkul\Example\Providers;

use Illuminate\Support\ServiceProvider;

class ExampleServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(EventServiceProvider::class);
    }
}
```

Now every time the core Quotes create page renders, your snippet appears next to the Save button &mdash; without you owning the whole blade file.

## 🧪 Verify

| Override type | How to verify |
| --- | --- |
| **Controller** | Trigger the route in the admin and confirm your overridden logic ran (a log line, a flash message, a new redirect target). |
| **Model** | `dd(get_class(app(\Webkul\Lead\Contracts\Product::class)))` &mdash; should print your custom class. |
| **Blade view** | Edit the published file in `resources/views/vendor/...` and refresh &mdash; your change should appear instantly. |
| **Render event** | Add the listener, refresh the page, and look for your snippet inline. If nothing renders, double-check the event name spelling. |

If a customisation doesn't take effect, clear caches first:

```bash
php artisan optimize:clear
```

## 📝 Next steps

- [Events Listeners](./events.md) &mdash; the same listener mechanism, used for business events instead of view render events.
- [Helpers](./helpers.md) &mdash; helper functions you'll often call from inside overridden controllers and views.
