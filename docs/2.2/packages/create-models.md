# Models

Krayin uses Laravel's [Eloquent ORM](https://laravel.com/docs/11.x/eloquent), with one extra layer on top: the [konekt/concord](https://packagist.org/packages/konekt/concord) module system. Every Krayin model is built from **three pieces** so other packages can override it without touching your code:

- **Contract** &mdash; an interface that declares the public shape of the model.
- **Model** &mdash; the Eloquent class itself.
- **Proxy** &mdash; the binding Concord resolves at runtime, so callers ask for the contract and get the implementation registered for it.

This page picks up from [Migrations](./create-migrations.md) &mdash; you've created the `examples` table and now you need the model that maps to it.

## 📁 Create the model files

There are two ways to scaffold the three pieces. Pick the path you used in [Getting Started](./create-package.md).

### Option A &mdash; Krayin Package Generator <small>*(recommended)*</small>

A single command creates all three files in the right place:

```bash
php artisan package:make-model Example Webkul/Example
```

Files created:

| File | Purpose |
| --- | --- |
| `packages/Webkul/Example/src/Contracts/Example.php` | Contract interface |
| `packages/Webkul/Example/src/Models/Example.php` | Eloquent model |
| `packages/Webkul/Example/src/Models/ExampleProxy.php` | Concord proxy |

Skip ahead to [Edit the model body](#edit-the-model-body) below.

### Option B &mdash; Manual setup

Create each file by hand.

#### 1. Contract

Create `packages/Webkul/Example/src/Contracts/Example.php`:

```text
packages
└── Webkul
    └── Example
        └── src
            └── Contracts
                └── Example.php
```

```php
<?php

namespace Webkul\Example\Contracts;

interface Example
{
}
```

The contract is intentionally empty &mdash; you can declare methods on it later if other packages need to call them through the interface.

#### 2. Proxy

Create `packages/Webkul/Example/src/Models/ExampleProxy.php`:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Models
                └── ExampleProxy.php
```

```php
<?php

namespace Webkul\Example\Models;

use Konekt\Concord\Proxies\ModelProxy;

class ExampleProxy extends ModelProxy
{
}
```

The proxy is the indirection layer Concord uses so other packages can swap your model out without rewriting callers.

#### 3. Model

Scaffold the Eloquent model with Laravel's generator, then move it into the package:

```bash
php artisan make:model Example
```

Move `app/Models/Example.php` into `packages/Webkul/Example/src/Models/`:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            ├── Contracts
            │   └── Example.php
            └── Models
                ├── Example.php
                └── ExampleProxy.php
```

## 🧱 Edit the model body

Open `packages/Webkul/Example/src/Models/Example.php` and replace its body with the schema from your [migration](./create-migrations.md):

```php
<?php

namespace Webkul\Example\Models;

use Illuminate\Database\Eloquent\Model;
use Webkul\Example\Contracts\Example as ExampleContract;

class Example extends Model implements ExampleContract
{
    protected $fillable = [
        'parent_id',
        'title',
        'description',
        'status',
    ];
}
```

The model `implements ExampleContract` so Concord can bind the interface to this class. The `$fillable` array lists the columns Eloquent will accept on `create()` / `update()` calls &mdash; keep it in sync with the migration.

## ⚙️ Register the model with Concord

Concord needs to know about the model so callers can resolve it through the contract. This is done in a dedicated `ModuleServiceProvider`.

### 1. Create `ModuleServiceProvider.php`

Add the file alongside your main service provider:

```text
packages
└── Webkul
    └── Example
        └── src
            └── Providers
                ├── ExampleServiceProvider.php
                └── ModuleServiceProvider.php
```

```php
<?php

namespace Webkul\Example\Providers;

use Konekt\Concord\BaseModuleServiceProvider;

class ModuleServiceProvider extends BaseModuleServiceProvider
{
    protected $models = [
        \Webkul\Example\Models\Example::class,
    ];
}
```

### 2. Register it in `config/concord.php`

Add the provider to the `modules` array in the root `config/concord.php`:

```php
<?php

return [
    'modules' => [
        // ...
        \Webkul\Example\Providers\ModuleServiceProvider::class,
    ],
];
```

Concord will now bind `Webkul\Example\Contracts\Example` → `Webkul\Example\Models\Example` automatically, and the `ExampleProxy` will resolve to the same implementation.

## 🧪 Verify

Drop into Tinker and resolve the model through the contract:

```bash
php artisan tinker
```

```php
app(\Webkul\Example\Contracts\Example::class);
// => Webkul\Example\Models\Example {...}
```

If you get an unresolved-binding error, re-check the entry in `config/concord.php` and run `php artisan optimize:clear`.

## 📝 Next steps

- [Repository](./store-data-through-repositories.md) &mdash; build the repository layer that controllers use to query and persist your model.
- [Validation](./validation.md) &mdash; add form-request rules for the fields in `$fillable`.
