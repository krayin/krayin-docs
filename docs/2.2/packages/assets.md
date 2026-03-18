# Bundling Assets

[[TOC]]

## Introduction

Assets in web development refer to files such as stylesheets, scripts, and images that are utilized to enhance the functionality, design, and interactivity of a web application or website. These files are essential for providing styling, behavior, and media content to the user interface.

- **CSS**: Cascading Style Sheets (CSS) define the presentation and layout of HTML elements, ensuring consistent styling across pages.
- **JavaScript**: JavaScript (JS) adds interactivity and dynamic behavior to web pages, enabling features like form validation, animations, and AJAX requests.
- **Images**: Images enhance visual content, including logos, illustrations, and photographs, making web pages more engaging and informative.

To learn in detail about Bundling Asset, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/frontend#bundling-assets).

## Adjust Vite in Krayin

### Step 1: Create a New Vite Configuration File

Create a new file named `krayin-vite.php` in the packages/Webkul/`<PackageName>`/src/Config directory.


### Step 2: Define Vite Configuration

In the `krayin-vite.php` file, paste this code.

```php
<?php

return [
    'custom-package' => [
        'hot_file'                 => 'custom-package-vite.hot', // change the vite name from custom-package-vite.hot to your custom package name
        'build_directory'          => 'custom-package/build', // change the build directory from custom-package/build to your custom package name
        'package_assets_directory' => 'src/Resources/assets',
    ],
];
```

### Step 3: Make it Available in the Service Provider of Your Package

In your package's service provider, include this code in the `register` method:

```php
$this->mergeConfigFrom(
    dirname(__DIR__) . '/Config/krayin-vite.php',
    'krayin-vite.viters'
);
```

### Step 4: Publish the Assets to the Public Directory

In your package's service provider, include this code in the `boot` method:

```php
$this->publishes([
    __DIR__ . '/../../publishable/build' => public_path('custom-package/build'), // change the build directory from custom-package/build to your custom package name
], 'public');
```


## Directory Structure

To maintain organization and manage these assets effectively, developers typically structure them within dedicated directories in the project's `Resources\assets` directory. For instance:

- `/Resources/assets/js`: Holds JavaScript files such as `app.js` for client-side scripting.
- `/Resources/assets/css`: Contains CSS files like `app.css` for styling the application.
- `/Resources/assets/images`: Stores image files used throughout the application.
- `/Resources/assets/fonts`: Stores fonts used throughout the application.

Here's the updated directory structure:

```php
└── packages
    └── Webkul
        └── PackageName
            └── src
                ├── ...
                └── Resources
                    ├── ...
                    └── assets
                        ├── css
                        │   └── app.css
                        ├── js
                        │   └── app.js
                        └── images
                        └── fonts
                    
```
The following JavaScript code snippet is used to track and publish all images and fonts in packages/Webkul/`<PackageName>`/Resources/assets/js/app.js:

```js
/**
 * This will track all the images and fonts for publishing.
*/
import.meta.glob(["../images/**", "../fonts/**"]);
```

#### Explanation

- This code utilizes the `import.meta.glob()` function, which is a feature in JavaScript for importing multiple modules using glob patterns.

- `"../images/**"` : Matches all files and directories within the images directory and its subdirectories.

- `"../fonts/**"` : Matches all files and directories within the fonts directory and its subdirectories.



## Configure Compiling Assets

To compile the assets, perform the following steps:

## Create Configuration Files

First, create the following configuration files in the root directory of your package, specifically inside `packages/Webkul/<PackageName>`

- `composer.json`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `vite.config.js`


### Set Up composer.json

Here the configuration of composer.json you can customize for your configuration

```json
{
    "name": "krayin/<PackageName>",
    "license": "MIT",
    "authors": [
        {
            "name": "krayin",
            "email": "support@krayin.com"
        }
    ],
    "require": {},
    "autoload": {
        "psr-4": {
            "Webkul\\<PackageName>\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Webkul\\<PackageName>\\Providers\\<PackageName>ServiceProvider"
            ],
            "aliases": {}
        }
    },
    "minimum-stability": "dev"
}

```
#### Explanation

- This section explains how to set up a composer.json file, which is used by Composer (a PHP dependency manager) to manage your project's dependencies and auto-loading.

Key parts of the configuration:

- `name`: The package name, using the format krayin/`<PackageName>`. Replace `<PackageName>` with your actual package name.

- `license`: Specifies the license type (MIT here).

- `authors`: Lists the package authors and their contact info.

- `require`: Lists required PHP packages. It's empty here, but you can add dependencies as needed.

- `autoload`: Uses PSR-4 auto-loading, mapping the namespace Webkul\ `<PackageName>`\ to the src/ directory. This helps Composer automatically load your PHP classes.

- `extra`: Contains Laravel-specific configuration, registering your package's service provider so Laravel can use it.

- `minimum-stability`: Set to dev, allowing installation of development versions of dependencies.


### Set Up package.json

Copy and paste the following code into your `package.json` file:

