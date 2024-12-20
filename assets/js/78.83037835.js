(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{376:function(e,n,a){"use strict";a.r(n);var t=a(10),o=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"package-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-development"}},[e._v("#")]),e._v(" Package Development")]),e._v(" "),n("p",[e._v("If you are looking to extend the functionalities of Krayin CRM platform, creating a package is the way to go. A package is a self-contained module that adds specific features to the platform. It allows developers to add custom functionality to the platform without modifying the core codebase.")]),e._v(" "),n("p",[e._v("This guide will walk you through the process of developing a package for Krayin.")]),e._v(" "),n("p",[e._v("In Krayin, we have created numerous packages located at "),n("strong",[n("code",[e._v("packages/Webkul/")])]),e._v(". Below is a basic tree structure of a package:")]),e._v(" "),n("div",{staticClass:"language-directory-structure extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("└── Webkul\n    └── Category\n        └── src\n            ├── Config\n            │   ├── acl.php\n            │   ├── admin-menu.php\n            │   └── system.php\n            ├── Console\n            │   └── Commands\n            ├── Contracts\n            │   └── Category.php\n            ├── Database\n            │   ├── Migrations\n            │   │   └── 2023_04_21_173057_create_categories_table.php\n            │   └── Seeders\n            ├── Events\n            ├── Http\n            │   ├── Controllers\n            │   │   └── Admin\n            │   │       └── CategoryController.php\n            │   ├── Middleware\n            │   └── Requests\n            │       └── CategoryRequest.php\n            ├── Listeners\n            ├── Mail\n            ├── Models\n            │   ├── Category.php\n            │   └── CategoryProxy.php\n            ├── Providers\n            │   ├── CategoryServiceProvider.php\n            │   └── ModuleServiceProvider.php\n            ├── Routes\n            │   └── admin-routes.php\n            ├── Repositories\n            │   └── CategoryRepository.php\n            └── Resources\n                ├── assets\n                │   ├── images\n                │   │   └── category-icon.png\n                │   ├── js\n                │   │   └── app.js\n                │   └── css\n                │       └── app.css\n                ├── lang\n                │   ├── ar.php\n                │   └── en.php\n                └── views\n                    ├── admin\n                    │   └── layouts\n                    │       └── style.blade.php\n                    ├── index.blade.php\n                    ├── create.blade.php\n                    └── edit.blade.php\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);