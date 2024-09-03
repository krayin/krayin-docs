# Layouts

[[TOC]]

## Introduction

Layouts in Krayin are fundamental to structuring your application's views in a consistent and reusable way. They provide a template for rendering HTML across multiple pages, ensuring a unified design and user experience. By defining layouts, you can streamline development, improve maintainability, and enhance the overall aesthetics of your web application.

To learn in detail about Layouts, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/blade).

## Category Layout

`@extends('category::layouts.master')` This `@extends` Blade directive to specify which layout the child view should "inherit".

To extend the default layout of the Krayin admin panel, you'll create or modify the `index.blade.php` file located at `packages/Webkul/Category/src/Resources/views/admin/index.blade.php`. Below is a detailed breakdown of how to integrate and customize the layout:

```html
@extends('category::layouts.master')

@push('css')
    <style>
        /*  */
    </style>
@endpush

@section('page_title')
    {{ __('category::categories.index.title') }}
@endsection

@section('content-wrapper')
    <div class="content full-page">
        <!-- -->
    </div>
@endsection

@push('scripts')
    <script>
        // 
    </script>
@endpush
```

| Prop Name   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| **`@extends('category::layouts.master')`** | This `@extends` Blade directive to specify which layout the child view should "inherit"   |
| **`@section('page_title')`** | This is used to define the title of the page.   |
| **`@section('content-wrapper')`** | This is used to define the body of the page. |
| **`@push('css')`** | This is used to add additional css. |
| **`@push('scripts')`** | This is used to add additional javascript. |

::: warning
Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in **`lang/app.php`**.
:::

If you don't want to include these layouts, you can create your own master file inside the creation layouts directory inside `Resources\Views\Layouts\master.blade.php`
