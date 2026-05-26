# Architecture Overview

This page is a comprehensive overview of Krayin CRM's architecture and core principles, designed to help developers understand the framework's structure and implementation approach.

## 🛠️ Technology Stack

Krayin is built on a modern, robust technology stack leveraging proven [open-source](https://en.wikipedia.org/wiki/Open_source) technologies:

- **[PHP](https://php.net)** — server-side programming language
- **[Laravel](https://laravel.com)** — PHP framework for web-application development
- **[Vue.js](https://vuejs.org/)** — progressive JavaScript framework for user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS framework for styling

## 🧱 Core Architecture Principles

### Modular Package Structure

Krayin follows a **modular architecture** where each core piece of functionality &mdash; Leads, Contacts, Organizations, Quotes, Activities, Mail, Settings, and so on &mdash; is encapsulated in its own Laravel package. This gives a clean separation of concerns and makes the application easy to customise and extend without touching the core. See [Modular Design](#module-structure-in-krayin) below for the full breakdown of how a module is laid out.

### Component-Based Admin UI

Krayin is an admin-only CRM &mdash; there is no customer-facing storefront. The whole admin interface is composed from reusable **Laravel Blade Components**, with Vue.js layered on top for the interactive bits (live filters, modals, dropdowns, kanban drag-and-drop).

Every admin screen pulls in the same building blocks:

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('admin::app.leads.index.title')
    </x-slot>

    <x-admin::breadcrumbs name="leads" />

    <x-admin::datagrid.export :src="route('admin.leads.index')" />
</x-admin::layouts>
```

- `<x-admin::layouts>` &mdash; wraps every page with the admin shell, sidebar, header, and theming.
- `<x-admin::breadcrumbs name="...">` &mdash; renders the breadcrumb trail for the named route.
- `<x-admin::datagrid.export>` &mdash; export controls for any DataGrid.

Components live inside the package that owns them, at the conventional path:

```text
packages/Webkul/<Package>/src/Resources/views/components/
```

They're auto-registered through the package's view namespace (the `admin::` prefix above maps to the Admin package). To browse the built-in components and learn how to add your own, see the [Blade Components guide](../packages/blade-components.md).

### Event-Driven Architecture

The framework implements a comprehensive event system that:

- Triggers events across the application lifecycle &mdash; lead created, contact updated, quote accepted, and so on
- Lets developers add custom functionality through event listeners
- Provides hooks for third-party integrations
- Supports extensibility without core modifications

## 🗂️ Repository Pattern

Krayin uses the **Repository Pattern** on top of Laravel's ORM to add an extra layer of abstraction between business logic and data access. This keeps the codebase consistent, easy to maintain, and easier to change.

### Benefits of the Repository Pattern

- **Consistency** — restricts raw queries throughout the application, ensuring a single, uniform approach to database operations.
- **Maintainability** — better code organisation makes the codebase easier to manage long-term.
- **Flexibility** — changes can be made in one place without rippling through the rest of the codebase.

### Implementation in Krayin

Krayin uses the [Prettus Repository](https://github.com/prettus/l5-repository) package to implement the Repository Pattern. The benefits are:

- **Standardization** — a consistent approach to writing repositories across packages.
- **Extensibility** — easier to extend and customise as your application grows.
- **Separation of concerns** — a clear split between business logic and data-access logic.

### Eloquent ORM

[Eloquent](https://laravel.com/docs/11.x/eloquent), Laravel's ORM, provides a higher level of abstraction over raw SQL and is what Krayin's repositories sit on top of. With Eloquent you work with objects instead of writing SQL by hand &mdash; repositories give those objects a clean, reusable home.

## 🧩 Modular Design

The Modular Package Structure introduced above is what makes Krayin flexible, scalable, and maintainable in practice. Each feature ships as its own package with a predictable layout.

### Key benefits

1. **Separation of concerns** — each module encapsulates a single piece of functionality.
2. **Reusability** — modules can be reused across projects, cutting down on duplicated work.
3. **Maintainability** — isolated modules make bugs easier to find and features easier to add without breaking unrelated code.
4. **Scalability** — new modules can be added without major changes to existing code.

### Module structure in Krayin

Every Krayin module follows the same folder layout, so you always know where to find things:

- **Config** — configuration files for the module.
- **Database** — migrations, seeders, and factories.
- **Http** — controllers, middleware, and request classes.
- **Models** — Eloquent models for the module's data.
- **Repositories** — Repository Pattern implementations for data access.
- **Resources** — views, language files, and other assets.
- **Routes** — module-specific routes.
- **Tests** — unit and feature tests.

Following this consistent structure keeps the codebase clean and approachable, and lets developers build robust, maintainable applications on top of Krayin.
