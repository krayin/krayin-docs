# Agent Skills

Krayin **2.2 ships AI agent skills as part of the core repo**. The moment you clone `krayin/laravel-crm`, your AI coding assistant &mdash; Claude Code, Cursor, Codex, GitHub Copilot, or Kilo Code &mdash; picks up Krayin-specific context automatically. No separate install, no `npx` command, no extra repository.

Skills don't replace this documentation. They give the agent enough Krayin-aware context to *follow* the conventions documented here without you having to paste them into every prompt.

> Before 2.2 these skills lived in the standalone [krayin/agent-skills](https://github.com/krayin/agent-skills) repo and were installed via `npx skills add`. That flow still works, but core Krayin 2.2 onwards ships the same skills in-tree &mdash; preferring the in-repo version is the recommended path.

## 🧩 What you get

Two skills bundled inside Krayin 2.2's source tree:

| Skill | Activates when... | Covers |
| --- | --- | --- |
| **`crm-package-development`** | You're creating or modifying CRM packages &mdash; migrations, models, repositories, routes, controllers, views, configs, menus, ACL, system configuration. | The full package-development surface: directory layout, Concord contracts + proxies, the Prettus repository pattern, admin menus, Blade Components, ACL wiring. |
| **`pest-testing`** | You're writing tests, adding assertions, debugging test failures, or mentioning *test / spec / TDD / coverage / expects / assertion*. | Pest PHP idioms tuned for Krayin &mdash; feature vs. unit tests, datasets, mocking, fixtures. |

Each skill is a Markdown file under the per-tool config directory (`.claude/skills/`, `.cursor/`, `.codex/`, `.kilocode/`). The top-level [`AGENTS.md`](https://github.com/krayin/laravel-crm/blob/2.2/AGENTS.md) at the repo root is the entry point that every AI tool reads to discover the skills.

## 🛠️ Supported AI tools

Any AI assistant that respects the standard `AGENTS.md` convention works out of the box. Confirmed integrations:

| Tool | How it picks up the skills |
| --- | --- |
| **Claude Code** | Reads `.claude/skills/` automatically on session start. |
| **Cursor** | Reads `.cursor/skills/` + `AGENTS.md`. |
| **Codex (OpenAI)** | Reads `.codex/skills/` and `AGENTS.md`. |
| **GitHub Copilot** | Reads `.github/skills/` and `AGENTS.md`. |
| **Kilo Code** | Reads `.kilocode/skills/` and `AGENTS.md` |

If your tool reads `AGENTS.md` or one of the dot-directories above, you're set &mdash; no per-tool configuration on your side.

## ⌨️ 1. Clone Krayin 2.2

That's it for setup. The skills are part of the source tree:

```bash
git clone --branch 2.2 https://github.com/krayin/laravel-crm.git
cd laravel-crm
```

Inside, you'll find:

```text
laravel-crm/
├── AGENTS.md              # entry point — every AI tool reads this
├── .ai/                   # generic AI rules
├── .claude/skills/        # Claude Code skills
├── .codex/                # Codex rules
├── .cursor/               # Cursor rules
├── .kilocode/             # Kilo Code rules
├── bin/
│   └── validate-skills.sh # sanity-check helper
└── packages/Webkul/...
```

Open the directory in your AI-enabled IDE and the relevant skill activates the next time you ask a Krayin-specific question.

## 🧪 2. Verify

### A. Run the bundled validator

The repo ships a shell script that checks every skill file is well-formed:

```bash
bash bin/validate-skills.sh
```

A clean exit (no errors) means the skill files are wired correctly.

### B. Ask the agent something Krayin-specific

Open your AI assistant inside the project and try:

```text
Create a new package called Webkul/Example with a service provider.
```

You should see the agent automatically:

- Place files under `packages/Webkul/Example/src/`.
- Generate a three-part Concord model (Contract + Eloquent class + Proxy).
- Extend `Webkul\Core\Eloquent\Repository` for the repository class, with `model()` returning the Contract FQCN.
- Register the service provider in `bootstrap/providers.php` and the `ModuleServiceProvider` in `config/concord.php`.

For `pest-testing`:

```text
Write a Pest feature test for the Lead create endpoint.
```

The agent should reach for Pest's `it(...)` / `expect(...)` style and Krayin-appropriate setup (`RefreshDatabase`, admin auth helper, repository assertions).

If the suggestions look like generic Laravel (flat `app/` classes, no Contract/Proxy, no Concord registration), your tool isn't reading the in-repo skills &mdash; double-check that you opened the project at the *repo root* (not a sub-directory), and that `AGENTS.md` is present.

## 🔄 Keep the skills up to date

Because the skills live inside the Krayin source tree, **upgrading Krayin upgrades the skills**. Pull the latest 2.2 and your AI tool starts using the new conventions immediately:

```bash
git pull origin 2.2
bash bin/validate-skills.sh
```

If you maintain a long-lived fork of Krayin, periodically merge upstream so your AI tool isn't suggesting outdated patterns.

## 💡 Tips

- **Skills are per-project, not per-tool.** Cloning Krayin gives the skills to every AI assistant that supports `AGENTS.md` &mdash; you don't need to install or configure each one separately.
- **Pair with [AI Context Files](./ai-context.md).** Skills give Claude Code / Cursor / Codex on-demand, deeply-scoped context. The `llms.txt` companion file is for tools that don't yet read `AGENTS.md` (ChatGPT web, in-house RAG, older Copilot setups).
- **The standalone [krayin/agent-skills](https://github.com/krayin/agent-skills) repo still exists** for projects on older Krayin versions or developers who want the skills in a fresh project. The in-repo version is the source of truth from 2.2 onwards.

## 📝 Next steps

- [AI Context Files](./ai-context.md) &mdash; `llms.txt` / `llms-full.txt` for AI tools that don't read `AGENTS.md`.
- [Requirements](./requirements.md) &mdash; system prerequisites before you install Krayin itself.
- [Installation](./installation.md) &mdash; install Krayin (the CRM).
- [Package Development](../packages/create-package.md) &mdash; the conventions the `crm-package-development` skill teaches your agent.