```json
{
    "private": true,
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build"
    },
    "devDependencies": {
        "autoprefixer": "^10.4.16",
        "axios": "^1.7.4",
        "laravel-vite-plugin": "^1.0",
        "postcss": "^8.4.23",
        "tailwindcss": "^3.3.2",
        "vite": "^5.4.12",
        "vue": "^3.4.21"
    },
    "dependencies": {
        "@vee-validate/i18n": "^4.9.1",
        "@vee-validate/rules": "^4.9.1",
        "@vitejs/plugin-vue": "^4.2.3",
    }
}

```
#### Explanation

The `package.json` file includes the following:

-  Ensures the package is private and not published to a registry.

- **Scripts** 
    - `dev` Runs the Vite development server.

    - `build` Builds the project for production using Vite.

- **DevDependencies:** These are packages required during the development phase, including:
    - `autoprefixer` Adds vendor prefixes to CSS rules.
    - `axios` A promise-based HTTP client.
    - `laravel-vite-plugin` Integrates Vite with Laravel.
    - `postcss` A tool for transforming CSS with JavaScript plugins.
    - `tailwindcss` A utility-first CSS framework.
    - `vite` A frontend build tool.
    - `vue` The progressive JavaScript framework.

- **Dependencies:** These are essential packages required for the project to function, including:
    - `@vee-validate/i18n` Internationalization for VeeValidate.
    - `@vee-validate/rules` Validation rules for VeeValidate.
    - `@vitejs/plugin-vue` Integrates Vue with Vite.




### Set Up postcss.config.js

Copy and paste the following code into your `postcss.config.js` file:

```js
module.exports = ({ env }) => ({
    plugins: [require("tailwindcss")(), require("autoprefixer")()],
});
```

#### Explanation

The `postcss.config.js` file configures PostCSS with the following plugins:

- `tailwindcss` Integrates Tailwind CSS.

- `autoprefixer` Adds vendor prefixes to CSS rules to ensure cross-browser compatibility.

### Set Up tailwind.config.js

Copy and paste the following code into your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/Resources/**/*.blade.php", "./src/Resources/**/*.js"],

    theme: {
        container: {
            center: true,

            screens: {
                "4xl": "1920px",
            },

            padding: {
                DEFAULT: "16px",
            },
        },

        screens: {
            sm: "525px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
            "2xl": "1440px",
            "3xl": "1680px",
            "4xl": "1920px",
        },

        extend: {
            colors: {},

            fontFamily: {
                inter: ['Inter'],
                icon: ['icomoon']
            }
        },
    },

    darkMode: 'class',

    plugins: [],

    safelist: [
        {
            pattern: /icon-/,
        }
    ]
};
```

The `tailwind.config.js` file configures Tailwind CSS for your project:

- `content` Specifies the files Tailwind should scan for class names to generate styles. In this case, it includes all Blade and JavaScript files in the src/Resources directory.

- `theme` Allows customization of the default theme. The extend object is used to add or override default styles.

- `plugins` An array where you can add Tailwind CSS plugins. Currently, it is empty.

- `safelist` Allows you to whitelist classes that are not generated by Tailwind CSS. In this case, it whitelists classes with the prefix "icon-".

By following these steps and setting up the tailwind.config.js file as shown, you’ll ensure that Tailwind CSS is properly integrated and configured in your project.


### Set Up vite.config.js

Copy and paste the following code into your `vite.config.js` file:

```js
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig(({ mode }) => {
    const envDir = "../../../";

    Object.assign(process.env, loadEnv(mode, envDir));

    return {
        build: {
            emptyOutDir: true,
        },

        envDir,

        server: {
            host: process.env.VITE_HOST || "localhost",
            port: process.env.VITE_PORT || 5173,
            cors: true,
        },

        plugins: [
            vue(),

            laravel({
                hotFile: "../../../public/custom-package-vite.hot", // change the vite name from custom-package-vite.hot to your custom package name
                publicDirectory: "publishable",
                buildDirectory: "build",
                input: [
                    "src/Resources/assets/css/app.css",
                    "src/Resources/assets/js/app.js",
                ],
                refresh: true,
            }),
        ],

        experimental: {
            renderBuiltUrl(filename, { hostId, hostType, type }) {
                if (hostType === "css") {
                    return path.basename(filename);
                }
            },
        },
    };
});
```

#### Explanation

The `vite.config.js` file configures Vite for your project. Here are the key sections:

- `defineConfig` A function that defines the configuration for Vite.

- `loadEnv` Loads environment variables from a specific directory.

- `emptyOutDir` Ensures the output directory is cleaned before building.

- `envDir` Specifies the directory for environment variables.

- `host` The host address for the development server.

- `port` The port for the development server.

- `plugins` An array of plugins used by Vite. The laravel-vite-plugin integrates Vite with Laravel.

- `experimental` Experimental features, such as custom handling of built URLs for CSS.


## Load Assets in Blade File

### Step 1: Create a Blade File

Create a new Blade file in your package's resources/views directory. For example, create a file named `custom-package-style.blade.php` and paste the below code in it and replace the `custom-package` with your custom package name.

```php
{{ vite()->set(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'], 'custom-package') }}
```
### Step 2: Render the Blade File using EventServiceProvider

In your package's EventServiceProvider provider which is placed in packages/Webkul/`<PackageName>`/src/Providers/EventServiceProvider.php, include this code in the `boot` method:

```php
Event::listen('admin.layout.head.before', function ($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('custom-package::path-to-file/custom-package-style.blade.php');
});

```

