(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{342:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#how-to-create-controllers"}},[t._v("How to create Controllers")]),a("ul",[a("li",[a("a",{attrs:{href:"#directory-structure"}},[t._v("Directory Structure")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("In Laravel, controllers are responsible for handling the request logic of an application. They act as intermediaries between the models and views, processing user input, interacting with the data layer, and returning the appropriate responses. By organizing related request handling logic into separate classes, controllers make it easier to manage and maintain the application's codebase.")]),t._v(" "),a("p",[t._v("To learn in detail about Controllers, you can visit the Laravel documentation "),a("a",{attrs:{href:"https://laravel.com/docs/11.x/controllers",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"how-to-create-controllers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-controllers"}},[t._v("#")]),t._v(" How to create Controllers")]),t._v(" "),a("p",[t._v('To start building a controller for our category within the Laravel package named "Category," follow the steps below:')]),t._v(" "),a("h3",{attrs:{id:"directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),a("p",[t._v("Create the necessary directory structure within the "),a("code",[t._v("packages/Webkul/Category/src")]),t._v(" path. To create the directory structure follow the following steps:")]),t._v(" "),a("ol",[a("li",[t._v("Navigate to the "),a("code",[t._v("packages/Webkul/Category/src")]),t._v(" directory.")]),t._v(" "),a("li",[t._v("Create an "),a("code",[t._v("Http")]),t._v(" directory inside "),a("code",[t._v("src")]),t._v(".")]),t._v(" "),a("li",[t._v("Inside the "),a("code",[t._v("Http")]),t._v(" directory, create another directory named "),a("code",[t._v("Controllers")]),t._v(".")]),t._v(" "),a("li",[t._v("Inside the "),a("code",[t._v("Controllers")]),t._v(" directory, create base controller named "),a("code",[t._v("Controller.php")]),t._v(" which is extends the "),a("code",[t._v("Laravel")]),t._v(" core controller:")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DispatchesJobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" BaseController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Validation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ValidatesRequests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AuthorizesRequests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Controller")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("AuthorizesRequests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DispatchesJobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ValidatesRequests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Now create a new directory named Category inside this directory, create a new file named "),a("code",[t._v("CategoryController.php")]),t._v(" file.")])]),t._v(" "),a("p",[t._v("In "),a("code",[t._v("packages/Webkul/Category/src/Http/Controllers/Category/CategoryController.php")]),t._v(", define the CategoryController:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CategoryRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CategoryController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Create a controller instance.\n   * \n   * @return void\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("CategoryRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categoryRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Display the listing of the resource.\n   * \n   * @return \\Illuminate\\View\\View\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$categories")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("categoryRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'category::admin.index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'categories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Category details.\n   * \n   * @return \\Illuminate\\View\\View\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("The Updated directory structure will look like this.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("└── packages\n    └── Webkul\n        └── Category\n            └── src\n                ├── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n                └── Http\n                    └── Controllers\n                        ├── Controller"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php\n                        └── Category\n                            └── CategoryController"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php\n")])])]),a("p",[t._v('By following these steps, you will have created the necessary structure and files for handling category within your "Category" package. You can now add the specific logic for each method to handle the functionality required for your category into the admin.')])])}),[],!1,null,null,null);a.default=n.exports}}]);