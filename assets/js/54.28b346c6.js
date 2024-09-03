(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{351:function(t,e,a){"use strict";a.r(e);var s=a(10),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"repositories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[t._v("#")]),t._v(" Repositories")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#dependency-injection"}},[t._v("Dependency Injection")])]),e("li",[e("a",{attrs:{href:"#using-krayin-package-generator"}},[t._v("Using Krayin Package Generator")]),e("ul",[e("li",[e("a",{attrs:{href:"#create-a-new-repository-class"}},[t._v("Create a New Repository Class")])]),e("li",[e("a",{attrs:{href:"#explanation"}},[t._v("Explanation")])])])]),e("li",[e("a",{attrs:{href:"#manually-setting-up-repository-files"}},[t._v("Manually Setting Up Repository Files")]),e("ul",[e("li",[e("a",{attrs:{href:"#setting-up-categoryrepository-in-webkul-category-package"}},[t._v("Setting Up CategoryRepository in Webkul/Category Package")])])])]),e("li",[e("a",{attrs:{href:"#available-methods"}},[t._v("Available Methods")]),e("ul",[e("li",[e("a",{attrs:{href:"#all"}},[t._v("all")])]),e("li",[e("a",{attrs:{href:"#find"}},[t._v("Find")])]),e("li",[e("a",{attrs:{href:"#findorfail"}},[t._v("FindOrFail")])]),e("li",[e("a",{attrs:{href:"#create"}},[t._v("Create")])]),e("li",[e("a",{attrs:{href:"#update"}},[t._v("Update")])]),e("li",[e("a",{attrs:{href:"#delete"}},[t._v("Delete")])]),e("li",[e("a",{attrs:{href:"#paginate"}},[t._v("Paginate")])]),e("li",[e("a",{attrs:{href:"#findwhere"}},[t._v("FindWhere")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("In traditional development, application logic is often embedded in controllers. An alternative approach uses Repositories to abstract database operations and queries, promoting cleaner, more maintainable code.")]),t._v(" "),e("p",[t._v("Repositories decouple models from controllers and provide readable names for complex queries. Each Repository class binds to an Eloquent model in its constructor, enabling the use of methods like "),e("code",[t._v("findOrFail")]),t._v(", "),e("code",[t._v("update")]),t._v(", and "),e("code",[t._v("all")]),t._v(". This separation enhances code readability, reusability, and adherence to the separation of concerns principle, making the application easier to manage and scale.")]),t._v(" "),e("h2",{attrs:{id:"dependency-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[t._v("#")]),t._v(" Dependency Injection")]),t._v(" "),e("p",[t._v("Dependency Injection (DI) is a design pattern widely used in Laravel for managing class dependencies. It allows classes to receive their dependencies from an external source rather than creating them internally. This promotes loose coupling between classes, enhances reusability, and simplifies unit testing.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("CategoryRepository")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categoryRepository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("__construct()")]),t._v(" method is defined with a parameter "),e("code",[t._v("$categoryRepository")]),t._v(" typed as "),e("code",[t._v("CategoryRepository")]),t._v(".\nLaravel's service container automatically resolves and injects an instance of "),e("code",[t._v("CategoryRepository")]),t._v(" when an instance of the class containing this constructor is instantiated.")]),t._v(" "),e("p",[t._v("This is a form of dependency injection where the "),e("code",[t._v("CategoryRepository")]),t._v(" dependency is injected into the class through its constructor.")]),t._v(" "),e("h2",{attrs:{id:"using-krayin-package-generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-krayin-package-generator"}},[t._v("#")]),t._v(" Using Krayin Package Generator")]),t._v(" "),e("p",[t._v("The Krayin package generator provides a convenient way to create new components for your Krayin application. One of these components is the Repository class, which is essential for abstracting database interactions and promoting clean code architecture.")]),t._v(" "),e("h3",{attrs:{id:"create-a-new-repository-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-repository-class"}},[t._v("#")]),t._v(" Create a New Repository Class")]),t._v(" "),e("p",[t._v("To create a new Repository class, use the following command. This command creates a new Repository class in the "),e("code",[t._v("packages/Webkul/Category/src/Repository")]),t._v(" directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php artisan package:make "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-repository")]),t._v(" CategoryRepository Webkul/Category\n")])])]),e("h3",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Command:")]),t._v(" The command "),e("code",[t._v("php artisan package:make -repository")]),t._v(" is used to generate a new Repository class.")]),t._v(" "),e("li",[e("strong",[t._v("Repository Name:")]),t._v(" "),e("code",[t._v("CategoryRepository")]),t._v(" is the name of the new Repository class that will be created.")]),t._v(" "),e("li",[e("strong",[t._v("Package Path:")]),t._v(" "),e("code",[t._v("Webkul/Category")]),t._v(" specifies the package within the packages directory where the new Repository class will be created.")])]),t._v(" "),e("h2",{attrs:{id:"manually-setting-up-repository-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually-setting-up-repository-files"}},[t._v("#")]),t._v(" Manually Setting Up Repository Files")]),t._v(" "),e("p",[t._v("Manually setting up repository files involves creating and organizing repository classes in your application without relying on automated generators. This approach allows for custom structuring and naming conventions tailored to your project's needs. By manually managing repository files, developers can ensure precise control over code organization and maintain consistency across the application architecture.")]),t._v(" "),e("h3",{attrs:{id:"setting-up-categoryrepository-in-webkul-category-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-categoryrepository-in-webkul-category-package"}},[t._v("#")]),t._v(" Setting Up CategoryRepository in Webkul/Category Package")]),t._v(" "),e("p",[t._v("Start by creating a "),e("code",[t._v("Repository")]),t._v(" directory within the "),e("code",[t._v("Webkul/Category/src/")]),t._v(" directory. This directory will house the repository class responsible for handling category-related database operations.Create a file named "),e("code",[t._v("CategoryRepository.php")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  └── packages\n      └── Webkul\n          └── Category\n              └── src\n                  ├── ...\n                  └── Repository\n                      └── CategoryRepository.php\n")])])]),e("p",[t._v("This file will contain the "),e("code",[t._v("CategoryRepository")]),t._v(" class, which will encapsulate methods for interacting with category data.\nCopy the following code into your newly created repository file.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CategoryRepository")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repository")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Specify the Model class name\n     *\n     * @return string\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Category\\Contracts\\Category'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h2",{attrs:{id:"available-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available Methods")]),t._v(" "),e("p",[t._v("We are using the Prettus Repository package. You can find all available methods in the Prettus repository "),e("a",{attrs:{href:"https://github.com/andersao/l5-repository?tab=readme-ov-file#methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". Here are some examples:")]),t._v(" "),e("p",[t._v("Examples:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("SN.")]),t._v(" "),e("th",[t._v("Method")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("all")]),t._v(" "),e("td",[t._v("Find all results in the Repository")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("find")]),t._v(" "),e("td",[t._v("Find a result by ID")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("findOrFail")]),t._v(" "),e("td",[t._v("Retrieve a single resource by its ID or throw an exception if not found.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("create")]),t._v(" "),e("td",[t._v("Create a new resource.")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("update")]),t._v(" "),e("td",[t._v("Update an existing resource by its ID.")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("delete")]),t._v(" "),e("td",[t._v("Delete a resource by its ID.")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("paginate")]),t._v(" "),e("td",[t._v("Find all results in the Repository with pagination")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("where")]),t._v(" "),e("td",[t._v("Retrieve resource matching specific conditions.")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("first")]),t._v(" "),e("td",[t._v("Retrieve the first resource matching specific conditions.")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("firstOrFail")]),t._v(" "),e("td",[t._v("Retrieve the first resource matching specific conditions or throw an exception if not found.")])]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[t._v("With(['table_name'])")]),t._v(" "),e("td",[t._v("Load the model relationships Eager load relationships")])]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("findWhereIn")]),t._v(" "),e("td",[t._v("Find results by multiple values in one field")])])])]),t._v(" "),e("h3",{attrs:{id:"all"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all"}},[t._v("#")]),t._v(" all")]),t._v(" "),e("p",[t._v("The all method is called on the categoryRepository instance. This method retrieves all records of the Category model from the database.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categories")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" Find")]),t._v(" "),e("p",[t._v("The find method is called on the categoryRepository instance. This method attempts to retrieve a Category model by its primary key.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"findorfail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#findorfail"}},[t._v("#")]),t._v(" FindOrFail")]),t._v(" "),e("p",[t._v("The findOrFail method is called on the categoryRepository instance. This method attempts to retrieve a Category model by its primary key and throws ModelNotFound Exception.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOrFail")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" Create")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("create")]),t._v(" method is called on the "),e("code",[t._v("categoryRepository")]),t._v(" instance. This method is responsible for creating and saving a new instance of the "),e("code",[t._v("Category")]),t._v(" model to the database.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("update")]),t._v(" method is called on the "),e("code",[t._v("categoryRepository")]),t._v(" instance. This method is responsible for updating a existing instance of the "),e("code",[t._v("Category")]),t._v(" model to the database.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("delete")]),t._v(" method is called on the "),e("code",[t._v("categoryRepository")]),t._v(" instance. This method is responsible for delete a existing instance of the "),e("code",[t._v("category")]),t._v(" model to the database.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"paginate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paginate"}},[t._v("#")]),t._v(" Paginate")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("paginate")]),t._v(" method is called on the "),e("code",[t._v("categoryRepository")]),t._v(" instance. This method is responsible for retrieving a paginated set of records for the "),e("code",[t._v("Category")]),t._v(" model from the database.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Number of categories to be displayed per page.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$perPage")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Paginate the categories.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categories")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("paginate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$perPage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"findwhere"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#findwhere"}},[t._v("#")]),t._v(" FindWhere")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("findWhere")]),t._v(" method is called on the categoryRepository instance. This method adds a query constraint to filter the results based on a specified condition.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categories")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findWhere")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'active'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("model()")]),t._v(" method within CategoryRepository.php returns the path of your contract class ("),e("code",[t._v("CategoryContract")]),t._v(" in this example). This method initializes the model instance used throughout the repository for database interactions.")]),t._v(" "),e("p",[t._v("Your "),e("code",[t._v("CategoryRepository")]),t._v(" is now set up and ready for use within your application. It encapsulates the logic for interacting with category data, following best practices for separation of concerns and promoting clean architecture.")]),t._v(" "),e("p",[t._v("By utilizing the "),e("code",[t._v("CategoryRepository")]),t._v(", you can efficiently perform database operations related to categorys while maintaining a structured and maintainable codebase.")])])}),[],!1,null,null,null);e.default=r.exports}}]);