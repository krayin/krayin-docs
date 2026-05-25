# Controllers

Controllers sit between your [routes](./routes.md) and your [repositories](./store-data-through-repositories.md). They take the request, ask the repository for data, and return a view or redirect. Keeping controllers thin &mdash; no SQL, no business rules &mdash; is what makes the [Repository Pattern](../architecture/overview.md#repository-pattern) worth the effort.

For Laravel-specific guidance, see the [Laravel controllers docs](https://laravel.com/docs/11.x/controllers).

## 📁 Create the controller files

Krayin keeps controllers under `Http/Controllers/<Domain>/` inside each package, with a thin base `Controller.php` at the root of the `Controllers/` folder.

### 1. Add the folder structure

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Http
                └── Controllers
                    ├── Controller.php
                    └── Example
                        └── ExampleController.php
```

### 2. Create the base controller

`packages/Webkul/Example/src/Http/Controllers/Controller.php` extends Laravel's base controller and pulls in the standard traits so every concrete controller in your package gets them for free:

```php
<?php

namespace Webkul\Example\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
```

### 3. Create the concrete controller

`packages/Webkul/Example/src/Http/Controllers/Example/ExampleController.php`:

```php
<?php

namespace Webkul\Example\Http\Controllers\Example;

use Webkul\Example\Http\Controllers\Controller;
use Webkul\Example\Repositories\ExampleRepository;

class ExampleController extends Controller
{
    public function __construct(
        protected ExampleRepository $exampleRepository
    ) {}

    public function index()
    {
        $examples = $this->exampleRepository->all();

        return view('example::admin.index', compact('examples'));
    }

    public function show(int $id)
    {
        $example = $this->exampleRepository->findOrFail($id);

        return view('example::admin.show', compact('example'));
    }

    public function store(Request $request)
    {
        $example = $this->exampleRepository->create($request->all());

        return redirect()
            ->route('admin.examples.index')
            ->with('success', trans('example::app.examples.create-success'));
    }

    public function update(Request $request, int $id)
    {
        $this->exampleRepository->update($request->all(), $id);

        return redirect()
            ->route('admin.examples.index')
            ->with('success', trans('example::app.examples.update-success'));
    }

    public function destroy(int $id)
    {
        $this->exampleRepository->delete($id);

        return response()->json([
            'message' => trans('example::app.examples.delete-success'),
        ]);
    }
}
```

::: tip Constructor property promotion
The `protected ExampleRepository $exampleRepository` in the constructor argument list is PHP 8 property promotion &mdash; it declares the property *and* assigns it in one line. No `$this->exampleRepository = $exampleRepository;` needed.
:::

## 🧱 How the pieces connect

The controller is the meeting point of every other layer you've built:

1. The [route](./routes.md) names the controller method (`[ExampleController::class, 'index']`).
2. Laravel's container sees `ExampleRepository` in the constructor and injects an instance.
3. The action calls a method on the repository.
4. The repository talks to the [model](./create-models.md), which talks to the database.
5. The action returns a [view](./views.md) or a redirect.

Keep the controller small. If a method grows past 20–30 lines, push the work down to the repository (custom query method) or up to a [form request](./validation.md) (validation rules) &mdash; not the controller.

## 🧪 Verify

Hit the route from your browser or with `curl`:

```bash
curl -i http://your-krayin.local/admin/examples
```

You should get a `200 OK` (or `302` redirect to the login screen if the route is gated). If you get `500`, check the Laravel log at `storage/logs/laravel.log` &mdash; the most common causes are a typo in the repository import or a missing `index` view.

## 📝 Next steps

- [Views](./views.md) &mdash; build the Blade templates this controller returns.
- [Validation](./validation.md) &mdash; replace `$request->all()` with a form request that sanitises input.
- [Admin Menu](./add-menu-in-admin.md) &mdash; surface `admin.examples.index` in the sidebar.
