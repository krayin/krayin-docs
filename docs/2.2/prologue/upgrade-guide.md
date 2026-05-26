# Upgrade Guide

Krayin upgrades follow Laravel's standard *download new code, run migrations, republish assets* shape &mdash; the goal of this page is to spell out the exact order so nothing gets reset and your local storage / custom views survive.

Before you start, make a full backup of:

- Your existing project directory.
- Your database (a `mysqldump` is enough).
- `storage/app/public/` &mdash; user-uploaded files live here.

If you skip a backup and the upgrade goes sideways, there's nothing to roll back to.

::: tip Working dir
The rest of this page assumes you've opened a command line at the project root of the **new** Krayin install &mdash; the directory that holds `composer.json`, `artisan`, and the `packages/` folder. Adjust paths accordingly.
:::

## ⬇️ 1. Get the latest Krayin

Pick one source:

- **Official site** &mdash; [Download Krayin](https://krayincrm.com/download/).
- **GitHub release** &mdash; [krayin/laravel-crm releases](https://github.com/krayin/laravel-crm).

Extract the archive into the directory you want the new install to live in.

## ⚙️ 2. Install dependencies

Inside the new project directory:

```bash
composer create-project
```

Composer pulls every PHP dependency that ships with the new Krayin release into `vendor/`.

## 🔑 3. Point the new install at your existing data

Open the `.env` file in the new project root and copy the **database credentials** from your old install:

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=krayin
DB_USERNAME=krayin
DB_PASSWORD=secret
```

Also copy across any custom values you set in the old `.env` &mdash; mail, queue, cache, app key. Don't regenerate `APP_KEY` if your old install set one; that key is used to decrypt existing sessions and cookies.

## 🧱 4. Cache the new config

```bash
php artisan optimize
```

Or, if you only want the config cache and skip route/view caching:

```bash
php artisan config:cache
```

## 🗄️ 5. Run pending migrations

```bash
php artisan migrate
```

This applies every migration that's new in the upgrade target. Your existing data stays in place &mdash; only schema changes run.

::: danger Never run `db:seed` on an upgrade
The seeders set up default roles, pipelines, and configuration values. Running them on top of an existing install can overwrite custom settings. If a release introduces seed data you actually need, the release notes will call out exactly which seeder to run with `--class=...`.
:::

## 🔗 6. Re-link the storage directory

```bash
php artisan storage:link
```

This recreates `public/storage` as a symlink to `storage/app/public`, the way Laravel expects.

## 📁 7. Restore uploaded files

Copy the contents of the **old** install's `storage/app/public/` over the **new** install's same directory:

```bash
cp -R /path/to/old-krayin/storage/app/public/. /path/to/new-krayin/storage/app/public/
```

::: tip Local-storage paths
If your existing install also reads from a different `storage/` path (custom uploads, logs you want to preserve), copy those across too. Anything left only in the old project's `storage/` is lost when you cut over.
:::

## 📦 8. Publish vendor assets

```bash
php artisan vendor:publish --all
```

This copies new translation strings, config defaults, and view stubs into your `resources/` and `config/` directories.

::: warning Don't pass `--force`
`--force` overwrites every published file &mdash; including any view you've customised. Only use it if you're knowingly wiping your customisations.
:::

## ✅ 9. Done

Browse the admin and confirm everything renders. If something looks off, the most common culprits are:

- Stale config &mdash; run `php artisan optimize:clear` to flush every cache and try again.
- Missing migration &mdash; `php artisan migrate:status` shows whether anything is pending.
- View overrides under `resources/views/vendor/` that don't match the new package version &mdash; re-publish just that package's views and re-apply your changes.

## 📋 Dependency reference

The composer + npm package lists move forward with each release. The table below shows the *kind* of change to look out for when reading the release notes &mdash; specific version numbers shift with every release, so always cross-check against the new `composer.json`.

### Composer dependencies &mdash; typical changes

| Type of change | Example | What to do |
| --- | --- | --- |
| **Added** | `mpdf/mpdf` introduced for PDF generation. | Run `composer install`; new packages are pulled automatically. |
| **Removed** | `krayin/rest-api` is no longer bundled &mdash; it's a separate package now. | If you used the bundled version, install it explicitly with `composer require krayin/rest-api`. |
| **Upgraded** | `laravel/ui ^4.0` &rarr; `^4.5`. | `composer update`; check the upgraded package's own changelog for breaking changes. |
| **No change** | `laravel/framework`, `prettus/l5-repository`, etc. | Nothing to do. |

### Autoload paths

New packages that ship inside core Krayin add new entries to the root `composer.json` `autoload.psr-4` map:

```json
"Webkul\\Warehouse\\": "packages/Webkul/Warehouse/src",
"Webkul\\Automation\\": "packages/Webkul/Automation/src",
"Webkul\\DataGrid\\": "packages/Webkul/DataGrid/src"
```

When you upgrade, your `composer.json` should match the upstream one. If you copied the file from the old project, diff it against the new project's `composer.json` and merge any new autoload entries by hand. Then:

```bash
composer dump-autoload
```

### Dev dependencies

Notable dev-tool additions over recent versions:

- **`laravel/pint`** &mdash; the formatter Krayin now uses. Run `vendor/bin/pint` before sending a PR (see [Contribution Guide](./contribution-guide.md#-pint-formatting)).
- **`pestphp/pest` + `pestphp/pest-plugin-laravel`** &mdash; test runner used by the [agent-skills `pest-testing`](../introduction/skills.md) skill.

## 🧪 Verify

After the upgrade:

```bash
php artisan migrate:status   # all migrations should show "Ran"
php artisan optimize:clear   # flush every cache
php artisan route:list       # quick sanity check that routes still resolve
```

Then exercise the parts of the admin you customise &mdash; create a lead, send an email, run a DataGrid filter. If a published view looks broken, re-publish just that package's views and re-apply your changes against the new template:

```bash
php artisan vendor:publish --provider="Webkul\Admin\Providers\AdminServiceProvider" --tag=views --force
```

## 📝 Next steps

- [Contribution Guide](./contribution-guide.md) &mdash; if the upgrade surfaced a bug or missing feature, this is the workflow for sending a fix upstream.
- [Best Security Practices](../digging-deeper/security-practice.md) &mdash; revisit after every major upgrade; new releases sometimes change recommended headers or hardening defaults.
