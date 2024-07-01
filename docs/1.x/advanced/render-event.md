# View Render Event

[[TOC]]

## Introduction

The **`view_render_event()`** function in Krayin allows you to inject content before or after the main content of a template. This gives you the flexibility to modify the template output as needed.

Here's an example of how you can use **`view_render_event()`** to inject content:

```php
{!! view_render_event('admin.products.create.header.before') !!}

<div class="page-header">

    {{ Breadcrumbs::render('products.create') }}

    <div class="page-title">
        <h1>{{ __('admin::app.products.create-title') }}</h1>
    </div>
</div>

{!! view_render_event('admin.products.create.header.after') !!}
```

In the example above, we use **`view_render_event()`** to inject content before and after the main content of the **`home_page_content`** template.

## Render View

To render content before or after a specific section of a template, follow these steps:

1. Add the event in the blade file where you want to inject the content. For example:

   ```php
   {!! view_render_event('admin.products.create.header.before') !!}
   ```

   In this example, **`krayin.shop.test`** is the event name defined in a random blade file of your project.

2. Next, you need to listen to the event in the **`EventServiceProvider.php`** file. Add the following code in the **`boot()`** method:

   ```php
    <?php

    namespace Webkul\Category\Providers;

    use Illuminate\Support\ServiceProvider;
    use Illuminate\Support\Facades\Event;

    class CategoryServiceProvider extends ServiceProvider
    {
        /**
         * Bootstrap any application services.
         *
         * @return void
         */
        public function boot()
        {
            //  ...
                
            Event::listen('admin.products.create.header.before', function($viewRenderEventManager) {
                $viewRenderEventManager->addTemplate('template file path to be injected');
            });
        }
    }
   ```

   In the code above, replace **`'template file path to be injected'`** with the actual path to the template file that you want to render.

:::warning
   Make sure that you have registered the **`EventServiceProvider`** in your own service provider.
:::

By following these steps, you can use the **`view_render_event()`** function to dynamically inject content before or after the main content of a template in Krayin.
