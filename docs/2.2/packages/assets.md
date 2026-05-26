# Assets

Krayin uses [Vite](https://vite.dev/) to bundle JavaScript and CSS for the admin. Each package ships its own Vite config and registers itself with the central `krayin-vite` integration so that hot-module-reload, builds, and asset URLs all work the same way as the core packages.

This page walks through wiring a package called **Example** end to end &mdash; from where the source files live, to compiling them with Vite, to injecting them into the admin layout.

For Laravel-side context see the [Laravel Vite docs](https://laravel.com/docs/11.x/vite).

## 📁 Where assets live

Source files live under `src/Resources/assets/` inside your package. Standard sub-folders:

```text
packages
└── Webkul
    └── Example
        └── src
            ├── ...
            └── Resources
                └── assets
                    ├── css
                    │   └── app.css
                    ├── js
                    │   └── app.js
                    ├── images
                    └── fonts
```

| Folder | Holds |
| --- | --- |
| `css/` | Stylesheets (Tailwind input + custom CSS) |
| `js/` | JavaScript entry point and any modules |
| `images/` | Static image assets |
| `fonts/` | Web fonts |

To make Vite track images and fonts (so it copies them into the build output), add this single line to your `js/app.js`:

```js
// Track all images and fonts for publishing.
import.meta.glob(['../images/**', '../fonts/**']);
```

## ⚙️ Register the package with `krayin-vite`

Krayin discovers your package's assets through a config file you merge into `krayin-vite.viters`.

### 1. Create `Config/krayin-vite.php`

```php
<?php

return [
    'example' => [
        'hot_file' => 'example-vite.hot',
        'build_directory' => 'example/build',
        'package_assets_directory' => 'src/Resources/assets',
    ],
];
```

| Key | Purpose |
| --- | --- |
| `hot_file` | Filename Vite writes to `public/` while the dev server is running. Must be unique per package. |
| `build_directory` | Where compiled assets land under `public/`. |
| `package_assets_directory` | Path inside your package to the source files. |

### 2. Merge it in your service provider

In `register()`:

```php
$this->mergeConfigFrom(
    dirname(__DIR__) . '/Config/krayin-vite.php',
    'krayin-vite.viters',
);
```

### 3. Publish the build output

In `boot()`:

```php
$this->publishes([
    __DIR__ . '/../../publishable/build' => public_path('example/build'),
], 'public');
```

## 🛠️ Configure Vite for your package

You need five config files at the **root of your package** (alongside `src/`), not inside `src/`:

```text
packages
└── Webkul
    └── Example
        ├── composer.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vite.config.js
        └── src
            └── ...
```

### `composer.json`

```json
{
    "name": "krayin/example",
    "license": "MIT",
    "authors": [
        { "name": "krayin", "email": "support@krayin.com" }
    ],
    "require": {},
    "autoload": {
        "psr-4": {
            "Webkul\\Example\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Webkul\\Example\\Providers\\ExampleServiceProvider"
            ]
        }
    },
    "minimum-stability": "dev"
}
```

### `package.json`

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
        "@vitejs/plugin-vue": "^4.2.3"
    }
}
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot-module-reload. |
| `npm run build` | Produces optimised assets for production. |

### `postcss.config.js`

```js
module.exports = ({ env }) => ({
    plugins: [require('tailwindcss')(), require('autoprefixer')()],
});
```

Two plugins:

