# Architecture concepts

Krayin is a **modular Laravel application**. Every CRM feature &mdash; Leads, Contacts, Activities, Quotes &mdash; lives in its own package under `packages/Webkul/`, glued together through a small set of architectural patterns: Concord model proxies, the Prettus Repository, Blade Components, and an event-driven write path.

This section is the map of those patterns &mdash; what they are, why they exist, and which package implements what.

## What's in this section

- [Overview](./overview.md) &mdash; the architectural tour: tech stack, modular package structure, component-based admin UI, event-driven design, the Repository Pattern, Concord model registration.
- [Packages](./packages.md) &mdash; reference list of every package shipped with core Krayin, A&ndash;Z, with what each one owns.

## Quick links

| You want to... | Go to |
| --- | --- |
| Understand the big picture | [Overview &mdash; Core Architecture Principles](./overview.md#core-architecture-principles) |
| Know which package owns a feature | [Packages](./packages.md) |
| See how blade components work | [Overview &mdash; Component-Based Admin UI](./overview.md#component-based-admin-ui) &middot; [Blade Components guide](../packages/blade-components.md) |
| Wire your own package into the same patterns | [Package Development](../packages/create-package.md) |
| Extend or replace something in core | [Override a Layout](../digging-deeper/override-a-layout.md) |

## Mental model

If you remember nothing else from this section, remember this:

| Layer | Pattern | Where |
| --- | --- | --- |
| **Routing** | Standard Laravel routes, scoped per package, prefixed with `config('app.admin_url')`. | `packages/Webkul/<Name>/src/Routes/admin-routes.php` |
| **Controllers** | Thin &mdash; inject a repository, call it, return a view or DataGrid. | `Http/Controllers/Admin/` |
| **Data access** | Prettus Repository (`Webkul\Core\Eloquent\Repository`) &mdash; never raw queries in controllers. | `Repositories/` |
| **Models** | Three-part Concord: Contract + Eloquent class + Proxy. | `Contracts/`, `Models/` |
| **UI** | Blade Components from the Admin package (`<x-admin::layouts>`, `<x-admin::datagrid>`, ...). | `Resources/views/` |
| **Side effects** | `Event::dispatch('<entity>.<action>.{before,after}', ...)` around every write. Listeners subscribe in an `EventServiceProvider`. | `Providers/EventServiceProvider.php` |

Build a new feature inside that grid and every other Krayin package will recognise the shape.
