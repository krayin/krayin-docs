# Repository

[[TOC]]

## Introduction

In traditional development, application logic is often written directly in the controller. However, there is an alternative approach that abstracts some of these calls into PHP classes called Repositories. The purpose of repositories is to decouple models from controllers and provide readable names for complex queries.

This file defines our Repository class. Instances of this class have a model property that is bound to an Eloquent model. With this binding in the constructor, we can call Eloquent methods such as findOrFail, update, or all from the class methods.

We are using the Prettus Repository package. You can find all available methods in the Prettus repository [here](https://github.com/andersao/l5-repository). Here are some examples:

Examples:

| Sl. no. | Method              | Description                               |
| ------- | ------              | -----------                               |
| 1       | all                 | Find all results in the Repository         |
| 2       | paginate            | Find all results in the Repository with pagination  |
| 3       | find                | Find a result by ID                        |
| 4       | with(['table_name'])| Load the model relationships               |
| 5       | findWhereIn         | Find results by multiple values in one field|

```php
// Bound in constructor
public function __construct(protected CategoryRepository $categoryRepository) {}
```

```php
// Find all results in the Repository
$categories = $this->categoryRepository->all();
```

## Using Krayin Package Generator

- This command creates a new Repository class in the **`packages/Webkul/Category/src/Repository`** directory.

  ```sh
  php artisan package:make-repository CategoryRepository Webkul/Category
  ```

## Manual Setup of Files

- Create a **`Repository`** folder inside **`Webkul/Category/src/`** and create a file named **`CategoryRepository.php`**. In the repository class, create the **`model()`** method that returns the path of your contract class.

  ```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Repository
                      └── CategoryRepository.php
  ```

- Copy the following code into your newly created repository file.

  ```php
  <?php

  namespace Webkul\Category\Repositories;

  use Illuminate\Container\Container;
  use Webkul\Core\Eloquent\Repository;
  use Webkul\Attribute\Repositories\AttributeValueRepository;

  class CategoryRepository extends Repository
  {
      /**
      * Create a new repository instance.
      *
      * @return void
      */
      public function __construct(
          protected AttributeValueRepository $attributeValueRepository,
          Container $container
      )
      {
          parent::__construct($container);
      }

      /**
      * Specify Model class name
      *
      * @return mixed
      */
      function model()
      {
          return 'Webkul\Category\Contracts\Category';
      }

      /**
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
  }
  ```

- Now, your **`CategoryRepository`** is ready to use.