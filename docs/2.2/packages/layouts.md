# Layouts

[[TOC]]

## Introduction

Layouts in Krayin are fundamental to structuring your application's views in a consistent and reusable way. They provide a template for rendering HTML across multiple pages, ensuring a unified design and user experience. By defining layouts, you can streamline development, improve maintainability, and enhance the overall aesthetics of your web application.

To learn in detail about Layouts, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/blade).

## Category Layout

`@extends('category::layouts.master')` This `@extends` Blade directive to specify which layout the child view should "inherit".

To extend the default layout of the Krayin admin panel, you'll create or modify the `index.blade.php` file located at `packages/Webkul/Category/src/Resources/views/admin/index.blade.php`. Below is a detailed breakdown of how to integrate and customize the layout:

```html
<x-admin::layouts>
    <x-slot:title>
        @lang('category::categories.index.title')
    </x-slot>

    @pushOnce('styles')
        <style>
            /* your styles go here */
        </style>
    @endPushOnce

    <div class="container ">
        <!-- your content goes here -->
    </div>

    @pushOnce('scripts')
        <script>
            /* your script goes here */
        </script>
    @endPushOnce
</x-admin::layouts>
```

| Prop Name   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| **`<x-admin::layouts>`** | This Blade directive to specify which layout the child view should "inherit"   |
| **`<x-slot:title>`** | This is used to define the title of the page.   |
| **`@pushOnce('styles')`** | This is used to add additional css. |
| **`@pushOnce('scripts')`** | This is used to add additional javascript. |

::: warning
Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in **`lang/app.php`**.
:::

If you don't want to include these layouts, you can create your own master file inside the creation layouts directory inside `Resources\views\layouts\master.blade.php`
