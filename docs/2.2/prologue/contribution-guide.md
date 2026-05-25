# Contribution Guide

Krayin is open source and runs on community contributions. This page covers everything you need to send your first patch &mdash; how to report bugs, where to target your PR, how to format code, and how to disclose security issues responsibly.

## 🐛 Bug Reports

We *prefer pull requests over bug reports*. If you can reproduce a bug, sending a failing test or a fix alongside the report turns a "thanks, we'll look into it" into a one-day merge.

A useful bug report includes:

- A clear, specific title (`Lead.create fails when value is null`, not `bug in leads`).
- A description with the exact steps to reproduce.
- The expected vs. actual behaviour.
- A minimal code sample, stack trace, or screenshot.
- Your environment &mdash; PHP version, Krayin version, database, OS.

File against the right repo (see [Projects to contribute to](#-projects-to-contribute-to)).

## 🧩 Projects to contribute to

Krayin is split across several repositories &mdash; pick the one that owns the code you're changing.

| Repository | What's in it |
| --- | --- |
| [krayin/laravel-crm](https://github.com/krayin/laravel-crm) | The CRM itself &mdash; every core package under `packages/Webkul/`. Most contributions go here. |
| [krayin/krayin-docs](https://github.com/krayin/krayin-docs) | This documentation site. |
| [krayin/rest-api](https://github.com/krayin/rest-api) | The optional Sanctum + L5-Swagger REST API package. |
| [krayin/agent-skills](https://github.com/krayin/agent-skills) | AI agent skills (see [Agent Skills](../introduction/skills.md)). |

## ✨ Feature requests

We welcome proposals for new features &mdash; the best ones come paired with at least a sketch of the implementation. Open an issue first to align on scope and design *before* writing a large PR; landing a 2,000-line PR is harder than landing the same change after a 10-minute design discussion.

## 🌿 Branch selection

Pick the right base branch *before* you start work &mdash; rebasing later is harder than starting in the right place.

| Type of change | Target branch | Why |
| --- | --- | --- |
| **Bug fix** | The current `master` branch. | Bug fixes land in the upcoming release and are backported only when necessary. |
| **Critical bug fix** | The latest stable release branch (e.g. `2.2`). | So the fix can ship as a patch release before the next minor. |
| **Feature** | `master`. | Features always go to the upcoming release, never to a stable branch. |
| **Breaking change** | `master`. | Stable branches never accept breaking changes. |
| **Documentation** | `master` on [krayin/krayin-docs](https://github.com/krayin/krayin-docs). | The docs deploy from `master`. |

When in doubt, target `master` and the maintainers will guide you on whether to retarget the PR.

## 🎨 Tailwind class ordering

When editing Blade files, keep Tailwind utility classes in the order produced by the official Prettier plugin (the same order Tailwind itself documents). This keeps diffs readable and avoids merge churn caused by class re-ordering.

- Reference: [Automatic class sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
- VS Code helper: the **Tailwind Raw Reorder** extension auto-orders classes on save.

## 🧹 Pint formatting

Krayin uses [Laravel Pint](https://laravel.com/docs/11.x/pint) for PHP formatting. Run it before sending a PR &mdash; CI will reject anything Pint would change.

From the project root:

```bash
vendor/bin/pint
```

To only check (without writing changes):

```bash
vendor/bin/pint --test
```

Pint follows PSR-12 plus Krayin-specific conventions baked into `pint.json` at the repo root. The key one to remember when hand-writing PHP: **single space before `=>`, no aligned `=>`**.

```php
// ✅ Pint-formatted
$config = [
    'name' => 'Example',
    'route' => 'admin.examples.index',
    'sort' => 6,
];
```

```php
// ❌ Aligned `=>` &mdash; Pint will rewrite this
$config = [
    'name'  => 'Example',
    'route' => 'admin.examples.index',
    'sort'  => 6,
];
```

## 🔒 Security vulnerabilities

If you find a security issue, **do not file a public GitHub issue** &mdash; that exposes the vulnerability to attackers before a fix is available. Use one of the two private channels below.

### Preferred &mdash; raise a UVdesk ticket

Open a ticket at [webkul.uvdesk.com/en/](https://webkul.uvdesk.com/en/). UVdesk gives every report a tracked ticket ID, routes it to the security triage team, and keeps the full conversation history in one place &mdash; that's the fastest path to acknowledgement.

When raising the ticket include:

| Field | What to put in it |
| --- | --- |
| **Subject** | `[Security] <short summary>` &mdash; e.g. `[Security] Stored XSS in lead notes`. |
| **Product** | Pick *Krayin CRM*. |
| **Severity** | Your best guess &mdash; Critical / High / Medium / Low. The triage team adjusts as needed. |
| **Krayin version** | The exact version you reproduced on (e.g. `2.2.3`). |
| **Description** | What the vulnerability is and what an attacker could achieve. |
| **Steps to reproduce** | Minimal click-by-click or request-by-request reproduction. |
| **Proof of concept** | Payload, screenshot, or short video. |
| **Suggested mitigation** | Optional, but speeds up the fix. |

Attach files (PoC scripts, HTTP captures, screenshots) directly to the ticket rather than linking to external storage.

### What happens next

- **Acknowledgement** within a few business days, with the UVdesk ticket ID for tracking.
- **Triage and severity assessment** &mdash; the security team confirms the issue and assigns a CVSS-style severity.
- **Coordinated fix and disclosure** &mdash; we ship a patch, then publish a security advisory crediting the reporter (unless you ask to stay anonymous).

See [Best Security Practices](../digging-deeper/security-practice.md) for the production-hardening guidance every Krayin install should follow.

## 📐 Coding style

Krayin follows:

- **[PSR-12](https://www.php-fig.org/psr/psr-12/)** &mdash; the extended coding-style guide.
- **[PSR-4](https://www.php-fig.org/psr/psr-4/)** &mdash; the autoloading standard.

Pint enforces both automatically &mdash; if Pint passes, your style passes.

In addition, default to modern PHP 8.3 idioms:

- Constructor property promotion.
- `: void` / `: string` return types.
- Single-quoted strings unless you're interpolating.
- Readonly properties where the field never changes after construction.

## 📝 PHPDoc

PHPDoc blocks are required on public methods that aren't fully described by their signature. Krayin's house style:

```php
/**
 * Register a service with CoreServiceProvider.
 */
protected function registerFacades(string|array $loader, \Closure|string|null $concrete = null, bool $shared = false): void
{
    //
}
```

Skip `@param` and `@return` lines when the parameter and return types are already in the signature &mdash; they're redundant noise. Only add them when you need to clarify what a parameter *means*, not what its type is.

## 🤖 AI assistants

If you're using an AI coding assistant (Claude Code, Cursor, GitHub Copilot, ...), point it at Krayin's context resources first so its suggestions follow these conventions automatically:

- [Agent Skills](../introduction/skills.md) &mdash; richer, on-demand context for Claude Code and Cursor.
- [AI Context Files](../introduction/ai-context.md) &mdash; `llms.txt` / `llms-full.txt` for any assistant that can read project files.

Suggestions that don't match Krayin's conventions are still your responsibility to fix before opening a PR.

## 🧪 Verify before opening a PR

Run all of these locally before pushing:

```bash
vendor/bin/pint --test    # formatting check
php artisan test          # full test suite
```

If you're touching the admin UI, also exercise the feature in the browser &mdash; type-checks and unit tests verify code correctness, not feature correctness.

## 📝 Next steps

- [Upgrade Guide](./upgrade-guide.md) &mdash; the cross-version compatibility shape your PR has to fit into.
- [Architecture Overview](../architecture/overview.md) &mdash; the conventions your PR should match.
- [Package Development](../packages/create-package.md) &mdash; if your contribution is a new package, start here.
