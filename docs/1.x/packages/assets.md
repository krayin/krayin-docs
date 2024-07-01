# Bundling Assets

[[TOC]]

## Introduction

Assets in web development refer to files such as stylesheets, scripts, and images that are utilized to enhance the functionality, design, and interactivity of a web application or website. These files are essential for providing styling, behavior, and media content to the user interface.

- **CSS**: Cascading Style Sheets (CSS) define the presentation and layout of HTML elements, ensuring consistent styling across pages.
- **JavaScript**: JavaScript (JS) adds interactivity and dynamic behavior to web pages, enabling features like form validation, animations, and AJAX requests.
- **Images**: Images enhance visual content, including logos, illustrations, and photographs, making web pages more engaging and informative.

To learn in detail about Bundling Asset, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/frontend#bundling-assets).

## Directory Structure

To maintain organization and manage these assets effectively, developers typically structure them within dedicated folders in the project's `Resources\assets` directory. For instance:

- `/Resources/assets/images`: Stores image files used throughout the application.
- `/Resources/assets/js`: Holds JavaScript files such as `app.js` for client-side scripting.
- `/Resources/assets/sass`: Contains CSS files like `app.css` for styling the application.
- `/Resources/assets/fonts`: Stores fonts used throughout the application.

Here's the updated directory structure:

```php
└── packages
    └── Webkul
        └── Category
            └── src
                ├── ...
                └── Resources
                    ├── ...
                    └── assets
                        ├── sass
                        │   └── app.sass
                        ├── js
                        │   └── app.js
                        └── images
                        └── fonts
                    
```

## Configure Compiling Assets

To compile the assets, perform the following steps:

## Create Configuration Files

First, create the following configuration files in the root directory of your package, specifically inside `packages/Webkul/Category`:

- `package.json`
- `webpack.mix.js`

### Set Up package.json

Copy and paste the following code into your `package.json` file:

```json
{
    "private": true,
    "scripts": {
        "dev": "npm run development",
        "development": "mix",
        "watch": "mix watch",
        "watch-poll": "mix watch -- --watch-options-poll=1000",
        "hot": "mix watch --hot",
        "prod": "npm run production",
        "production": "mix --production"
    },
    "devDependencies": {
        "axios": "^0.21.4",
        "cross-env": "^7.0.3",
        "jquery": "^3.6.0",
        "laravel-mix": "^6.0.6",
        "laravel-mix-merge-manifest": "^2.0.0",
        "lodash": "^4.17.19",
        "postcss": "^8.1.14",
        "sass": "^1.32.8",
        "sass-loader": "^11.0.1",
        "vue": "^2.6.12",
        "vue-loader": "^15.9.6",
        "vue-template-compiler": "^2.6.12"
    },
    "dependencies": {
        "moment": "^2.29.1",
        "vee-validate": "^2.2.15",
        "vue-cal": "^3.10.1",
        "vue-kanban": "^1.8.0",
        "vue-timeago": "^5.1.3",
        "vuedraggable": "^2.24.3"
    }
}

```

#### Explanation

The `package.json` file includes the following:

- Ensures the package is private and not published to a registry.

- **Scripts**
  - dev: Runs the development script. This command is a shortcut for running npm run development.

  - development: Executes mix. This typically refers to Laravel Mix, a wrapper around Webpack, to compile and bundle assets in development mode.

  - watch: Runs mix watch. This command watches for file changes and automatically recompiles assets whenever a change is detected, useful during development for continuous integration of updates.

  - watch-poll: Runs mix watch with the --watch-options-poll=1000 option. This enables polling for file changes every 1000 milliseconds (1 second), which can be useful in certain development environments where file change notifications are unreliable.

  - hot: Runs mix watch --hot. This command enables Hot Module Replacement (HMR), allowing modules to be replaced without a full browser refresh, enhancing development experience by maintaining application state.

  - prod: Runs the production script. This command is a shortcut for running npm run production.

  - production: Executes mix --production. This compiles and bundles assets for production, typically with optimizations like minification, which makes the assets smaller and faster to load in a production environment.

- **DevDependencies:**
The devDependencies section in a package.json file specifies the packages that are required for the development of the application. These dependencies are not included in the production build. Here’s a brief overview of each dependency listed:

  - axios: A popular promise-based HTTP client for making requests to servers. It is used to handle HTTP requests and responses.

  - cross-env: A utility that allows you to set environment variables across different platforms in a consistent way. This is particularly useful for ensuring scripts work across various operating systems.

  - jquery: A fast, small, and feature-rich JavaScript library. It simplifies things like HTML document traversal and manipulation, event handling, and animation.

  - laravel-mix: An elegant wrapper around Webpack for the Laravel framework. It simplifies the process of compiling and minifying CSS and JavaScript files.

  - laravel-mix-merge-manifest: A Laravel Mix extension that merges manifests when you have multiple Mix instances in your project. This is useful for complex projects with multiple entry points.

  - lodash: A modern JavaScript utility library delivering modularity, performance, and extras. It provides helpful functions for working with arrays, numbers, objects, strings, etc.

  - postcss: A tool for transforming CSS with JavaScript plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

  - sass: A preprocessor scripting language that is interpreted or compiled into CSS. It allows you to use features such as variables, nested rules, and mixins.

  - sass-loader: A loader for Webpack that compiles SCSS or SASS files to CSS. It allows you to use Sass in your Webpack workflow.

  - vue: A progressive JavaScript framework for building user interfaces. Vue is designed to be incrementally adaptable and focuses on the view layer.

  - vue-loader: A loader for Webpack that allows you to write Vue components in a single file format, combining HTML, JavaScript, and CSS.

  - vue-template-compiler: A package used to pre-compile Vue templates into render functions. It is typically used alongside vue-loader to compile Vue components.

