# Repositories

[[TOC]]

## Introduction

In traditional development, application logic is often embedded in controllers. An alternative approach uses Repositories to abstract database operations and queries, promoting cleaner, more maintainable code.

Repositories decouple models from controllers and provide readable names for complex queries. Each Repository class binds to an Eloquent model in its constructor, enabling the use of methods like `findOrFail`, `update`, and `all`. This separation enhances code readability, reusability, and adherence to the separation of concerns principle, making the application easier to manage and scale.

## Dependency Injection

Dependency Injection (DI) is a design pattern widely used in Laravel for managing class dependencies. It allows classes to receive their dependencies from an external source rather than creating them internally. This promotes loose coupling between classes, enhances reusability, and simplifies unit testing.

```php
public function __construct(protected CategoryRepository $categoryRepository) {}
```

The `__construct()` method is defined with a parameter `$categoryRepository` typed as `CategoryRepository`.
Laravel's service container automatically resolves and injects an instance of `CategoryRepository` when an instance of the class containing this constructor is instantiated.

This is a form of dependency injection where the `CategoryRepository` dependency is injected into the class through its constructor.

## Using Krayin Package Generator

The Krayin package generator provides a convenient way to create new components for your Krayin application. One of these components is the Repository class, which is essential for abstracting database interactions and promoting clean code architecture.

### Create a New Repository Class

To create a new Repository class, use the following command. This command creates a new Repository class in the `packages/Webkul/Category/src/Repository` directory.

```bash
php artisan package:make-repository CategoryRepository Webkul/Category
```

### Explanation

- **Command:** The command `php artisan package:make-repository` is used to generate a new Repository class.
- **Repository Name:** `CategoryRepository` is the name of the new Repository class that will be created.
- **Package Path:** `Webkul/Category` specifies the package within the packages directory where the new Repository class will be created.

## Manually Setting Up Repository Files

Manually setting up repository files involves creating and organizing repository classes in your application without relying on automated generators. This approach allows for custom structuring and naming conventions tailored to your project's needs. By manually managing repository files, developers can ensure precise control over code organization and maintain consistency across the application architecture.

### Setting Up CategoryRepository in Webkul/Category Package

Start by creating a `Repository` folder within the `Webkul/Category/src/` directory. This folder will house the repository class responsible for handling category-related database operations.Create a file named `CategoryRepository.php`. 

```
  └── packages
      └── Webkul
          └── Category
              └── src
                  ├── ...
                  └── Repository
                      └── CategoryRepository.php
```

This file will contain the `CategoryRepository` class, which will encapsulate methods for interacting with category data.
Copy the following code into your newly created repository file.

```php
<?php

namespace Webkul\Category\Repository;

use Webkul\Core\Eloquent\Repository;

class CategoryRepository extends Repository
{
    /**
     * Specify the Model class name
     *
     * @return string
     */
    function model(): string
    {
        return 'Webkul\Category\Contracts\Category';
    }
}
```

## Available Methods

We are using the Prettus Repository package. You can find all available methods in the Prettus repository [here](https://github.com/andersao/l5-repository?tab=readme-ov-file#methods). Here are some examples:

Examples:

| SN. | Method              | Description                               |
| ------- | ------              | -----------                               |
| 1       | all                 | Find all results in the Repository        |
| 2       | find                | Find a result by ID                       |
| 3       | findOrFail          | Retrieve a single resource by its ID or throw an exception if not found.|
| 4       | create              | Create a new resource.                       |
| 5       | update              | Update an existing resource by its ID.       |
| 6       | delete              | Delete a resource by its ID.                 |
| 7       | paginate            | Find all results in the Repository with pagination  |
| 8       | where               | Retrieve resource matching specific conditions.  |
| 9       | first               | Retrieve the first resource matching specific conditions. |
| 10      | firstOrFail         | Retrieve the first resource matching specific conditions or throw an exception if not found. |
| 11      | With(['table_name'])| Load the model relationships Eager load relationships |
| 12      | findWhereIn         | Find results by multiple values in one field|

### all

The all method is called on the categoryRepository instance. This method retrieves all records of the Category model from the database.

```php
$categories = $this->categoryRepository->all();
```

### Find

The find method is called on the categoryRepository instance. This method attempts to retrieve a Category model by its primary key.

```php
$category = $this->categoryRepository->find($id);
```

### FindOrFail

The findOrFail method is called on the categoryRepository instance. This method attempts to retrieve a Category model by its primary key and throws ModelNotFound Exception.

```php
$category = $this->categoryRepository->findOrFail($id);
```

### Create

The `create` method is called on the `categoryRepository` instance. This method is responsible for creating and saving a new instance of the `Category` model to the database.

```php
$category = $this->categoryRepository->create($data);
```

### Update

The `update` method is called on the `categoryRepository` instance. This method is responsible for updating a existing instance of the `Category` model to the database.

```php
$category = $this->categoryRepository->update($data, $id);
```

### Delete

The `delete` method is called on the `categoryRepository` instance. This method is responsible for delete a existing instance of the `category` model to the database.

```php
$category = $this->categoryRepository->delete($id);
```

### Paginate

The `paginate` method is called on the `categoryRepository` instance. This method is responsible for retrieving a paginated set of records for the `Category` model from the database.

```php
// Number of categories to be displayed per page.
$perPage = 15;

// Paginate the categories.
$categories = $this->categoryRepository->paginate($perPage);
```

### FindWhere

The `findWhere` method is called on the categoryRepository instance. This method adds a query constraint to filter the results based on a specified condition.

```php
$categories = $this->categoryRepository->findWhere([
    'status' => 'active',
]);
```

The `model()` method within CategoryRepository.php returns the path of your contract class (`CategoryContract` in this example). This method initializes the model instance used throughout the repository for database interactions.

Your `CategoryRepository` is now set up and ready for use within your application. It encapsulates the logic for interacting with category data, following best practices for separation of concerns and promoting clean architecture.

By utilizing the `CategoryRepository`, you can efficiently perform database operations related to categorys while maintaining a structured and maintainable codebase.