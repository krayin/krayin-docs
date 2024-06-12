# Use model with custom Attributes

Before using the CustomAttribute trait, you need to set it up.

1. Create a configuration file inside the Category package's Config folder named attribute_entity_types.php.
2. Add the following code snippet to the configuration file:

```php
<?php 

return [
    'categories'      => [
        'name'       => 'Categories',
        'repository' => 'Webkul\Category\Repositories\CategoryRepository',
    ],
];

```

3. Register the Configuration File:

In the CategoryServiceProvider, register the configuration file inside the register method of the provider.

```php
/**
 * Register services.
 *
 * @return void
 */
public function register()
{
    $this->mergeConfigFrom(dirname(__DIR__) . '/Config/attribute_entity_types.php', 'attribute_entity_types');
}
```

Now you can use the `CustomAttribute` traits, which allows any model to be customized with attributes.

Example Are Give below.

```php
<?php

namespace Webkul\Category\Models;

use Illuminate\Database\Eloquent\Model;
use Webkul\Attribute\Traits\CustomAttribute;
use Webkul\Category\Contracts\Category as CategoryContract;

class Category extends Model implements CategoryContract
{
    use CustomAttribute;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
    ];
}

```

In the package development repository section, we use CategoryRepository. In this repository, we inject AttributeRepository to interact with attributes. The CategoryRepository has two methods, create and update. After creating or updating a category, a new entry is created in the attribute repository using the following code:

```php
$this->attributeValueRepository->save($data, $id);
```

For Example.

```php
/**
 * Create the new Resource.
 * 
 * @param array $data
 * @return \Webkul\Product\Contracts\Product
 */
public function create(array $data)
{
    $product = parent::create($data);

    $this->attributeValueRepository->save($data, $product->id);

    return $product;
}

/**
 * Update the new existing Resource.
 * 
 * @param array  $data
 * @param int    $id
 * @param string $attribute
 * @return \Webkul\Product\Contracts\Product
 */
public function update(array $data, $id, $attribute = "id")
{
    $product = parent::update($data, $id);

    $this->attributeValueRepository->save($data, $id);

    return $product;
}
```
