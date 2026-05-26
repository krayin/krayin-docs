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

## 4a. Doc Style Guide (apply this to every page)

When the user gives you a page name with no further detail (e.g. *"work on the contributing page"*, *"clean up the events page"*), apply these conventions automatically &mdash; they capture the patterns we've already iterated on for `requirements.md`, `installation.md`, and `architecture/overview.md`.

### Heading icons (mandatory on every H2)

Every `## H2` heading on a user-facing page must start with a single emoji icon. Don't put icons on H3 or deeper headings &mdash; only H2. Pick an icon that matches the topic; the table below is the project's recurring palette &mdash; reuse from here first before inventing new ones:

| Topic | Icon |
| --- | --- |
| Server / web server config | 🖥️ |
| File / folder / install path | 📁 |
| Database | 🗄️ |
| Settings / configuration | ⚙️ |
| Extensions / modules / packages | 🧩 |
| Code / repository / data layer | 🗂️ |
| Tools / tech stack | 🛠️ |
| Architecture / building blocks | 🧱 |
| GUI / wizard / browser-based flow | 🪄 |
| Command-line / CLI workflow | ⌨️ |
| Docker / containers | 🐳 |
| Cloud / shared hosting / deployment | ☁️ |
| Events / triggers / automation | ⚡ |
| Security / permissions / ACL | 🔒 |
| API / integrations | 🔌 |
| Notes / docs / contribution | 📝 |
| Localisation / translations | 🌐 |
| Testing / quality | 🧪 |

### Em-dash in headings

In any `## H2` heading, use the literal `—` character &mdash; **never** `&mdash;`. VuePress's sidebar pulls H2 text raw and the HTML entity won't decode there, so it shows literal `&mdash;` in the menu. `&mdash;` is fine in body prose.

### OS-neutral wording in prose

Outside the per-OS `:::: tabs` blocks, use OS-neutral terms so Windows readers feel addressed too:

