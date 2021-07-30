# Create a new datagrid

There are some mandatory functions to display a datagrid

~~~
    class TestDataGrid extends DataGrid
    {
        public function prepareQueryBuilder()
        {
        }

        public function addColumns()
        {
        }

        public function prepareActions()
        {
        }
    }
~~~

hide search field
~~~
$enableSearch = false;
~~~

![hide-search](../../assets/images/datagrid/hide-search.png)

hide per page field
~~~
$enablePerPage = false;
~~~
![hide-item-per-page](../../assets/images/datagrid/hide-item-per-page.png)

we can also add tab filters inside datagrid_filters.php resides in config
![tab-filters](../../assets/images/datagrid/tab-filters.png)
