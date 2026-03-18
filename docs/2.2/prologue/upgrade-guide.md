# Upgrade Guide

[[TOC]]

## Upgrade Steps

To upgrade your current version to the latest version of Krayin, follow these steps:

1. Download the latest version of Krayin from one of the following links:
   - [Download From Official Krayin Site](https://krayincrm.com/download/)
   - [Download From GitHub](https://github.com/krayin/laravel-crm)

2. Extract the downloaded Krayin zip file to the desired deployment location.

3. Open the terminal and navigate to the root dictory of the extracted Krayin dictory.

4. Run the following command in the terminal:

   ```sh
   composer create-project
   ```

   This command will install the necessary dependencies for the latest version of Krayin.

5. Open the **`.env`** file in your project's root dictory. Provide the database credentials of your old project, which you want to upgrade using Krayin.

6. Run one of the following commands to cache the new changes:

   ```sh
   php artisan optimize

   # -- OR --

   php artisan config:cache
   ```

   These commands will cache the configuration files and optimize the project.

7. Now, your project is ready to run the migration command. Execute the following command in the terminal:

   ```sh
   php artisan migrate
   ```

   ::: danger
   Be cautious when using the seeder command as it may reset settings and categories. Add default settings manually if necessary.
   :::

8. Create a symbolic link to link public assets to the storage dictory by running the following command:

   ```sh
   php artisan storage:link
   ```

9. Copy the contents of the previous version's dictory (e.g., **`old-project/storage/app/public`**) to the corresponding dictory in the latest version (e.g., **`new-project/storage/app/public`**).

   ::: tip
   If your existing project depends on local storage, has changed paths, or requires previous logs, ensure to include those as well.
   :::

10. Once the copying is complete, publish the new files by running the following command:

    ```sh
    php artisan vendor:publish --all
    ```

    ::: warning
    Avoid using the **`--force`** flag, as it will reset all your views. Only use it if you understand the consequences.
    :::

11. Congratulations! Your project is now upgraded to the latest version of Krayin. However, keep in mind that if you have made significant customizations, ensure compatibility with the latest version.

## Composer Dependencies

This documentation compares the dependencies between the old and latest versions of a Laravel-based project and provides guidance on the differences and upgrade paths.

### Differences in Composer Dependencies

Here’s a detailed comparison between the two projects:

| Dependency                               | Old Project Version              | Latest Project Version           | Difference/Notes                                         |
|------------------------------------------|----------------------------------|----------------------------------|---------------------------------------------------------|
| **PHP**                                  | `^8.1`                           | `^8.1`                           | No change                                                |
| **barryvdh/laravel-dompdf**              | `^master.0`                         | `^master.0`                         | No change                                                |
| **diglactic/laravel-breadcrumbs**        | `^8.0`                           | `^8.0`                           | No change                                                |
| **doctrine/dbal**                        | `^3.0`                           | `^3.0`                           | No change                                                |
| **guzzlehttp/guzzle**                    | `^7.0.1`                         | `^7.0.1`                         | No change                                                |
| **khaled.alshamaa/ar-php**               | **Not Present**                  | `^6.3`                           | Newly added in the latest project.                       |
| **konekt/concord**                       | `^1.10`                          | `^1.10`                          | No change                                                |
| **krayin/rest-api**                      | `dev-master`                     | **Removed**                      | The `krayin/rest-api` package is not included in the latest project. |
| **laravel/framework**                    | `^10.0`                          | `^10.0`                          | No change                                                |
| **laravel/sanctum**                      | `^3.2`                           | `^3.2`                           | No change                                                |
| **laravel/tinker**                       | `^2.5`                           | `^2.5`                           | No change                                                |
| **laravel/ui**                           | `^4.0`                           | `^4.5`                           | Upgraded from `^4.0` to `^4.5`                           |
| **maatwebsite/excel**                    | `^3.1`                           | `^3.1`                           | No change                                                |
| **mpdf/mpdf**                            | **Not Present**                  | `^8.2`                           | Newly added in the latest project.                       |
| **prettus/l5-repository**                | `^2.7.9`                         | `^2.7.9`                         | No change                                                |

### Differences in Development Dependencies

| Dependency                               | Old Project Version              | Latest Project Version           | Difference/Notes                                         |
|------------------------------------------|----------------------------------|----------------------------------|---------------------------------------------------------|
| **barryvdh/laravel-debugbar**            | `^3.6`                           | `^3.6`                           | No change                                                |
| **fakerphp/faker**                       | `^1.9.1`                         | `^1.9.1`                         | No change                                                |
| **krayin/krayin-package-generator**      | `dev-master`                     | `dev-master`                     | No change                                                |
| **laravel/pint**                         | **Not Present**                  | `^1.16`                          | Newly added in the latest project.                       |
| **laravel/sail**                         | `^1.0.1`                         | `^1.0.1`                         | No change                                                |
| **mockery/mockery**                      | `^1.4.2`                         | `^1.4.2`                         | No change                                                |
| **nunomaduro/collision**                 | `^7.0`                           | `^7.0`                           | No change                                                |
| **pestphp/pest**                         | `^2.6`                           | `^2.6`                           | No change                                                |
| **pestphp/pest-plugin-laravel**          | `^2.1`                           | `^2.1`                           | No change                                                |
| **phpunit/phpunit**                      | `^10.0`                          | `^10.0`                          | No change                                                |
| **spatie/laravel-ignition**              | `^master`                           | `^master`                           | No change                                                |

### Differences in Autoloading

- **New Packages in Latest Project:**
  - `"Webkul\\Warehouse\\": "packages/Webkul/Warehouse/src",`
  - `"Webkul\\Automation\\": "packages/Webkul/Automation/src",`
  - `"Webkul\\DataGrid\\": "packages/Webkul/DataGrid/src"`

### Summary of Changes

1. **Removed Packages:**
   - `krayin/rest-api` has been removed in the latest project.

2. **Added Packages:**
   - `khaled.alshamaa/ar-php` was added in the latest project.
   - `mpdf/mpdf` was added in the latest project.
   - `laravel/pint` was added as a new development dependency.

3. **Updated Packages:**
   - `laravel/ui` was upgraded from version `^4.0` to `^4.5`.

4. **New Autoloaded Packages:**
   - Added new autoload paths for `Webkul\\Warehouse`, `Webkul\\Automation`, and `Webkul\\DataGrid`.

### Upgrade Instructions

To upgrade your project to the latest dependencies, follow these steps:

1. **Update `composer.json`:**
   - Replace the old package list with the updated one provided in the latest project.

2. **Run Composer Update:**
   - Execute the following command to update your dependencies:
     ```bash
     composer update
     ```

3. **Verify Autoloading:**
   - Ensure that the new autoload paths are properly configured by running:
     ```bash
     composer dump-autoload
     ```

4. **Test Your Project:**
   - After updating dependencies, thoroughly test your project to ensure that the changes do not introduce any issues.

### Conclusion

By following these instructions, your project will be updated to use the latest dependencies and autoload configurations. Ensure that you perform adequate testing after the update to confirm everything is functioning as expected.