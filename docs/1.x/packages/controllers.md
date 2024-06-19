# Controller

[[TOC]]

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/controllers).

## Directory Structure

- Create an **`Http`** folder in the **`packages/Webkul/Category/src`** path. Inside the **`Http`** folder, create another folder named **`Controllers`**. Inside the **`Controllers`** folder, we need to create one file named **`Controller.php`** and two folders, namely **`Category`**.

- Inside both the **`Category`** folders, create a **`CategoryController.php`** file. The updated directory structure will look like this:

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Http
                      └── Controllers
                          ├── Controller.php
                          └── Category
                              └── CategoryController.php
  ```

## Base Controller

- **`Controller.php`**: This is the base controller. Add the following code to this file:

  ```php
  <?php

  namespace Webkul\Category\Http\Controllers;

  use Illuminate\Foundation\Bus\DispatchesJobs;
  use Illuminate\Routing\Controller as BaseController;
  use Illuminate\Foundation\Validation\ValidatesRequests;
  use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

  class Controller extends BaseController
  {
      use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
  }
  ```

## Controllers

- **`Category/CategoryController.php`**: This file is for category usage. Add the following code to this file:

  ```php
    <?php

    namespace Webkul\Category\Http\Controllers\Category;

    use Webkul\Admin\Http\Controllers\Controller;
    use Webkul\Category\DataGrids\Category\CategoryDataGrid;
    use Webkul\Category\Repositories\CategoryRepository;

    class CategoryController extends Controller
    {
        /**
        * Create a new controller instance.

        * @return void
        */
        public function __construct(protected CategoryRepository $categoryRepository)
        {
            request()->request->add(['entity_type' => 'category']);
        }

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
        
            return view('category::category.index');
        }

        /**
        * Create a new category.
        *
        * @return \Illuminate\View\View
        */
        public function create()
        {
            return view('category::category.create');
        }

        /**
        * Store a newly created category in storage.
        *
        * @return \Illuminate\Http\RedirectResponse
        */
        public function store()
        {
            $this->validate(request(), [
                'name' => 'required',
                'slug' => 'required|unique:categories,slug',
            ]);

            $this->categoryRepository->create(request()->all());

            session()->flash('success', 'Category created successfully.');

            return redirect()->route('admin.categories.index');
        }

        /**
        * Show the form for editing the specified category.
        *
        * @param int $id
        * @return \Illuminate\View\View
        */
        public function edit($id)
        {
            $category = $this->categoryRepository->findOrFail($id);

            return view('category::category.edit', compact('category'));
        }

        /**
        * Update the specified category in storage.
        *
        * @param int $id
        * @return \Illuminate\Http\RedirectResponse
        */
        public function update($id)
        {
            $this->validate(request(), [
                'name' => 'required',
                'slug' => 'required|unique:categories,slug,' . $id,
            ]);

            $this->categoryRepository->update(request()->all(), $id);

            session()->flash('success', 'Category updated successfully.');

            return redirect()->route('admin.categories.index');
        }

        /**
        * Remove the specified category from storage.
        *
        * @param int $id
        * @return \Illuminate\Http\RedirectResponse
        */
        public function destroy($id)
        {
            $category = $this->categoryRepository->findOrFail($id);

            $category->delete($id);

            session()->flash('success', 'Category deleted successfully.');

            return redirect()->route('admin.categories.index');
        }
    }

  ```