- **Tailwind CSS** &mdash; processes your utility classes.
- **Autoprefixer** &mdash; adds vendor prefixes for older browsers.

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/Resources/**/*.blade.php', './src/Resources/**/*.js'],

    theme: {
        container: {
            center: true,
            screens: { '4xl': '1920px' },
            padding: { DEFAULT: '16px' },
        },
        screens: {
            sm: '525px',
            md: '768px',
            lg: '1024px',
            xl: '1240px',
            '2xl': '1440px',
            '3xl': '1680px',
            '4xl': '1920px',
        },
        extend: {
            colors: {},
            fontFamily: {
                inter: ['Inter'],
                icon: ['icomoon'],
            },
        },
    },

    darkMode: 'class',
    plugins: [],
    safelist: [{ pattern: /icon-/ }],
};
```

| Key | Purpose |
| --- | --- |
| `content` | Files Tailwind scans for class names. Must include your Blade and JS. |
| `theme.screens` | Custom breakpoints matching the rest of Krayin. |
| `darkMode: 'class'` | Toggles dark mode via a CSS class, not a media query. |
| `safelist` | Classes Tailwind should always emit, even if it can't see them in source (`icon-*` classes are added dynamically by [the menu config](./add-menu-in-admin.md#add-a-menu-icon)). |

### `vite.config.js`

```js
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig(({ mode }) => {
    const envDir = '../../../';

    Object.assign(process.env, loadEnv(mode, envDir));

    return {
        build: { emptyOutDir: true },
        envDir,
        server: {
            host: process.env.VITE_HOST || 'localhost',
            port: process.env.VITE_PORT || 5173,
            cors: true,
        },
        plugins: [
            vue(),
            laravel({
                hotFile: '../../../public/example-vite.hot',
                publicDirectory: 'publishable',
                buildDirectory: 'build',
                input: [
                    'src/Resources/assets/css/app.css',
                    'src/Resources/assets/js/app.js',
                ],
                refresh: true,
            }),
        ],
        experimental: {
            renderBuiltUrl(filename, { hostType }) {
                if (hostType === 'css') {
                    return path.basename(filename);
                }
            },
        },
    };
});
```

::: warning Match the `hotFile` name everywhere
The `hotFile` in `vite.config.js` and the `hot_file` value in `krayin-vite.php` must match exactly (just `.hot` vs without &mdash; the config strips the extension). A mismatch silently breaks hot reload.
:::

## 🔌 Inject the assets into the admin layout

### 1. Create a Blade partial

`packages/Webkul/Example/src/Resources/views/example-style.blade.php`:

```blade
{{ vite()->set(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'], 'example') }}
```

The `vite()` helper picks the right URL automatically &mdash; dev-server URL while `npm run dev` is running, hashed build URL otherwise.

### 2. Register it via an event listener

Inside `packages/Webkul/Example/src/Providers/EventServiceProvider.php`:

```php
use Illuminate\Support\Facades\Event;

public function boot(): void
{
    Event::listen('admin.layout.head.before', function ($viewRenderEventManager) {
        $viewRenderEventManager->addTemplate(
            'example::example-style'
        );
    });
}
```

Krayin's admin layout fires `admin.layout.head.before` as it renders &mdash; your listener inserts the partial inside `<head>`.

## ⌨️ Build commands

| Command | When to use it |
| --- | --- |
| `npm run dev` | While developing &mdash; gives you hot reload as you edit CSS / JS / Vue files. |
| `npm run build` | Before deploying. Produces minified assets in `publishable/build/`. |

After a production build, run the publish step so the assets are copied into `public/`:

```bash
php artisan vendor:publish --tag=public --force
```

## 🧪 Verify

1. Start the dev server: `npm run dev` inside the package directory.
2. Reload the admin and open DevTools → Network &mdash; your CSS/JS should be served from `localhost:5173`.
3. Edit `app.css`, save, watch the admin re-style without a manual reload. If nothing reloads, check the `hotFile` name in both [krayin-vite.php](#register-the-package-with-krayin-vite) and [vite.config.js](#vite-config-js) match.

For a production check: `npm run build && php artisan vendor:publish --tag=public --force`, then reload the admin &mdash; assets should be served from `public/example/build/` with hashed filenames.

## 📝 Next steps

- [Blade Components](./blade-components.md) &mdash; use Krayin's prebuilt admin components so you don't have to ship as much CSS yourself.
- [Admin Menu](./add-menu-in-admin.md) &mdash; refer back to add a sidebar icon for your package once the assets are loaded.
