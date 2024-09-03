## Package Development

If you are looking to extend the functionalities of Krayin CRM platform, creating a package is the way to go. A package is a self-contained module that adds specific features to the platform. It allows developers to add custom functionality to the platform without modifying the core codebase.

This guide will walk you through the process of developing a package for Krayin.

In Krayin, we have created numerous packages located at **`packages/Webkul/`**. Below is a basic tree structure of a package:

~~~directory-structure
└── Webkul
    └── Category
        └── src
            ├── Config
            │   ├── acl.php
            │   ├── admin-menu.php
            │   └── system.php
            ├── Console
            │   └── Commands
            ├── Contracts
            │   └── Category.php
            ├── Database
            │   ├── Migrations
            │   │   └── 2023_04_21_173057_create_categories_table.php
            │   └── Seeders
            ├── Events
            ├── Http
            │   ├── Controllers
            │   │   └── Admin
            │   │       └── CategoryController.php
            │   ├── Middleware
            │   └── Requests
            │       └── CategoryRequest.php
            ├── Listeners
            ├── Mail
            ├── Models
            │   ├── Category.php
            │   └── CategoryProxy.php
            ├── Providers
            │   ├── CategoryServiceProvider.php
            │   └── ModuleServiceProvider.php
            ├── Routes
            │   └── admin-routes.php
            ├── Repositories
            │   └── CategoryRepository.php
            └── Resources
                ├── assets
                │   ├── images
                │   │   └── category-icon.png
                │   ├── js
                │   │   └── app.js
                │   └── css
                │       └── app.css
                ├── lang
                │   ├── ar.php
                │   └── en.php
                └── views
                    ├── admin
                    │   └── layouts
                    │       └── style.blade.php
                    ├── index.blade.php
                    ├── create.blade.php
                    └── edit.blade.php
~~~
