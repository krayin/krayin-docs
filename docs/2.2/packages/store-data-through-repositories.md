# Repository

Krayin uses the **Repository Pattern** on top of Eloquent to keep data access out of controllers (see the [Architecture Overview](../architecture/overview.md#repository-pattern) for the why). Every model gets a repository that wraps the standard CRUD helpers and gives you a clean place to add custom query methods.

Under the hood it's the [Prettus L5 Repository](https://github.com/andersao/l5-repository) package &mdash; see its docs for the full method list. This page picks up from [Models](./create-models.md) &mdash; you have a `Example` model bound through Concord and now you need the repository the controller will call.

## 📁 Create the repository file

There are two ways to scaffold it. Pick the path you used in [Getting Started](./create-package.md).

### Option A &mdash; Krayin Package Generator <small>*(recommended)*</small>

```bash
php artisan package:make-repository ExampleRepository Webkul/Example
```

The file lands in `packages/Webkul/Example/src/Repositories/ExampleRepository.php`.

### Option B &mdash; Manual setup

Create the folder and file by hand:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Repositories
                └── ExampleRepository.php
```

```php
<?php

namespace Webkul\Example\Repositories;

use Webkul\Core\Eloquent\Repository;

class ExampleRepository extends Repository
{
    public function model(): string
    {
        return \Webkul\Example\Contracts\Example::class;
    }
}
```

The `model()` method returns the **contract**, not the model class directly. Concord resolves the contract to the registered implementation (the `Example` model you registered in [`config/concord.php`](./create-models.md#register-it-in-config-concord-php)), which is why other packages can swap your model out without rewriting consumers.

## 🧱 Inject the repository

Controllers (and other services) receive the repository through Laravel's dependency-injection container &mdash; no manual `new` required:

```php
public function __construct(
    protected ExampleRepository $exampleRepository
) {}
```

Laravel sees the type-hint, builds a `ExampleRepository`, and passes it in. This is loose coupling in action: the controller doesn't know which Eloquent model is behind the repository &mdash; it just calls methods on it.

## 🔌 Common methods

The full list lives in the [Prettus README](https://github.com/andersao/l5-repository?tab=readme-ov-file#methods); the ones you'll use 90% of the time:

| Method | What it does |
| --- | --- |
| `all()` | Return every row |
| `find($id)` | Find by primary key (returns `null` if missing) |
| `findOrFail($id)` | Find by primary key (throws `ModelNotFoundException`) |
| `findWhere([...])` | Filter by an array of conditions |
| `findWhereIn($field, [$a, $b])` | Filter by `WHERE field IN (...)` |
| `first()` / `firstOrFail()` | First match for a condition |
| `create([...])` | Insert and return a new row |
| `update([...], $id)` | Update an existing row by primary key |
| `delete($id)` | Delete by primary key |
| `paginate($perPage)` | Paginated result set |
| `with(['relation'])` | Eager-load relationships |

### Examples

```php
// Read
$examples  = $this->exampleRepository->all();
$example    = $this->exampleRepository->find($id);
$example    = $this->exampleRepository->findOrFail($id);
$published   = $this->exampleRepository->findWhere(['status' => 1]);

// Pagination
$paginator = $this->exampleRepository->paginate(15);

// Write
$example = $this->exampleRepository->create($data);
$example = $this->exampleRepository->update($data, $id);
$this->exampleRepository->delete($id);

// Eager loading
$example = $this->exampleRepository->with('children')->find($id);
```

## 🛠️ Add custom query methods

The point of a repository is to *name* your queries so the controller stays thin. Anything more interesting than a one-line `findWhere()` should live as a method on the repository:

```php
<?php

namespace Webkul\Example\Repositories;

use Webkul\Core\Eloquent\Repository;

class ExampleRepository extends Repository
{
    public function model(): string
    {
        return \Webkul\Example\Contracts\Example::class;
    }

    public function getPublishedRoots()
    {
        return $this->findWhere([
            'status' => 1,
            'parent_id' => null,
        ]);
    }

    public function getRecent(int $limit = 10)
    {
        return $this->orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();
    }
}
```

The controller now reads `$repo->getPublishedRoots()` instead of repeating the `where` array everywhere.

## 🧪 Verify

Drop into Tinker and resolve the repository through the container:

```bash
php artisan tinker
```

```php
$repo = app(\Webkul\Example\Repositories\ExampleRepository::class);
$repo->all();
```

If the call returns a collection (empty is fine), the repository is wired correctly. If you see an unresolved-binding error, re-check the contract registration in [`config/concord.php`](./create-models.md#register-it-in-config-concord-php).

## 📝 Next steps

- [Controllers](./controllers.md) &mdash; inject this repository and start handling requests.
- [Validation](./validation.md) &mdash; sanitise the data you'll pass to `create()` / `update()`.
