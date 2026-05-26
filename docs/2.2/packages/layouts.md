# Layouts

The admin layout (`<x-admin::layouts>`) is the shared shell that wraps every page in the Krayin admin &mdash; sidebar, header, theming, dark-mode toggle, and the slots you use to plug in page-specific bits. This page shows how to wrap your package's [views](./views.md) in it.

For Blade-specific syntax, see the [Laravel Blade docs](https://laravel.com/docs/11.x/blade).

## 🧱 Wrap a view in the admin layout

Every admin Blade template should open with `<x-admin::layouts>` and close with `</x-admin::layouts>`. Anything between the tags becomes the page body:

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('example::app.examples.index.title')
    </x-slot>

    @pushOnce('styles')
        <style>
            /* page-specific CSS */
        </style>
    @endPushOnce

    <div class="container">
        {{-- page content --}}
    </div>

    @pushOnce('scripts')
        <script>
            // page-specific JS
        </script>
    @endPushOnce
</x-admin::layouts>
```

### What each piece does

| Piece | Purpose |
| --- | --- |
| `<x-admin::layouts>` | The shared admin shell &mdash; sidebar, header, theme, slots. Wrap every admin page in this. |
| `<x-slot:title>` | Sets the `<title>` of the page and the in-page heading area. |
| `@pushOnce('styles')` | Inject a `<style>` block into the layout's `<head>`. The *Once* variant ensures it's emitted only once even if the partial is included multiple times. |
| `@pushOnce('scripts')` | Inject a `<script>` block before `</body>`. Same dedup behaviour as `styles`. |

::: warning Always use translation keys
The example above pulls the title from `example::app.examples.index.title`. Hard-coded strings break multi-language sites. Add the matching key to your package's [language files](./localization.md).
:::

## 🛠️ Build your own master layout

If you need a layout that doesn't inherit from the admin shell &mdash; a print view, an embeddable iframe, a public webform &mdash; create one inside your package's `views/layouts/` folder:

```text
packages
└── Webkul
    └── Example
        └── src
            └── Resources
                └── views
                    └── layouts
                        └── master.blade.php
```

Then extend it from any view with `@extends('example::layouts.master')`. Make sure your service provider has called `loadViewsFrom(__DIR__ . '/../Resources/views', 'example')` &mdash; that's what registers the `example::` namespace ([Views](./views.md#wire-the-views-into-the-service-provider)).

## 🧪 Verify

Open any page in your package &mdash; the sidebar, header, and dark-mode toggle should render. If you see a bare page or a `Component [x-admin::layouts] not found` error, double-check that:

1. The Admin package is loaded (it's bundled with Krayin by default).
2. You ran `php artisan view:clear` after your last change.

## 📝 Next steps

- [Blade Components](./blade-components.md) &mdash; the full library of reusable admin pieces (`<x-admin::breadcrumbs>`, `<x-admin::datagrid>`, `<x-admin::modal>`, …).
- [Assets](./assets.md) &mdash; bundle your package's JS / CSS the right way instead of inlining `@pushOnce`.
