(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{434:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[t._v("#")]),t._v(" Views")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#directory-structure"}},[t._v("Directory Structure")]),e("ul",[e("li",[e("a",{attrs:{href:"#adding-html-content"}},[t._v("Adding HTML Content")])])])]),e("li",[e("a",{attrs:{href:"#load-views-from-package"}},[t._v("Load Views from Package")])]),e("li",[e("a",{attrs:{href:"#rendering-views"}},[t._v("Rendering Views")])]),e("li",[e("a",{attrs:{href:"#blade-file-naming-convention"}},[t._v("Blade File Naming Convention")]),e("ul",[e("li",[e("a",{attrs:{href:"#listing-index-blade"}},[t._v("Listing (Index Blade):")])]),e("li",[e("a",{attrs:{href:"#creation-create-blade"}},[t._v("Creation (Create Blade):")])]),e("li",[e("a",{attrs:{href:"#updating-edit-blade"}},[t._v("Updating (Edit Blade):")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Views in Laravel are responsible for separating the application's logic from the presentation layer. They provide a clean way to manage and organize the HTML content of your application. Views are typically stored in the "),e("code",[t._v("resources/views")]),t._v(" directory and are rendered using the Blade templating engine, which offers a simple and powerful way to create dynamic content.")]),t._v(" "),e("p",[t._v("By using views, you can create reusable templates and components, making your code more maintainable and easier to understand. Blade templates allow you to use control structures like loops and conditionals, as well as to include other templates, which helps to keep your views organized and modular.")]),t._v(" "),e("p",[t._v("To learn in detail about Views, you can visit the Laravel documentation "),e("a",{attrs:{href:"https://laravel.com/docs/11.x/views",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Here's a basic example of a Blade template:")]),t._v(" "),e("h2",{attrs:{id:"directory-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),e("p",[t._v("To organize the views for our "),e("code",[t._v("Category")]),t._v(" package, we need to set up a specific directory structure. Follow the steps below to create the necessary directories.")]),t._v(" "),e("h4",{attrs:{id:"create-the-resources-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-resources-directory"}},[t._v("#")]),t._v(" Create the "),e("code",[t._v("Resources")]),t._v(" Directory")]),t._v(" "),e("ul",[e("li",[t._v("Navigate to the "),e("code",[t._v("packages/Webkul/Category/src")]),t._v(" directory.")]),t._v(" "),e("li",[t._v("Create a directory named "),e("code",[t._v("Resources")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"create-the-views-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-views-directory"}},[t._v("#")]),t._v(" Create the "),e("code",[t._v("views")]),t._v(" Directory")]),t._v(" "),e("ul",[e("li",[t._v("Inside the "),e("code",[t._v("Resources")]),t._v(" directory, create another directory named "),e("code",[t._v("views")]),t._v(" and inside the views directory create category directory.")]),t._v(" "),e("li",[t._v("Inside the "),e("code",[t._v("views/category")]),t._v(" directory, create a file named "),e("code",[t._v("index.blade.php")]),t._v(", "),e("code",[t._v("create.blade.php")]),t._v(", "),e("code",[t._v("edit.blade.php")]),t._v(" .")])]),t._v(" "),e("p",[t._v("The updated directory structure will look like this:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("  └── packages\n      └── Webkul\n          └── Category\n              └── src\n                  ├── "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n                  └── Resources\n                      └── views\n                          └── category\n                              ├── create.blade.php\n                              ├── edit.blade.php\n                              └── index.blade.php\n")])])]),e("h3",{attrs:{id:"adding-html-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-html-content"}},[t._v("#")]),t._v(" Adding HTML Content")]),t._v(" "),e("p",[t._v("Below is an example of basic HTML content that you can add to each "),e("code",[t._v("index.blade.php")]),t._v(" file.")]),t._v(" "),e("h4",{attrs:{id:"index-blade-php-in-the-category-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-blade-php-in-the-category-directory"}},[t._v("#")]),t._v(" "),e("code",[t._v("index.blade.php")]),t._v(" in the "),e("code",[t._v("category")]),t._v(" Directory")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("x-admin:")]),t._v(":layouts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("x-slot:")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        @lang('category::app.categories.index.title')\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("x-slot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Content --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("flex gap-4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("x-admin:")]),t._v(":layouts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"load-views-from-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-views-from-package"}},[t._v("#")]),t._v(" Load Views from Package")]),t._v(" "),e("p",[t._v("To make the views in our package accessible, we need to register them in the service provider's "),e("code",[t._v("boot")]),t._v(" method. This involves updating the "),e("code",[t._v("CategoryServiceProvider.php")]),t._v(" file to include the view loading logic. Follow the steps below:")]),t._v(" "),e("h4",{attrs:{id:"open-the-service-provider-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-the-service-provider-file"}},[t._v("#")]),t._v(" Open the Service Provider File")]),t._v(" "),e("ul",[e("li",[t._v("Navigate to the "),e("code",[t._v("packages/Webkul/Category/src/Providers")]),t._v(" directory.")]),t._v(" "),e("li",[t._v("Open the "),e("code",[t._v("CategoryServiceProvider.php")]),t._v(" file.")])]),t._v(" "),e("h4",{attrs:{id:"update-the-boot-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-the-boot-method"}},[t._v("#")]),t._v(" Update the "),e("code",[t._v("boot")]),t._v(" Method")]),t._v(" "),e("ul",[e("li",[t._v("Inside the "),e("code",[t._v("boot")]),t._v(" method of the "),e("code",[t._v("CategoryServiceProvider")]),t._v(" class, add the logic to load views from the package.")])]),t._v(" "),e("h4",{attrs:{id:"updated-categoryserviceprovider-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated-categoryserviceprovider-php"}},[t._v("#")]),t._v(" Updated "),e("code",[t._v("CategoryServiceProvider.php")])]),t._v(" "),e("p",[t._v("Here is the updated code for "),e("code",[t._v("CategoryServiceProvider.php")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CategoryServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Bootstrap services.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... ")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadViewsFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/../Resources/views'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'category'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h4",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("namespace")]),t._v(" keyword defines the namespace for the "),e("code",[t._v("CategoryServiceProvider")]),t._v(" class, which is "),e("code",[t._v("Webkul\\Category\\Providers")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("CategoryServiceProvider")]),t._v(" class extends Laravel's base "),e("code",[t._v("ServiceProvider")]),t._v(" class.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("boot")]),t._v(" method is used to bootstrap any application services.")])]),t._v(" "),e("li",[e("p",[t._v("Inside the "),e("code",[t._v("boot")]),t._v(" method, we use the "),e("code",[t._v("$this->loadViewsFrom")]),t._v(" method to register the views from the package.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("loadViewsFrom")]),t._v(" method takes two arguments:")]),t._v(" "),e("ul",[e("li",[t._v("The path to the views directory within the package: "),e("code",[t._v("__DIR__ . '/../Resources/views'")]),t._v(".")]),t._v(" "),e("li",[t._v("A namespace for the views: "),e("code",[t._v("'category'")]),t._v(".")])])])]),t._v(" "),e("h2",{attrs:{id:"rendering-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rendering-views"}},[t._v("#")]),t._v(" Rendering Views")]),t._v(" "),e("p",[t._v("In Laravel applications, views are typically rendered from controller methods using the "),e("code",[t._v("view")]),t._v(" helper function. This section describes how views are invoked and passed data from a controller.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("View"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("View")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CategoryRepository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CategoryController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a controller instance.\n     * \n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("CategoryRepository")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categoryRepository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Display the listing of the resource.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("View")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categories")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'author'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'category::category.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'categories'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h4",{attrs:{id:"explanation-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation-2"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("view")]),t._v(" helper function in Laravel is used within the "),e("code",[t._v("index")]),t._v(" method of the "),e("code",[t._v("CategoryController")]),t._v(" to render the "),e("code",[t._v("category::category.index")]),t._v(" view.")])]),t._v(" "),e("li",[e("p",[t._v("It accepts two parameters the name of the view ("),e("code",[t._v("category::category.index")]),t._v(") and an array of data ("),e("code",[t._v("compact('categories')")]),t._v(") to pass to the "),e("code",[t._v("view")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"blade-file-naming-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blade-file-naming-convention"}},[t._v("#")]),t._v(" Blade File Naming Convention")]),t._v(" "),e("p",[t._v("Krayin utilizes Blade templates to handle "),e("code",[t._v("listing")]),t._v(", "),e("code",[t._v("creation")]),t._v(", and "),e("code",[t._v("updating")]),t._v(" operations for resources like products, leads, persons, organizations, and categories. This section provides a detailed guide on how to implement these operations using Blade templates within your Krayin package.")]),t._v(" "),e("h3",{attrs:{id:"listing-index-blade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listing-index-blade"}},[t._v("#")]),t._v(" Listing (Index Blade):")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("index.blade.php")]),t._v(" template is used to display a list of all records (categories).")])]),t._v(" "),e("li",[e("p",[t._v("The controller's "),e("code",[t._v("index")]),t._v(" method fetches all categories and passes them to the view.")])])]),t._v(" "),e("h3",{attrs:{id:"creation-create-blade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creation-create-blade"}},[t._v("#")]),t._v(" Creation (Create Blade):")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("create.blade.php")]),t._v(" template contains a form for creating new records.")])]),t._v(" "),e("li",[e("p",[t._v("The controller's "),e("code",[t._v("create")]),t._v(" method renders this view.")])])]),t._v(" "),e("h3",{attrs:{id:"updating-edit-blade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-edit-blade"}},[t._v("#")]),t._v(" Updating (Edit Blade):")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("edit.blade.php")]),t._v(" template contains a form for editing existing records.")])]),t._v(" "),e("li",[e("p",[t._v("The controller's "),e("code",[t._v("edit")]),t._v(" method fetches the specific categories and passes it to the view.")])])]),t._v(" "),e("p",[t._v("By following these steps, you can effectively utilize Blade templates in Krayin for listing, creating, and updating resources, ensuring a structured and maintainable approach to managing CRUD operations within your application.")])])}),[],!1,null,null,null);e.default=n.exports}}]);