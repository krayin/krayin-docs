# AGENTS.md — Krayin CRM Docs

Reference for AI agents working in this repository.

## 1. Project Overview

This repo is the **Krayin CRM Developer Documentation** site, built with **VuePress 1.x**. It hosts multiple versioned doc trees (`1.x`, `2.0`, `2.1`, `2.2`, `master`) under [docs/](docs/).

**Active working version: `2.2` only.** Do not modify any other version directory unless explicitly asked.

Live site: https://devdocs.krayincrm.com

## 2. Tech Stack & Scripts

- **VuePress** 1.8.x — config at [docs/.vuepress/config.js](docs/.vuepress/config.js)
- **Plugins:** `@vuepress/pwa`, `copy-code`, `@vuepress/back-to-top`
- **Custom theme:** [docs/.vuepress/theme/](docs/.vuepress/theme/)

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run docs:dev` | Local preview at http://localhost:8080 |
| `npm run docs:build` | Production build |
| `npm run docs:eject` | Eject default theme |

## 3. Workspace Map (v2.2)

Sidebar config: [docs/.vuepress/version-configs/2.2.js](docs/.vuepress/version-configs/2.2.js)
Content root: [docs/2.2/](docs/2.2/)

### Prologue — [docs/2.2/prologue/](docs/2.2/prologue/)
| Sidebar Title | File |
| --- | --- |
| Upgrade Guide | [upgrade-guide.md](docs/2.2/prologue/upgrade-guide.md) |
| Contribution Guide | [contribution-guide.md](docs/2.2/prologue/contribution-guide.md) |

### Introduction — [docs/2.2/introduction/](docs/2.2/introduction/)
| Sidebar Title | File |
| --- | --- |
| Requirements | [requirements.md](docs/2.2/introduction/requirements.md) |
| Installation | [installation.md](docs/2.2/introduction/installation.md) |

### Architecture concepts — [docs/2.2/architecture/](docs/2.2/architecture/)
| Sidebar Title | File |
| --- | --- |
| Packages | [packages.md](docs/2.2/architecture/packages.md) |
| Repository Pattern | [repository-pattern.md](docs/2.2/architecture/repository-pattern.md) |
| Modular Design | [modular-design.md](docs/2.2/architecture/modular-design.md) |

Note: [theme.md](docs/2.2/architecture/theme.md) exists in the folder but is not registered in the sidebar.

### Package Development — [docs/2.2/packages/](docs/2.2/packages/)
| Sidebar Title | File |
| --- | --- |
| Getting Started | [create-package.md](docs/2.2/packages/create-package.md) |
| Admin Menu | [add-menu-in-admin.md](docs/2.2/packages/add-menu-in-admin.md) |
| Assets | [assets.md](docs/2.2/packages/assets.md) |
| Blade Components | [blade-components.md](docs/2.2/packages/blade-components.md) |
| Access Control List | [create-acl.md](docs/2.2/packages/create-acl.md) |
| Models | [create-models.md](docs/2.2/packages/create-models.md) |
| Migrations | [create-migrations.md](docs/2.2/packages/create-migrations.md) |
| Controllers | [controllers.md](docs/2.2/packages/controllers.md) |
| DataGrid | [datagrid.md](docs/2.2/packages/datagrid.md) |
| Layouts | [layouts.md](docs/2.2/packages/layouts.md) |
| Localization | [localization.md](docs/2.2/packages/localization.md) |
| Routes | [routes.md](docs/2.2/packages/routes.md) |
| Repository | [store-data-through-repositories.md](docs/2.2/packages/store-data-through-repositories.md) |
| Validation | [validation.md](docs/2.2/packages/validation.md) |
| Views | [views.md](docs/2.2/packages/views.md) |

### Digging Deeper — [docs/2.2/advanced/](docs/2.2/advanced/)
| Sidebar Title | File |
| --- | --- |
| AI-Powered Lead Generation | [ai-powered-lead-generation.md](docs/2.2/advanced/ai-powered-lead-generation.md) |
| Best Security Practices | [security-practice.md](docs/2.2/advanced/security-practice.md) |
| Data Transfer | [data-transfer.md](docs/2.2/advanced/data-transfer.md) |
| Email Inbound Parse | [email-inbound-parse.md](docs/2.2/advanced/email-inbound-parse.md) |
| Events Listeners | [events.md](docs/2.2/advanced/events.md) |
| Events and Campaigns | [events-and-campaigns.md](docs/2.2/advanced/events-and-campaigns.md) |
| Helpers | [helpers.md](docs/2.2/advanced/helpers.md) |
| Override a Layout | [override-a-layout.md](docs/2.2/advanced/override-a-layout.md) |

### Custom Attributes — [docs/2.2/custom-attributes/](docs/2.2/custom-attributes/)
| Sidebar Title | File |
| --- | --- |
| How to use custom attribute | [uses.md](docs/2.2/custom-attributes/uses.md) |
| Make Model With Custom Attribute | [custom-attribute.md](docs/2.2/custom-attributes/custom-attribute.md) |

### Krayin APIs — [docs/2.2/api/](docs/2.2/api/)
| Sidebar Title | File |
| --- | --- |
| Explore REST API | [getting-started-with-the-api.md](docs/2.2/api/getting-started-with-the-api.md) |

## 4. Conventions

- **Filenames:** `kebab-case.md` (e.g. `email-inbound-parse.md`)
- **Section landing page:** every section folder has a `README.md`
- **Table of contents:** insert `[[TOC]]` near the top of a page to render an auto TOC
- **Headings:** start each page with a single `# Page Title` H1
- **Internal links:** prefer relative markdown links between version-scoped files
- **Assets:** shared images live under [docs/assets/](docs/assets/); reference with absolute `/assets/...` URLs
- **Version scope:** never edit `1.x/`, `2.0/`, `2.1/`, or `master/` while working on a 2.2 task
- **Markdown lint:** maintain consistent indentation; treat `markdown-lint` warnings as blockers

