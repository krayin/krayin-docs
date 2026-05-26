# DataGrid

A DataGrid renders database records as a sortable, filterable, paginated table in the admin. Krayin ships a base `DataGrid` class &mdash; you extend it with three methods (`prepareQueryBuilder()`, `prepareColumns()`, `prepareActions()`) to describe your data, and the framework handles AJAX requests, query parameters, mass actions, and the rendered HTML.

This page picks up from [Views](./views.md) &mdash; instead of looping over `$examples` in Blade, you'll wire your `index` view to a DataGrid that does the heavy lifting.

## 📁 Create the DataGrid class

Add a `DataGrids/` folder to your package and create one class per grid:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── DataGrids
                └── ExampleDataGrid.php
```

```php
<?php

namespace Webkul\Example\DataGrids;

use Illuminate\Support\Facades\DB;
use Webkul\DataGrid\DataGrid;

class ExampleDataGrid extends DataGrid
{
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('examples')
            ->addSelect(
                'examples.id',
                'examples.title',
                'examples.description',
                'examples.status',
            );

        $this->addFilter('id', 'examples.id');

        return $queryBuilder;
    }

    public function prepareColumns(): void
    {
        $this->addColumn([
            'index' => 'id',
            'label' => trans('example::app.examples.datagrid.id'),
            'type' => 'number',
            'searchable' => false,
            'sortable' => true,
            'filterable' => true,
        ]);

        $this->addColumn([
            'index' => 'title',
            'label' => trans('example::app.examples.datagrid.title'),
            'type' => 'string',
            'searchable' => true,
            'filterable' => true,
            'sortable' => true,
        ]);

        $this->addColumn([
            'index' => 'description',
            'label' => trans('example::app.examples.datagrid.description'),
            'type' => 'string',
            'searchable' => true,
            'filterable' => true,
            'sortable' => true,
        ]);
    }

    public function prepareActions(): void
    {
        $this->addAction([
            'title' => trans('example::app.examples.datagrid.edit'),
            'method' => 'GET',
            'route' => 'admin.examples.edit',
            'icon' => 'pencil-icon',
        ]);

        $this->addAction([
            'title' => trans('example::app.examples.datagrid.delete'),
            'method' => 'DELETE',
            'route' => 'admin.examples.destroy',
            'confirm_text' => trans('ui::app.datagrid.massaction.delete', ['resource' => 'example']),
            'icon' => 'trash-icon',
        ]);
    }
}
```

## ⚙️ Required methods

### `prepareQueryBuilder()`

Returns a query-builder instance describing which rows and which columns the grid should pull. Add joins, select aliases, and `where` clauses here.

`addFilter('id', 'examples.id')` registers a filterable column &mdash; the second argument is the fully-qualified DB column so the grid knows what to filter on (important when joins make the same column name ambiguous).

### `prepareColumns()`

Defines the visible columns. Each `addColumn()` call accepts an array:

| Key | Purpose |
| --- | --- |
| `index` | The column key returned by the query (usually a DB column name or alias). |
| `label` | Translation key for the column header. |
| `type` | `string`, `integer`, `number`, `boolean`, `date`, `datetime`, `dropdown` &mdash; controls input rendering for filters. |
| `searchable` | Include this column in the global search box. |
| `sortable` | Show the click-to-sort caret in the header. |
| `filterable` | Show this column in the filter sidebar. |
| `closure` | Optional callback `function ($row)` to format the cell value (return HTML or plain text). |

### `prepareActions()`

One `addAction()` call per row-level action (edit / view / delete). Each accepts:

| Key | Purpose |
| --- | --- |
| `title` | Tooltip / aria label (translation key). |
| `method` | HTTP method &mdash; usually `GET` for edit/view, `DELETE` for destructive actions. |
| `route` | Named route to hit. The grid passes the row's primary key as `{id}`. |
| `icon` | CSS class for the icon to render. |
| `confirm_text` | Optional. When present, the UI shows a confirm dialog with this text before firing. |

### `prepareMassActions()`

Optional. Same shape as `prepareActions()` but for the **bulk** actions that appear above the grid when rows are checked. Common cases are mass delete or mass status change.

## ⚙️ Global properties

You can override these on your subclass to change grid-wide behaviour:

| Property | What it does |
| --- | --- |
| `$index` | The primary-key column the grid uses to uniquely identify each row. Defaults to `id`. |
| `$sortOrder` | `asc` or `desc`. Default sort direction. |
| `$enableAction` | `true` / `false` &mdash; show the row-level action column. |
| `$enableMassAction` | `true` / `false` &mdash; show the bulk-select checkboxes and mass-action bar. |
| `$paginate` | `true` / `false` &mdash; enable pagination controls. |
| `$itemsPerPage` | Rows per page when pagination is on. |
| `$enableFilterMap` | `true` / `false` &mdash; allow per-column filtering UI. |

## 🔌 Wire the DataGrid into the controller

The controller hands off to the grid on AJAX requests and renders a normal view otherwise:

```php
<?php

namespace Webkul\Example\Http\Controllers\Example;

use Webkul\Example\DataGrids\ExampleDataGrid;
use Webkul\Example\Http\Controllers\Controller;

class ExampleController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            return datagrid(ExampleDataGrid::class)->process();
        }

        return view('example::admin.index');
    }
}
```

`datagrid()` is the helper for resolving the DataGrid through the container; `process()` runs the query, applies filters / sort / pagination from the request, and returns JSON.

## 🧱 Render the DataGrid in a view

In your `index.blade.php`, drop in the `<x-admin::datagrid>` component pointing at the same route the controller serves:

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('example::app.examples.index.title')
    </x-slot>

    <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <p class="text-xl font-bold text-gray-800 dark:text-white">
            @lang('example::app.examples.index.title')
        </p>

        @if (bouncer()->hasPermission('examples.create'))
            <a href="{{ route('admin.examples.create') }}" class="primary-button">
                @lang('example::app.examples.create-btn')
            </a>
        @endif
    </div>

    <x-admin::datagrid :src="route('admin.examples.index')" />
</x-admin::layouts>
```

The `:src` attribute is the same URL the controller serves &mdash; the component fires AJAX requests to it as the user sorts, filters, paginates.

## 🛠️ Multiple DataGrids on one page

If a single page needs more than one grid (e.g. a parent + a related-records grid), instantiate each via the helper so request state doesn't clash:

```php
return [
    'examples' => datagrid(ExampleDataGrid::class)->process(),
    'products' => datagrid(ProductDataGrid::class)->process(),
];
```

Each grid auto-namespaces its query parameters so filtering one doesn't affect the other.

## 🧪 Verify

1. Visit the index page &mdash; the table should render with your columns.
2. Click a column header &mdash; rows re-sort, URL updates with sort params.
3. Open the filter sidebar, apply a filter &mdash; rows narrow down.
4. Click an edit icon &mdash; it should jump to the edit route with the row id.

If the table is empty even though the DB has rows, log out the query: drop `dd($queryBuilder->toSql(), $queryBuilder->getBindings());` inside `prepareQueryBuilder()` and check the SQL against your schema.

## 📝 Next steps

- [Blade Components](./blade-components.md) &mdash; the `<x-admin::datagrid>` component and all the other reusable admin pieces.
- [Localization](./localization.md) &mdash; add the translation keys referenced by `label` / `title` in the column and action arrays.
