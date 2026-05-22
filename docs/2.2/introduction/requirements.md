# Requirements

[[TOC]]

Before installing Krayin please make sure your server meets the following requirements,

## 🖥️ Server configuration

- **SERVER**: Apache 2 **OR** NGINX (NGINX with PHP-FPM recommended)
- **RAM**: 3GB or higher
- **PHP**: 8.3 or higher
- **Composer**: 2.5 or higher

Use the per-OS install guides below to set up each component on your system.

::: tip Choose ONE web server &mdash; not both
Krayin needs a single web server. Pick either **Apache 2** (uses `mod_php` out of the box) **OR** **NGINX** (requires **PHP-FPM**). You do **not** need to install both.

**Recommended:** NGINX + PHP-FPM &mdash; better performance and the standard Laravel production stack.
:::

### Install Apache 2

Apache serves PHP via the built-in `mod_php` module, so no separate process manager is needed.

Official documentation: [Apache HTTP Server install guide](https://httpd.apache.org/docs/current/install.html)

:::: tabs

::: tab macOS
Install [Homebrew](https://brew.sh) first, then:

```bash
brew install httpd
```
:::

::: tab "Windows PowerShell"
Follow the [Apache on Windows](https://httpd.apache.org/docs/current/platform/windows.html) guide.
:::

::: tab Linux
```bash
sudo apt update && sudo apt install apache2 libapache2-mod-php8.3
```
:::

::::

---

**&mdash; OR &mdash;**

---

### Install NGINX <small>*(Recommended)*</small>

NGINX does **not** execute PHP itself &mdash; it forwards PHP requests to **PHP-FPM** over a socket. You must install **both** NGINX and PHP-FPM.

Official documentation: [NGINX install guide](https://nginx.org/en/docs/install.html)

:::: tabs

::: tab macOS
```bash
brew install nginx
```

Install [Homebrew](https://brew.sh) first if you don't have it.
:::

::: tab "Windows PowerShell"
Follow the [NGINX on Windows](https://nginx.org/en/docs/windows.html) guide.
:::

::: tab Linux
```bash
sudo apt update && sudo apt install nginx
```
:::

::::

#### Install PHP-FPM (required for NGINX)

Official documentation: [PHP-FPM install manual](https://www.php.net/manual/en/install.fpm.php)

:::: tabs

::: tab macOS
Bundled with `brew install php`. Start with:

```bash
brew services start php
```

Or run `php-fpm` directly.
:::

::: tab "Windows PowerShell"
PHP-FPM is **not officially supported on Windows**. Use `php-cgi.exe` with NGINX `fastcgi_pass` to `127.0.0.1:9000`, or use **Apache 2** instead. See [PHP CGI on Windows](https://www.php.net/manual/en/install.windows.commandline.php).
:::

::: tab Linux
```bash
sudo apt install php8.3-fpm
sudo systemctl enable --now php8.3-fpm
```
:::

::::

Verify PHP-FPM is running:

```bash
php-fpm -v
```

After installing PHP-FPM, point NGINX at the FPM socket in your server block (typically `unix:/run/php/php8.3-fpm.sock` on Ubuntu).

### Install PHP 8.3 or higher

Run the [php.new](https://php.new) installer for your OS. It installs **PHP and Composer** in a single command, so you can skip the Composer section below.

:::: tabs

::: tab macOS
```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.5)"
```
:::

::: tab "Windows PowerShell"
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.5'))
```
:::

::: tab Linux
```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.5)"
```
:::

::::

Close and reopen your command line once the installer finishes. To upgrade PHP or Composer later, re-run the same command.

::: tip Prefer your package manager?
You can still install PHP via Homebrew (`brew install php`) on macOS, or the [ondrej/php PPA](https://launchpad.net/~ondrej/+archive/ubuntu/php) on Ubuntu &mdash; see the [PHP installation manual](https://www.php.net/manual/en/install.php). On Windows, download from [windows.php.net](https://windows.php.net/download/).
:::

Verify the installed version:

```bash
php -v
```

### Install Composer 2.5 or higher

If you installed PHP through [php.new](https://php.new) above, Composer is already on your `PATH` &mdash; skip to the verification command at the bottom of this section.

Otherwise, install Composer manually:

:::: tabs

::: tab macOS
```bash
brew install composer
```

Or follow the [Linux / Unix / macOS guide](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos).
:::

::: tab "Windows PowerShell"
Run the [Composer-Setup installer](https://getcomposer.org/doc/00-intro.md#installation-windows).
:::

::: tab Linux
Follow the [Linux / Unix / macOS guide](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) to download and move `composer.phar` into `/usr/local/bin/composer`.
:::

::::

Verify the installed version:

```bash
composer --version
```

## 🧩 PHP Extensions

Krayin needs two PHP extensions on top of the defaults:

| Extension | Used for |
| --- | --- |
| **`intl`** | Internationalization &mdash; locales, currency and date formatting |
| **`gd`** | Image processing &mdash; avatars, thumbnails, uploads |

### 1. Enable for your OS

:::: tabs

::: tab macOS
Already bundled if you installed PHP via [php.new](https://php.new) or `brew install php`. Nothing to do.
:::

::: tab "Windows PowerShell"
Open your `php.ini` (find it with `php --ini`) and uncomment these two lines by removing the leading `;`:

```ini
extension=intl
extension=gd
```
:::

::: tab Linux
```bash
sudo apt install php8.3-intl php8.3-gd
```
:::

::::

### 2. Restart PHP

Apply the change with the restart command for your stack &mdash; see [Restart so the changes apply](#_3-restart-so-the-changes-apply) below.

### 3. Verify

```bash
php -m | grep -E '^(intl|gd)$'
```

You should see both `intl` and `gd` printed. If either is missing, double-check step 1 for your OS.

## ⚙️ PHP Configuration

These three `php.ini` overrides are **required** &mdash; without them the installer fails on memory limits and bulk imports / exports time out. Three steps:

### 1. Find your `php.ini`

```bash
php --ini
```

The path printed next to **`Loaded Configuration File`** is the file to edit.

::: tip Using NGINX + PHP-FPM?
That command shows the **CLI** `php.ini`. NGINX uses the **FPM** one &mdash; find it with `php-fpm -i | grep "Loaded Configuration File"` and apply the same three changes there too.
:::

### 2. Set these three values

Open the file in any editor and update:

```ini
memory_limit = 4G
max_execution_time = 360
date.timezone = Asia/Kolkata
```

| Setting | Why |
| --- | --- |
| `memory_limit` | `4G` or higher &mdash; needed for composer install and bulk CSV imports |
| `max_execution_time` | `360` seconds or higher &mdash; lets long imports / exports finish |
| `date.timezone` | Your local timezone ([full list](https://www.php.net/manual/en/timezones.php)) |

::: warning
If a line starts with `;`, remove the `;` so the directive takes effect.
:::

### 3. Restart so the changes apply

Run the restart command that matches the web server you installed earlier on this page &mdash; **NGINX + PHP-FPM** *or* **Apache + mod_php**. Inside that section, pick the tab for your OS.

::: tip Not sure which one you installed?
You picked it under [Install Apache 2](#install-apache-2) / [Install NGINX](#install-nginx-recommended) above. If you went with the recommended path, you're on **NGINX + PHP-FPM**.
:::

#### NGINX + PHP-FPM <small>*(recommended)*</small>

:::: tabs

::: tab macOS
```bash
brew services restart php
```
:::

::: tab "Windows PowerShell"
Restart the PHP-FPM / `php-cgi` process you configured (or use the Services console).
:::

::: tab Linux
```bash
sudo systemctl restart php8.3-fpm
```
:::

::::

#### Apache + mod_php

:::: tabs

::: tab macOS
```bash
sudo apachectl -k restart
```
:::

::: tab "Windows PowerShell"
Restart the Apache service from the Services console, or run:

```powershell
Restart-Service -Name Apache2.4
```
:::

::: tab Linux
```bash
sudo systemctl restart apache2
```
:::

::::

Verify the new values are live:

```bash
php -i | grep -E '^(memory_limit|max_execution_time|date.timezone)'
```

CLI `php artisan ...` commands pick up the new settings automatically &mdash; no restart needed.

## 🗄️ Supported Database Servers

Krayin supports two database servers: **MySQL 8.0.32+** **OR** **MariaDB 10.3+**. Use **collation `utf8mb4_unicode_ci`** for proper Unicode / multilingual support.

::: tip Choose ONE database &mdash; not both
Krayin connects to a single database server. Pick either **MySQL** **OR** **MariaDB**.

**Recommended:** MySQL 8.0.32+ &mdash; the default Laravel database with the widest hosting and tooling support.
:::

### Install MySQL 8.0.32 or higher <small>*(Recommended)*</small>

Official downloads: [dev.mysql.com/downloads](https://dev.mysql.com/downloads/)

:::: tabs

::: tab macOS
```bash
brew install mysql
```

Or use the [macOS installer](https://dev.mysql.com/doc/refman/8.0/en/macos-installation.html).
:::

::: tab "Windows PowerShell"
Use the [MySQL Installer for Windows](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html).
:::

::: tab Linux
```bash
sudo apt install mysql-server
```
:::

::::

---

**&mdash; OR &mdash;**

---

### Install MariaDB 10.3 or higher

Official downloads: [mariadb.org/download](https://mariadb.org/download/)

:::: tabs

::: tab macOS
```bash
brew install mariadb
```
:::

::: tab "Windows PowerShell"
Download the MSI installer from [mariadb.org/download](https://mariadb.org/download/).
:::

::: tab Linux
Set up the [MariaDB repository](https://mariadb.org/download/?t=repo-config), then:

```bash
sudo apt install mariadb-server
```
:::

::::
