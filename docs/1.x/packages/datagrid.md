# DataGrid

[[TOC]]

## Introduction

A DataGrid is a concept of displaying your database records in a tabular format. It is a powerful tool that helps you present large amounts of data in an organized way. At Krayin, we have implemented this feature, which allows you to use it to display data in a tabular format or write code from scratch to display data. In addition to the basic functionality of DataGrid, we have also implemented additional features such as sorting, filtering, and mass action, which are explained in detail below.

## Global Properties of DataGrid

Here are the global properties of the DataGrid:

| Property          | Functionality                                                                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`index`**             | This property is defined in the grid, and the value assigned to this property must be unique, typically the primary key, so that data will be uniquely identified and operations performed will be based on your index value. |
| **`sortOrder`**         | The **`sortOrder`** key is used to arrange the results in ascending or descending order. Set the **`sortOrder`** variable to **`asc`** or **`desc`**.                                                                |
| **`queryBuilder`**      | This is used to perform database operations in your application.                                                                                                                                                 |
| **`enableMassAction`**  | This accepts boolean values **`true`** or **`false`** to enable or disable the mass action in DataGrid.                                                                                                                |
| **`enableAction`**      | This accepts boolean values **`true`** or **`false`** to enable or disable the action column of DataGrid.                                                                                                              |
| **`paginate`**          | Set the **`paginate`** property to **`true`** to allow pagination on your page.                                                                                     |
| **`itemsPerPage`**      | The **`itemsPerPage`** key is used to display the number of items per page.                                                                                                                                        |
| **`enableFilterMap`**   | This accepts boolean values **`true`** or **`false`** to enable or disable filtering on the basis of columns.                                                                                                         |

## How DataGrid Works

The **`DataGrid`** abstract class is created in the **`Webkul\Ui`** package. In the abstract class, a list of properties and methods are declared. To create your own DataGrid, you need to extend the **`Webkul\Ui\DataGrid\DataGrid`** abstract class.

In **`Webkul\Ui\DataGrid\DataGrid.php`** abstract class, two abstract methods are declared **`prepareQueryBuilder()`** and **`addColumns()`**. You can prepare your grid by defining these two methods.

- **`prepareQueryBuilder()`**: In this method, records are retrieved through queries applicable to the database and stored in a collection. When records are retrieved, the **`setQueryBuilder()`** method is called.

- **`setQueryBuilder()`**: This method is used for setting the **`$queryBuilder`**.

    ```php
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('categories')
            ->addSelect(
                'categories.id',
                'categories.slug',
                'categories.name',
                'categories.description',
            );

        $this->addFilter('id', 'categories.id');

        $this->setQueryBuilder($queryBuilder);
    }
    ```

- **`addColumns()`**: In this method, columns are created which are displayed in the grid. The parameter accepts an array in key-value pairs. Some of the essential keys are described below:

  | Key | Functionality |
  | ------------- | ------------------------------------------------------------------------ |
  | **`index`**      | This key is defined in the grid, and the value assigned to this key must be unique, typically the primary key, so that data will be uniquely identified and operations performed will be based on your index value. |
  | **`label`**      | This key defines the name of the column.                                                                                                                                          |
  | **`type`**       | This key accepts the type of data in the column.                                                                                                                                             |
  | **`searchable`** | This accepts boolean values **`true`** or **`false`** to make the column searchable.                                                                                                             |
  | **`sortable`**   | This accepts boolean values **`true`** or **`false`** to make the column sortable.                                                                                                               |
  | **`filterable`** | This accepts boolean values **`true`** or **`false`** to make the column filterable.                                                                                                             |
  | **`wrapper`**    | Perform actions based on a condition satisfied or apply some customization to the value.                                                                                                             |

    ```php
    public function addColumns()
    {
        $this->addColumn([
            'index' => 'id',
            'label' => trans('category::app.admin.datagrid.id'),
            'type' => 'number',
            'searchable' => false,
            'sortable' => true,
            'filterable' => true
        ]);
    }
    ```

- **`prepareActions()`**: This method is defined when there is a need to perform any action such as edit or delete on the grid. In this method, the **`addAction()`** method is called to define a particular action.

- **`addAction()`**: This method is used for adding actions (like **`edit`**, **`delete`**, etc.) to each row generated by the DataGrid.

  | Key           | Functionality                                                            |
  | ------------- | ------------------------------------------------------------------------ |
  | **`title`**        | The text to be displayed is written here.                                |
  | **`method`**       | HTTP methods are declared.                                               |
  | **`route`**        | This key accepts the route of the icon.                                      |
  | **`icon`**         | Class of the icon to be displayed in the action column. You may prefer text also. |

    ```php
    public function prepareActions()
    {
        $this->addAction([
            'title' => trans('category::app.admin.datagrid.edit'),
            'method' => 'GET',
            'route' => 'admin.category.edit',
            'icon' => 'icon pencil-lg-icon'
        ]);
    }
    ```

