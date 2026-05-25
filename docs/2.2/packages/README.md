# Package Development

A **package** is a self-contained Laravel module that adds functionality to Krayin without touching the core. Every built-in Krayin feature ships as a package (see [Packages](../architecture/packages.md)), and your own customisations should too &mdash; that's what keeps upgrades painless and code shareable across projects.

This section is the build-it-yourself guide &mdash; each page covers one slice of a package (routes, controllers, repositories, ...). Follow them in order and you'll have a working CRUD package by the time you reach the end.

## What's in this section

- [Getting Started](./create-package.md) &mdash; scaffold a package called **Example**, register its service provider, dump the autoloader.
- [Admin Menu](./add-menu-in-admin.md) &mdash; add a sidebar entry via `config/admin-menu.php`.
- [Assets](./assets.md) &mdash; per-package Vite, Tailwind, PostCSS, HMR + production builds.
- [Blade Components](./blade-components.md) &mdash; reusable admin UI primitives (`<x-admin::layouts>`, `<x-admin::datagrid>`, ...).
- [Access Control List](./create-acl.md) &mdash; permission entries gated with `bouncer()->can()`.
- [Models](./create-models.md) &mdash; the three-part Concord pattern: Contract, Model, Proxy.
- [Migrations](./create-migrations.md) &mdash; database schema for your package.
- [Controllers](./controllers.md) &mdash; admin / shop split, repository injection, view returns.
- [DataGrid](./datagrid.md) &mdash; paginated, filterable, sortable list views.
- [Layouts](./layouts.md) &mdash; extending or overriding the admin layout.
- [Localization](./localization.md) &mdash; multi-language strings via `Resources/lang/<locale>/app.php`.
- [Routes](./routes.md) &mdash; admin route registration with `admin` middleware.
- [Repository](./store-data-through-repositories.md) &mdash; Prettus-based data-access layer.
- [Validation](./validation.md) &mdash; Form Request classes for input validation.
- [Views](./views.md) &mdash; Blade templates under `Resources/views/` with a namespace.

## Quick links

| You want to... | Go to |
| --- | --- |
| Create your first package | [Getting Started](./create-package.md) |
| Add a CRUD list view | [DataGrid](./datagrid.md) |
| Add a sidebar entry | [Admin Menu](./add-menu-in-admin.md) |
| Lock a route behind a permission | [Access Control List](./create-acl.md) |
| Ship CSS / JS with your package | [Assets](./assets.md) |
| Override an existing core file | [Override a Layout](../digging-deeper/override-a-layout.md) |

## Build-from-scratch order

Each page assumes the previous one is done. Follow this order for a complete walkthrough:

1. [Getting Started](./create-package.md) &mdash; scaffold the package and register its service provider.
2. [Routes](./routes.md) &mdash; wire admin URLs.
3. [Migrations](./create-migrations.md) &mdash; define the database schema.
4. [Models](./create-models.md) &mdash; Eloquent model + contract + Concord proxy.
5. [Repository](./store-data-through-repositories.md) &mdash; data-access layer.
6. [Controllers](./controllers.md) &mdash; handle requests, talk to repositories.
7. [Views](./views.md) and [Layouts](./layouts.md) &mdash; Blade templates wrapped in the admin shell.
8. [Validation](./validation.md) &mdash; form-request rules.
9. [Admin Menu](./add-menu-in-admin.md) &mdash; surface the package in the sidebar.
10. [Access Control List](./create-acl.md) &mdash; gate routes by permission.
11. [Localization](./localization.md) &mdash; translation files.
12. [Assets](./assets.md) &mdash; JS / CSS bundling with Vite.
13. [DataGrid](./datagrid.md) &mdash; sortable / filterable / paginated list views.
14. [Blade Components](./blade-components.md) &mdash; reusable admin UI primitives.

## Standard package layout

Every Krayin package follows the same folder structure, so once you know one you know them all. Reference tree for a package called **Example**:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── Config
            │   ├── acl.php
            │   ├── admin-menu.php
            │   └── system.php
            ├── Console
            │   └── Commands
            ├── Contracts
            │   └── Example.php
            ├── Database
            │   ├── Migrations
            │   │   └── 2023_04_21_173057_create_examples_table.php
            │   └── Seeders
            ├── DataGrids
            │   └── Admin
            │       └── ExampleDataGrid.php
            ├── Events
            ├── Http
            │   ├── Controllers
            │   │   └── Admin
            │   │       └── ExampleController.php
            │   ├── Middleware
            │   └── Requests
            │       └── ExampleRequest.php
            ├── Listeners
            ├── Mail
            ├── Models
            │   ├── Example.php
            │   └── ExampleProxy.php
            ├── Providers
            │   ├── ExampleServiceProvider.php
            │   ├── ModuleServiceProvider.php
            │   └── EventServiceProvider.php
            ├── Repositories
            │   └── ExampleRepository.php
            ├── Routes
            │   └── admin-routes.php
            └── Resources
                ├── assets
                │   ├── css/app.css
                │   ├── js/app.js
                │   └── images
                ├── lang
                │   └── en
                │       └── app.php
                └── views
                    ├── admin
                    │   └── examples
                    │       ├── index.blade.php
                    │       ├── create.blade.php
                    │       └── edit.blade.php
                    └── components
```