- **Don't say:** "terminal", "shell", "command prompt", "PowerShell window"
- **Do say:** "command line"
- When you specifically need to name the app, give all three: *"(Use Terminal on macOS / Linux, or PowerShell on Windows.)"*
- See [feedback memory](#) on this if you have memory access.

### Per-OS instructions = `:::: tabs` (the tabs plugin)

The `vuepress-plugin-tabs` plugin is wired in [docs/.vuepress/config.js](docs/.vuepress/config.js) and styled Monokai in [docs/.vuepress/styles/index.styl](docs/.vuepress/styles/index.styl). Use this exact shape for any per-OS instruction:

```md
:::: tabs

::: tab macOS
content for macOS
:::

::: tab "Windows PowerShell"
content for Windows
:::

::: tab Linux
content for Linux (Ubuntu, with apt)
:::

::::
```

- Always three tabs in this order: **macOS** → **Windows PowerShell** → **Linux**.
- Tab label `Windows PowerShell` is quoted because it contains a space.
- **Linux tab defaults to Ubuntu** with `apt`-based commands. Do **not** add Debian / Fedora / RHEL / `dnf` variants unless the user explicitly asks. One distro per tab keeps it readable.
- **Don't nest tabs inside `::: tip` / `::: warning`** &mdash; the 3-colon `::: tab` will prematurely close the 3-colon `::: tip`. Either pull the tabs out of the tip, or convert the tip to an `####` subsection.

### Page structure formulas

- **TOC at the top:** every page starts with `# Page Title` then a blank line then `[[TOC]]`.
- **Lead with what's required, not background.** If a section's settings are mandatory to install Krayin, say so in the first sentence (*"These three overrides are required &mdash; without them the installer fails on memory limits"*). Don't bury it in a paragraph below.
- **Numbered step-by-step flows** for any multi-step procedure (install → restart → verify). Use `### 1. Step title` / `### 2. ...` / `### 3. ...` H3s and start each step's body with a verb (*Open*, *Install*, *Run*, *Restart*).
- **"Things to know" intros:** when a section needs framing before the action, lead with a short numbered list of 3 things, each starting with **bold verb-first** wording (see the "Where to install Krayin" pattern).
- **Two-column tables for Setting / Why** when listing config values, instead of bullet lists with embedded explanations.
- **Verification command at the end** of every install-or-config step (`php -v`, `composer --version`, `php -i | grep ...`, `php -m | grep ...`).

### Containers

- `::: tip Title` for non-critical guidance (hosts file, optional shortcuts, definitions).
- `::: warning Title` for things that will silently fail if ignored (uncommenting `;` lines, etc.).
- Use `::: tip What is X?` to explain jargon (e.g. *document root*) the first time it appears on a page &mdash; use plain-English analogies.

### Cross-linking

- When a step depends on something explained elsewhere on the same page, add an in-page anchor link: `[Configure your web server to serve `public/`](#configure-your-web-server-to-serve-public)`.
- When you mention a section by name in prose, link it &mdash; don't make the reader scroll to find it.

### Code blocks

- Always use a language label after the opening fence (` ```bash`, ` ```powershell`, ` ```ini`, ` ```nginx`, ` ```apache`, ` ```yaml`).
- Site-wide Prism theme is **Monokai (okaidia)** via [docs/.vuepress/theme/styles/code.styl](docs/.vuepress/theme/styles/code.styl). Don't override.
- Tab panels use Monokai bg (`#272822`); keep code blocks **without** inline `style` attributes.

### PHP code style (Pint / PSR-12)

Krayin's PHP code is formatted by [Laravel Pint](https://laravel.com/docs/pint). Doc samples must match what Pint would emit so readers can copy-paste without their auto-formatter rewriting it back:

- **Single space before `=>`** in arrays. **Never** align with extra spaces.

  ```php
  // ✅ Pint-compliant
  return [
      'hot_file' => 'custom-package-vite.hot',
      'build_directory' => 'custom-package/build',
      'package_assets_directory' => 'src/Resources/assets',
  ];

  // ❌ Aligned (will get reformatted on save)
  return [
      'hot_file'                 => 'custom-package-vite.hot',
      'build_directory'          => 'custom-package/build',
      'package_assets_directory' => 'src/Resources/assets',
  ];
  ```
- 4-space indent, no tabs.
- `: void` return-type hints on `boot()` / `register()` and other void methods.
- Constructor property promotion (`protected SomeClass $foo`) instead of separate property declarations.
- No boilerplate phpdoc that only restates the type hint (`@return void` on a `: void` method).

### Heading anchor scroll

The admin theme has a sticky header (~60px). Anchor-link clicks need a `scroll-margin-top` offset on headings so the heading appears *below* the sticky bar instead of being hidden behind it. Already wired in [docs/.vuepress/styles/index.styl](docs/.vuepress/styles/index.styl) &mdash; don't override.

### Heading slugs (emoji safety)

`markdown-it-anchor` (heading IDs) and `markdown-it-table-of-contents` (the `[[TOC]]` plugin) use **different** default slugify implementations on Unicode. Without a shared slugify, the TOC keeps emojis in hrefs (`#🔌-foo`) while the anchor strips them (`id="foo"`) &mdash; the click then finds no target and the page doesn't scroll.

A shared slugify is already wired in [docs/.vuepress/config.js](docs/.vuepress/config.js) under `markdown.slugify`. It strips Extended Pictographics + VS-16 + ZWJ, then runs the rest of VuePress's default slugify rules. **Don't override it per-page** and don't ship a custom slugify in a new plugin without making sure both sides still agree.

### Don't introduce e-commerce / Bagisto framing

Krayin is a **CRM** &mdash; admin-focused, no public storefront. Drop language like "Customer Frontend / Administrative Backend", "store administration", "checkout", "catalog". Use CRM terms (Leads, Contacts, Organizations, Quotes, Activities, Mail).

## 5. Adding or Editing a Page (checklist)

1. **Read this AGENTS.md file first** &mdash; especially section 4a (Doc Style Guide). Apply every convention there by default.
2. Identify the target section under [docs/2.2/](docs/2.2/).
3. **Edit existing** → modify the `.md` file in place. **Create new** → add a kebab-case `.md` file in the section folder.
4. If new, register the page in [docs/.vuepress/version-configs/2.2.js](docs/.vuepress/version-configs/2.2.js) inside the matching section's `children` array:
   ```js
   ['<section>/<filename-without-ext>', 'Sidebar Title']
   ```
5. **Apply heading icons** on all H2s, use literal `—` (not `&mdash;`) in H2s, and convert any per-OS prose into `:::: tabs` blocks with macOS / Windows PowerShell / Linux (Ubuntu default).
6. Preview locally: `npm run docs:dev` → open http://localhost:8080.
7. Verify the sidebar entry appears, the page renders, internal anchor links resolve, and tabs switch without scroll jumps.
8. Update the **Task Log** below.

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
| 2026-05-25 | Restructure Architecture concepts: merge Repository Pattern + Modular Design into a single new `overview.md` (with sidebar entry "Overview"), trim section `README.md` to a stub, delete the now-merged source files, update sidebar to `Overview / Packages` only; add H2 icons to overview and earlier pages; site-wide Prism theme switched to Monokai (okaidia) | `docs/2.2/architecture/overview.md` (new), `docs/2.2/architecture/README.md`, `docs/.vuepress/version-configs/2.2.js`, `docs/.vuepress/theme/styles/code.styl`, `docs/2.2/introduction/requirements.md`, `docs/2.2/introduction/installation.md` | Done |
| 2026-05-25 | Add section 4a "Doc Style Guide" to AGENTS.md capturing every recurring convention (H2 icon palette, OS-neutral prose, `:::: tabs` shape, Ubuntu-default for Linux, em-dash rule in headings, numbered step flow, container nesting caveat, CRM-not-e-commerce framing) so future page work is repeatable from just a page name; update checklist in section 5 to require reading 4a first | `AGENTS.md` | Done |
| 2026-05-25 | Rewrite the entire Package Development section per AGENTS §4a: 15 pages + section README. Each page now has H2 icons, literal em-dashes in headings, numbered step flows with verb-first sub-headings, OS-neutral prose, verify section, next-steps cross-links. Many bug fixes (typos, missing `class` keyword, wrong namespaces, broken anchor links, outdated traits/syntax). Section README replaced from folder-tree dump to a proper landing page with the "build-from-scratch" learning order. Tutorial example renamed from `Webkul/Category` to `Webkul/Example` across all pages for consistency | `docs/2.2/packages/*.md` (all 16 files) | Done |
| 2026-05-25 | Add Pint/PSR-12 PHP code-style rule to AGENTS §4a (no aligned `=>`, single space, `: void` return types, constructor property promotion, no boilerplate phpdoc); strip every aligned `=>` from PHP/Blade fenced blocks and aligned `:` from JSON/JS blocks across the Package Development pages | `AGENTS.md`, `docs/2.2/packages/*.md` | Done |
| 2026-05-25 | Add `scroll-margin-top: 80px` to all heading levels in [docs/.vuepress/styles/index.styl](docs/.vuepress/styles/index.styl) so in-page anchor clicks land below the ~60px sticky header instead of behind it; document the convention in AGENTS §4a | `docs/.vuepress/styles/index.styl`, `AGENTS.md` | Done |
| 2026-05-25 | Wire a shared `markdown.slugify` in [docs/.vuepress/config.js](docs/.vuepress/config.js) that strips emoji + VS-16 + ZWJ before slugifying, so `markdown-it-anchor` heading IDs and `markdown-it-table-of-contents` TOC hrefs agree on Unicode. Without this, TOC anchors for emoji-prefixed H2s (`#🔌-foo`) didn't match heading IDs (`id="foo"`) and clicks did not scroll. Documented in AGENTS §4a "Heading slugs (emoji safety)" | `docs/.vuepress/config.js`, `AGENTS.md` | Done |