- **Dependencies:** These are essential packages required for the project to function, including:
  - moment: A widely-used library for parsing, validating, manipulating, and formatting dates in JavaScript. It simplifies working with dates and times.

  - vee-validate: A form validation library for Vue.js that allows you to validate form inputs with simple declarative syntax. It helps manage form validation logic and provides user feedback on form errors.

  - vue-cal: A flexible calendar component for Vue.js. It provides features like multi-range selection, drag-and-drop, and custom event rendering, making it useful for implementing calendar functionality in applications.

  - vue-kanban: A Kanban board component for Vue.js. It allows you to create and manage tasks in a Kanban-style board, useful for project management and task tracking applications.

  - vue-timeago: A Vue.js component that automatically updates the display of dates and times to a "time ago" format, such as "3 minutes ago" or "2 days ago". It enhances the user interface by providing relative time formatting.

  - vuedraggable: A Vue.js component based on the Sortable.js library that enables drag-and-drop functionality. It allows you to create draggable lists and components, enhancing the interactivity of your application.

### Set Up webpack.mix.js

Here the configuration of webpack.min.js you can customize for your configuration

```javascript
const mix = require("laravel-mix");

if (mix == 'undefined') {
    const { mix } = require("laravel-mix");
}

require("laravel-mix-merge-manifest");

if (mix.inProduction()) {
    var publicPath = 'publishable/assets';
} else {
    var publicPath = "../../../public/vendor/webkul/category/assets";
}

mix.setPublicPath(publicPath).mergeManifest();
mix.disableNotifications();

mix.js(__dirname + "/src/Resources/assets/js/app.js", "js/category.js")
    .copy(__dirname + "/src/Resources/assets/images", publicPath + "/images")
    .sass(__dirname + "/src/Resources/assets/sass/app.scss", "css/category.css")
    .options({
        processCssUrls: false
    }).vue();

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.js'
        }
    }
});

if (! mix.inProduction()) {
    mix.sourceMaps();
}

if (mix.inProduction()) {
    mix.version();
}
```

This script is a configuration file for Laravel Mix, a tool for compiling and optimizing frontend assets in a Laravel application. Let's break down each part of the code:

### Importing Laravel Mix

```js
const mix = require("laravel-mix");
if (mix == 'undefined') {
    const { mix } = require("laravel-mix");
}
```

This code imports Laravel Mix. The conditional check ensures that `mix` is defined, though it's unnecessary here as `require` should always return the module correctly.

### Merging Manifests

```js
require("laravel-mix-merge-manifest");
```

This imports the `laravel-mix-merge-manifest` package, which allows merging multiple Mix manifests.

### Setting the Public Path

```js
if (mix.inProduction()) {
  var publicPath = 'publishable/assets';
} else {
  var publicPath = "../../../public/vendor/webkul/admin/assets";
}
```

The `publicPath` is set based on whether the build is for production or development. In production, it sets the path to `publishable/assets`, otherwise, it sets the path to `../../../public/vendor/webkul/admin/assets`.

### Mix Configuration

```js
mix.setPublicPath(publicPath).mergeManifest();
mix.disableNotifications();
```

  - mix.setPublicPath(publicPath): Sets the public directory where the compiled assets will be stored.

  - mix.mergeManifest(): Merges the Mix manifests.

  - mix.disableNotifications(): Disables system notifications for the build process.

### Asset Compilation

```js
mix.js(__dirname + "/src/Resources/assets/js/app.js", "js/admin.js")
    .copy(__dirname + "/src/Resources/assets/images", publicPath + "/images")
    .sass(__dirname + "/src/Resources/assets/sass/app.scss", "css/admin.css")
    .options({
        processCssUrls: false
    }).vue();

```

  - mix.js(): Compiles the JavaScript file from the specified source to the specified destination.

  - mix.copy(): Copies image files from the source directory to the public path.

  - mix.sass(): Compiles the SASS file to CSS.

  - options({ processCssUrls: false }): Disables the processing of URLs found in CSS files.

  - vue(): Configures Laravel Mix to handle Vue.js single-file components.

### Webpack Configuration

```js
mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.js'
        }
    }
});
```

This customizes the Webpack configuration. It sets an alias for Vue to use the runtime-only build.

### Source Maps

```js
if (!mix.inProduction()) {
    mix.sourceMaps();
}
```

This generates source maps only in non-production environments to help with debugging.

### Versioning

```js
if (mix.inProduction()) {
    mix.version();
}
```
This enables versioning in production, appending a unique hash to filenames to help with cache busting.

Overall, this configuration sets up Laravel Mix to handle JavaScript, images, SASS, and Vue.js components, with different behaviors for development and production environments.



## Load Assets in Blade File

Add the following code to your Blade file to load assets from your package:

```php
  <link rel="stylesheet" href="{{ asset('vendor/webkul/ui/assets/css/ui.css') }}">
  <link rel="stylesheet" href="{{ asset('vendor/webkul/category/assets/css/category.css') }}">

  // ...

  <script type="text/javascript" src="{{ asset('vendor/webkul/category/assets/js/category.js') }}"></script>
  <script type="text/javascript" src="{{ asset('vendor/webkul/ui/assets/js/ui.js') }}"></script>
```
