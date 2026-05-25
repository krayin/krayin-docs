# Agent Skills

[**krayin/agent-skills**](https://github.com/krayin/agent-skills) is a small, official package of *AI agent skills* &mdash; reusable bundles of Krayin-specific context that you install into Claude Code, Cursor, or any other compatible AI coding assistant. Once installed, the agent automatically picks the right skill when you're working on the matching task: scaffolding a package, writing a Pest test, debugging a migration.

Skills don't replace this documentation &mdash; they give the agent enough Krayin-aware context to *follow* the conventions documented here without you having to paste them into every prompt.

## 🧩 What you get

| Skill | Activates when... | Covers |
| --- | --- | --- |
| **`crm-package-development`** | You're creating or modifying CRM packages &mdash; migrations, models, repositories, routes, controllers, views, configs, menus, ACL, system configuration. | The full package-development surface: directory layout, contracts + proxies, repository pattern, admin menus, blade components, ACL wiring. |
| **`pest-testing`** | You're writing tests, adding assertions, debugging test failures, or mentioning *test / spec / TDD / coverage / expects / assertion*. | Pest PHP idioms tuned for Krayin &mdash; feature vs unit tests, datasets, mocking, fixtures. |

The skills are open-source &mdash; read what they actually tell the agent at the [agent-skills repo](https://github.com/krayin/agent-skills).

## ⌨️ 1. Install the skills

The installer is run via `npx skills` from the [skills](https://github.com/anthropics/skills) tool. From the parent directory of your Krayin checkout:

```bash
# Clone the skills repo locally so the installer can read it.
git clone https://github.com/krayin/agent-skills.git

# Install every skill into your default agent.
npx skills add ./agent-skills
```

That installs both skills (`crm-package-development` and `pest-testing`) into the agent the installer detects.

### Pick a specific agent

If you have more than one AI assistant configured, target it explicitly:

```bash
npx skills add ./agent-skills -a claude-code
npx skills add ./agent-skills -a cursor
```

### Install one skill at a time

If you only do package work (no Pest tests) or vice versa, skip the one you don't need:

```bash
npx skills add ./agent-skills --skill "crm-package-development"
npx skills add ./agent-skills --skill "pest-testing"
```

::: tip Keep installed skills focused
Skills consume context tokens every time the agent decides one is relevant. Installing only the skills you actually use keeps the agent's context window lean &mdash; faster responses, cheaper runs.
:::

## 🧪 2. Verify

Open your AI assistant inside the Krayin project and ask it to do something the skill should activate on. For `crm-package-development`:

```text
Create a new package called Webkul/Example with a service provider.
```

You should see the agent reference Krayin's package-development conventions automatically &mdash; correct `packages/Webkul/Example/src/Providers/ExampleServiceProvider.php` layout, the right service-provider boilerplate, the right composer autoload entry.

For `pest-testing`:

```text
Write a Pest feature test for the Lead create endpoint.
```

The agent should reach for Pest's `it(...)` / `expect(...)` style and Krayin-appropriate setup (database refresh, admin auth helper).

If the agent doesn't seem to know about Krayin conventions, the skill didn't install correctly &mdash; re-run `npx skills add` and check the agent's skills/extensions panel for the new entries.

## 🛠️ Supported assistants

The skills are designed for any tool that supports the *skills* protocol. Known-working integrations:

- **Claude Code** &mdash; `npx skills add ./agent-skills -a claude-code`
- **Cursor** &mdash; `npx skills add ./agent-skills -a cursor`
- **GitHub Copilot** and other skills-aware assistants &mdash; install via the same command without `-a` and the installer auto-detects.

## 🔄 Keep them up to date

The skills evolve as Krayin's conventions evolve &mdash; pull and re-install periodically:

```bash
cd agent-skills
git pull
npx skills add ./agent-skills
```

## 📝 Next steps

- [Requirements](./requirements.md) &mdash; system prerequisites before you install Krayin itself.
- [Installation](./installation.md) &mdash; install Krayin (the CRM).
- [Package Development](../packages/create-package.md) &mdash; the conventions the `crm-package-development` skill teaches the agent.