## 5. Adding or Editing a Page (checklist)

1. Identify the target section under [docs/2.2/](docs/2.2/).
2. **Edit existing** → modify the `.md` file in place. **Create new** → add a kebab-case `.md` file in the section folder.
3. If new, register the page in [docs/.vuepress/version-configs/2.2.js](docs/.vuepress/version-configs/2.2.js) inside the matching section's `children` array:
   ```js
   ['<section>/<filename-without-ext>', 'Sidebar Title']
   ```
4. Preview locally: `npm run docs:dev` → open http://localhost:8080.
5. Verify the sidebar entry appears, the page renders, and internal links resolve.
6. Update the **Task Log** below.

## 6. Task Log

Append a row when a new task is assigned. Update Status to `Done` when finished.

| Date | Task | Files touched | Status |
| --- | --- | --- | --- |
| 2026-05-21 | Create AGENTS.md workspace plan for AI agents | `AGENTS.md` | Done |
| 2026-05-21 | Add per-OS install links (macOS, Ubuntu/Debian, Linux, Windows) for Apache, NGINX, PHP, Composer, PHP extensions, MySQL, MariaDB on the Requirements page | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Clarify Apache OR NGINX choice on Requirements: add explicit "choose one" tip, mark NGINX+PHP-FPM as Recommended, and add per-OS PHP-FPM install steps | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Rewrite PHP Configuration section for non-PHP developers: 3-step flow (find `php.ini` via `php --ini`, edit settings, restart), per-OS path table, CLI vs FPM vs Apache note, restart-command table, semicolon-comment warning | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Slim down PHP Configuration section — keep the 3 Krayin overrides only, drop verbose CLI/FPM/Apache explanation, default-path table, editor/Windows tips, and verification command (PHP/FPM defaults cover the rest) | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Clarify Supported Database Servers as MySQL OR MariaDB choice: add "choose one" tip, mark MySQL 8.0.32+ as Recommended, add OR divider between install sections | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Fix Restart table padding — split `<br>`-stacked commands into one row per OS (Stack / OS / Command columns) for clean spacing | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Collapse Restart table back to one row per Stack; use `<br><br>` between OS commands for clear gap without repeating the Stack name | `docs/2.2/introduction/requirements.md` | Done |
| 2026-05-21 | Restructure Installation page into 3 clearly-numbered methods (GUI Installer, Composer CLI [Recommended], Docker) with "choose one" overview tip and OR dividers; relabel old `#### Method 1/2` inside GUI section as Sub-option 1A/1B; demote Shared Hosting to a post-methods deployment scenario | `docs/2.2/introduction/installation.md` | Done |
| 2026-05-21 | Replace vague "Choose the directory" wording in Installation Methods 1 & 2 with a shared "Where to install Krayin" section: per-OS web-root table (NGINX/Apache), permission tip, full NGINX server block + Apache VirtualHost examples with enable/reload commands, and a hosts-file tip. Methods now link to it instead of duplicating | `docs/2.2/introduction/installation.md` | Done |
| 2026-05-22 | Add Laravel-docs-style OS tabs UI to the Requirements and Installation pages: install `vuepress-plugin-tabs` + `vue-tabs-component`, register the `tabs` plugin in [config.js](docs/.vuepress/config.js), wire its default theme via new [docs/.vuepress/styles/index.styl](docs/.vuepress/styles/index.styl); convert every per-OS table to `:::: tabs` / `::: tab` (macOS / Windows PowerShell / Linux); switch the PHP install on the Requirements page to the `php.new` one-liners per OS and drop the standalone Composer install table since `php.new` bundles Composer | `package.json`, `docs/.vuepress/config.js`, `docs/.vuepress/styles/index.styl`, `docs/2.2/introduction/requirements.md`, `docs/2.2/introduction/installation.md` | Done |
