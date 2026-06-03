---
title: Krayin CRM for Agents
description: Instructions for AI coding agents helping a developer start a new Krayin CRM application.
sidebar: false
prev: false
next: false
---

# Krayin CRM for Agents

This page is for AI coding agents that are helping a developer start a new Krayin CRM application.

## How to Proceed

- First, check whether the current directory already contains a Krayin CRM application.
- If it does, skip installation and move straight to the user's requested task.
- If it does not, verify that `php`, `composer`, and `node` are available, and that a MySQL-compatible database server is reachable.
- If any of them are missing, install them with `php.new` (for PHP and Composer) using the correct platform command for the user's operating system.
- Then, confirm whether a JavaScript package manager is available.

## Prerequisites

Run quick version checks for:

- `php -v`
- `composer -V`
- `node -v`
- `npm -v`
- `mysql --version` (or `mariadb --version`)

Krayin requires PHP `8.3+`, Composer `2.x`, Node `20.x+`, and MySQL `8.0+` (or MariaDB `10.3+`).

If `PHP` or `Composer` is missing, use `php.new` to install them before continuing.

If `node` and `npm` are missing, ask the user to install Node 20+ from [nodejs.org](https://nodejs.org/) or via their package manager before continuing &mdash; Krayin's admin assets are built with Vite and need Node at install time.

If a database server is unreachable, ask the user to install and start MySQL or MariaDB, then create an empty database for the install before continuing.

## Installing with php.new

If `php` or `composer` is missing, use `php.new` to install them.

- macOS:

```shell
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.3)"
```

- Windows PowerShell:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.3'))
```

- Linux:

```shell
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.3)"
```

After running one of these commands, tell the user to restart their terminal session before continuing. If the agent needs the restarted shell to pick up the new tools, it should tell the user to rerun the copied prompt after reopening the terminal.

## Create the Application

Create the new application with sensible Krayin defaults.

```shell
composer create-project krayin/laravel-crm example-crm
cd example-crm
php artisan krayin-crm:install
```

If the user has not specified a project name, default to `krayin-crm`.

The `krayin-crm:install` command writes `.env`, creates the database schema, seeds default data, and creates the admin user. It will prompt for:

- Application name
- Application URL (default: `http://localhost:8000`)
- Default application locale (default: `en`)
- Default currency (default: `USD`)
- Database connection (default: `mysql`)
- Database host (default: `127.0.0.1`)
- Database name
- Database username
- Database password
- Admin user name
- Admin user email
- Admin user password

Ask the user **only** for the database credentials and the admin user details &mdash; everything else can take the default unless they say otherwise.

Krayin 2.2 ships agent skills inside the repo (`AGENTS.md` at the root plus `.claude/skills/`, `.cursor/`, `.codex/`, `.kilocode/`). Load them immediately for the session by reading `AGENTS.md`. Do not ask the user to restart the session.

## After Creation

Once the application has been created:

- Enter the new project directory if you are not already there.
- Start the development server with `php artisan serve` if you can continue working while it runs, otherwise tell the user to open a second terminal and run it themselves.
- Tell the user the application will be available at `http://localhost:8000`.
- Tell the user the admin panel is at `http://localhost:8000/admin` and they can sign in with the admin email/password they entered during the installer.
- Explain how to keep working in the project.

Recommended next steps:

```shell
cd example-crm
php artisan serve
```

The agent should avoid getting blocked by a long-running development server. If it can manage the process in the background, that is fine; otherwise it should ask the user to keep `php artisan serve` running in a separate terminal while it continues with the rest of the setup.

Then tell the user:

- Where the application is running
- How to open the admin panel locally
- That the in-repo agent skills are now active for this project
- What to do if the terminal needs to be restarted before continuing
- That they can simply continue chatting to keep building the application

## Guidance

- Ask only for decisions that materially affect the application.
- Prefer Krayin defaults when the user has not specified a preference.
- Keep the setup moving unless you are blocked by a missing dependency or an explicit choice.
- Be clear and brief when you need the user to decide between options.

## Example Outcome

When everything is ready, the agent should leave the user with a Krayin CRM application they can open locally at `http://localhost:8000`, an admin login at `http://localhost:8000/admin`, a clear command to keep development running, and a short explanation of any remaining setup choices.

## Shipping To Production

When the user is ready to share their application with the world, point them at [Best Security Practices](/2.2/digging-deeper/security-practice.html) for production hardening, and the [Upgrade Guide](/2.2/prologue/upgrade-guide.html) for version-to-version upgrades.

Krayin does not currently ship a managed cloud platform &mdash; any Laravel-compatible host (DigitalOcean, AWS, Forge, Vapor, Ploi, traditional VPS, ...) works fine. The full developer documentation lives at [https://devdocs.krayincrm.com/](https://devdocs.krayincrm.com/).
