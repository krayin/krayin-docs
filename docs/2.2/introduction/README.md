# Introduction

Welcome to the **Krayin CRM Developer Portal**. This section gets you from a fresh machine to a running Krayin install &mdash; and from there to AI-assisted development that understands Krayin's conventions out of the box.

Krayin is a free, open-source CRM framework for SMEs and enterprises, built on [Laravel](https://laravel.com), [Vue.js](https://vuejs.org/), and [Tailwind CSS](https://tailwindcss.com/). Try the [live demo](https://demo.krayincrm.com/) or browse the [Krayin website](https://krayincrm.com/) for the marketing tour.

## What's in this section

- [Requirements](./requirements.md) &mdash; the PHP version, web server, database, and PHP extensions Krayin needs before you install.
- [Installation](./installation.md) &mdash; four install methods: Composer create-project, GUI installer, Docker, and Cloud deployment.
- [Agent Skills](./skills.md) &mdash; `krayin/agent-skills` for Claude Code and Cursor &mdash; on-demand context bundles for Krayin-aware AI assistance.
- [AI Context Files](./ai-context.md) &mdash; `llms.txt` / `llms-full.txt` for any AI assistant that can read project files (Copilot, ChatGPT, Cursor, in-house RAG).

## Quick links

| You want to... | Go to |
| --- | --- |
| Install Krayin for the first time | [Requirements](./requirements.md) &rarr; [Installation](./installation.md) |
| Configure Claude Code / Cursor for Krayin | [Agent Skills](./skills.md) |
| Drop AI context into any other tool | [AI Context Files](./ai-context.md) |
| Upgrade an existing install | [Upgrade Guide](../prologue/upgrade-guide.md) |
| Build your first package | [Package Development](../packages/create-package.md) |

## Key features

Krayin offers a comprehensive suite of CRM capabilities. The headlines:

| Feature | What it does |
| --- | --- |
| **CRM Dashboard** | Real-time view of leads, activities, customers, and products. |
| **Lead pipeline** | Capture, qualify, and convert opportunities into revenue with stage tracking and kanban visualisation. |
| **Activities** | Log calls, meetings, and notes; never miss a follow-up. |
| **Contacts** | Persons and organizations with full relationship history. |
| **Products & quotes** | Catalogue + formal quote generation with line items, discounts, tax, and totals. |
| **Email** | Inbox-style mail inside the CRM &mdash; compose, reply, label, filter. |
| **Custom fields** | Unlimited admin-defined attributes per entity &mdash; see [Custom Attributes](../custom-attributes/custom-attribute.md). |
| **ACL** | Role + group based access control on every screen and action. |
| **Modular design** | Every feature ships as a Laravel package under `Webkul/` &mdash; extend or replace without touching core. |

## Community

- [krayin.com](https://krayincrm.com) &mdash; product site and demo.
- [GitHub: krayin/laravel-crm](https://github.com/krayin/laravel-crm) &mdash; source and issue tracker.
- [Community forum](https://forums.krayincrm.com/) &mdash; questions and discussion.
