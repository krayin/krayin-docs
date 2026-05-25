# AI Context Files (llms.txt)

Krayin publishes two **AI context files** at the root of this documentation site, following the [llmstxt.org](https://llmstxt.org/) convention. Drop them into your project, point your AI coding assistant at them, and the assistant will produce code that follows Krayin's conventions out of the box &mdash; no more pasting architecture explanations into every prompt.

The files are companions to the [Agent Skills](./skills.md) bundle. Agent Skills are richer (full skill files designed to load on demand in Claude Code / Cursor); the `llms.txt` files are simpler &mdash; plain-text context that *any* AI tool can read, whether or not it supports the skills protocol.

## 🧩 What you get

| File | URL | Use it when... |
| --- | --- | --- |
| **`llms.txt`** | [devdocs.krayincrm.com/llms.txt](https://devdocs.krayincrm.com/llms.txt) | You want a curated index of Krayin's documentation pages, suitable for AI tools that auto-fetch linked content. |
| **`llms-full.txt`** | [devdocs.krayincrm.com/llms-full.txt](https://devdocs.krayincrm.com/llms-full.txt) | You want the complete architectural reference inline &mdash; tech stack, package anatomy, Concord model wiring, repository pattern, routes, events, custom attributes, REST API. Drop it directly into the AI's context. |

Start with `llms.txt`. Reach for `llms-full.txt` once you're doing serious package work or have an assistant with a large context window.

## 🛠️ Supported tools

Any AI coding assistant that can read project files or accept external context works:

| Tool | How it picks the file up |
| --- | --- |
| **GitHub Copilot** | Auto-detects `llms.txt` / `llms-full.txt` in the project root. |
| **Cursor** | Reference it explicitly: `@Docs llms.txt` in chat. |
| **Claude Code** | Read it on demand, or pin it into the workspace context. |
| **ChatGPT / Claude.ai** | Paste the URL or upload the file. |
| **Custom integrations / RAG** | Ingest the file like any other Markdown source. |

For deeper Krayin-awareness in Claude Code or Cursor specifically, also install the [Agent Skills](./skills.md) bundle &mdash; the skills file system is richer than a single text blob.

## ⌨️ 1. Add the files to your project

From the Krayin project root:

```bash
curl -O https://devdocs.krayincrm.com/llms.txt
curl -O https://devdocs.krayincrm.com/llms-full.txt
```

Your project layout becomes:

```text
your-krayin-project/
├── llms.txt
├── llms-full.txt
├── app/
├── bootstrap/
├── packages/
└── ...
```

That's it for Copilot &mdash; it finds the files automatically.

### For a custom package

If you're working primarily inside one of your own packages, drop the files at the package root so the assistant picks them up while you're focused there:

```text
packages/Webkul/Example/
├── llms.txt
├── llms-full.txt
├── composer.json
└── src/
    └── ...
```

## ⚡ 2. Tool-specific setup

### Cursor

Reference the file explicitly in chat:

```text
@Docs llms.txt
```

Cursor reads the linked file and uses it as context for the rest of the conversation. See the [Cursor docs](https://docs.cursor.com/) for the full `@Docs` directive.

### GitHub Copilot

No setup required &mdash; once the file is in your project root or package root, Copilot auto-detects it and uses it as additional context for completions.

### ChatGPT / Claude.ai (web UI)

Either paste the canonical URL into the conversation and ask the assistant to read it, or download the file and attach it as a file upload.

### Claude Code (CLI / IDE extension)

Drop the file in the project root and reference it at the start of your conversation:

```text
Read llms-full.txt and use it as architectural context for this session.
```

For a richer, on-demand context, prefer [Agent Skills](./skills.md) &mdash; the skills system lazily loads only the bits relevant to the current task.

## 🧪 3. Verify

Open your AI assistant inside the Krayin project and ask it for something that should reflect Krayin conventions:

```text
Scaffold a new package called Webkul/Example with a service provider,
a Concord-registered model, and a repository.
```

The assistant should:

- Place files under `packages/Webkul/Example/src/`.
- Generate a three-part Concord model (Contract + Model + Proxy).
- Generate a repository extending `Webkul\Core\Eloquent\Repository` with `model()` returning the contract FQCN.
- Register the service provider in `bootstrap/providers.php` and the `ModuleServiceProvider` in `config/concord.php`.

If the output looks like a generic Laravel package &mdash; flat `app/` classes, no Contract/Proxy, no Concord registration &mdash; the assistant isn't reading the context file. Re-check the file lives in the project root and is named exactly `llms.txt` / `llms-full.txt`.

## 🔄 Keep them fresh

Krayin's conventions evolve. Re-download both files when you upgrade Krayin to a new minor version:

```bash
curl -O https://devdocs.krayincrm.com/llms.txt
curl -O https://devdocs.krayincrm.com/llms-full.txt
```

You can commit them to your repo so every contributor's AI tool shares the same context, or `.gitignore` them and pull on demand &mdash; either works.

## 💡 Best practices

- **Pair llms.txt with Agent Skills.** Skills give Claude Code / Cursor on-demand, deeply-scoped context; `llms.txt` covers everything else (Copilot, web ChatGPT, in-house RAG).
- **Customise for heavy modifications.** If your project has heavily customised Krayin (forked packages, custom layouts), append a project-specific section to `llms-full.txt` documenting those changes.
- **Commit it for team consistency.** Checked-in context files make sure every developer's AI tool produces the same Krayin-idiomatic suggestions.

## 📝 Next steps

- [Agent Skills](./skills.md) &mdash; richer, on-demand context for Claude Code and Cursor users.
- [Architecture Overview](../architecture/overview.html) &mdash; the human-readable version of what `llms-full.txt` summarises.
- [Package Development](../packages/create-package.md) &mdash; the conventions the context files teach your AI assistant.