## Multiple DataGrids

When working with multiple DataGrids, the default DataGrid implementation can handle only a single request at a time. This means that operations such as filtration, sorting, and others can conflict when implementing multiple DataGrids. To overcome this, we provide a trait called **`ProvideDataGridPlus`** in the namespace **`Webkul\Ui\DataGrid\Traits`**.

Follow the steps below to implement multiple DataGrids:

1. Create a folder called **`DataGrids`** inside the **`src`** folder of your package. Within the **`DataGrids`** folder, create a file called **`CategoryDataGrid.php`** that extends the **`DataGrid`** class from the **`Webkul\Ui`** package. The directory structure will be as follows:

    ```
    └── packages
        └── Webkul
            └── Category
                └── src
                    ├── ...
                    └── DataGrids
                        └── CategoryDataGrid.php
    ```

2. Add the following code to your DataGrid file, i.e., **`CategoryDataGrid.php`**:

    ```php
    namespace Webkul\Category\DataGrids;

    use Webkul\Ui\DataGrid\DataGrid;

    class CategoryDataGrid extends DataGrid
    {
        // ...
    }
    ```

### DataGrid to JSON

3. Import the **`ProvideDataGridPlus`** trait into the **`CategoryDataGrid`** class:

    ```php
    namespace Webkul\Category\DataGrids;

    use Webkul\Admin\Traits\ProvideDropdownOptions;

    class CategoryDataGrid extends DataGrid
    {
        use ProvideDropdownOptions;

        // ...
    }
    ```

4. After that, the **`toJson()`** method will be available in the DataGrid instance, which provides data to the component.

5. Now, go to **`Admin/CategoryController.php`** and locate the **`index`** method. Use the **`toJson()`** method as follows:

    ```php
    use Webkul\Category\DataGrids\CategoryDataGrid;

    class CategoryController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\View\View
         */
        public function index()
        {
            if (request()->ajax()) {
                return app(CategoryDataGrid::class)->toJson();
            }

            return view('category::admin.index');
        }

        // ...
    }
    ```

### Render DataGrid

6. In the view file **`views/admin/index.blade.php`**, use the **`table-component`** component and specify the URL from which it will load the JSON data:

    ```php
    @section('content-wrapper')
        <div class="content full-page">
            <table-component data-src="{{ route('admin.categories.index') }}">
                <template v-slot:table-header>
                    <h1>
                        {!! view_render_event('admin.products.index.header.before') !!}

                        {{ Breadcrumbs::render('categories') }}

                        {{ __('Category') }}

                        {!! view_render_event('admin.products.index.header.after') !!}
                    </h1>

                </template>

                <template v-slot:table-action>
                    <a href="{{ route('admin.categories.create') }}" class="btn btn-md btn-primary">{{ __('Create Category') }}</a>
                </template>
            <table-component>
        </div>
    @stop
    ```

    With these steps, your DataGrid is now ready to be used.

::: warning
Make sure to copy the sample code provided below to your own **`CategoryDataGrid.php`** file, as we have already included all the necessary methods and functions there. This code can be used later as an example for your implementation.
:::

## Sample DataGrid

Here's an improved version of the provided DataGrid sample:

```php
<?php

namespace Webkul\Category\DataGrids\Category;

use Webkul\UI\DataGrid\DataGrid;
use Illuminate\Support\Facades\DB;

class CategoryDataGrid extends DataGrid
{
    /**
     * Prepare query builder.
     *
     * @return void
     */
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('categories')
            ->addSelect(
                'categories.id',
                'categories.slug',
                'categories.name',
                'categories.description',
            );

        $this->addFilter('id', 'categories.id');

        $this->setQueryBuilder($queryBuilder);
    }

    /**
     * Add columns.
     *
     * @return void
     */
    public function addColumns()
    {
        $this->addColumn([
            'index'    => 'slug',
        'label'    => trans('Slug'),
            'type'     => 'string',
            'sortable' => true,
        ]);

        $this->addColumn([
            'index'    => 'name',
            'label'    => trans('Name'),
            'type'     => 'string',
            'sortable' => true,
        ]);

        $this->addColumn([
            'index'    => 'description',
            'label'    => trans('Description'),
            'type'     => 'string',
            'sortable' => true,
        ]);
    }

    /**
     * Prepare actions.
     *
     * @return void
     */
    public function prepareActions()
    {
        $this->addAction([
            'title'  => trans('ui::app.datagrid.edit'),
            'method' => 'GET',
            'route'  => 'admin.categories.edit',
            'icon'   => 'pencil-icon',
        ]);

        $this->addAction([
            'title'        => trans('ui::app.datagrid.delete'),
            'method'       => 'DELETE',
            'route'        => 'admin.categories.delete',
            'confirm_text' => trans('ui::app.datagrid.massaction.delete', ['resource' => 'user']),
            'icon'         => 'trash-icon',
        ]);
    }
}
```