# Digging Deeper

Welcome to **Digging Deeper** &mdash; the advanced topics for customising and extending Krayin once you've built your own package.

This section assumes you're comfortable with Krayin package development. If you haven't built a package yet, start with [Package Development &mdash; Getting Started](../packages/create-package.md) first.

## What's in this section

- [AI-Powered Lead Generation](./ai-powered-lead-generation.md) &mdash; turn uploaded documents into leads via OpenRouter.
- [Best Security Practices](./security-practice.md) &mdash; harden a production Krayin server.
- [Data Transfer](./data-transfer.md) &mdash; bulk-import leads, persons, and products from CSV or XLSX.
- [Email Inbound Parse](./email-inbound-parse.md) &mdash; turn inbound emails into CRM entries via SendGrid Inbound Parse or Webklex IMAP.
- [Events Listeners](./events.md) &mdash; hook into the lifecycle events Krayin fires on every write.
- [Events and Campaigns](./events-and-campaigns.md) &mdash; schedule recurring email campaigns from CRM events.
- [Helpers](./helpers.md) &mdash; the global `core()` helper functions Krayin ships.
- [Override a Layout](./override-a-layout.md) &mdash; swap or extend a core controller, model, blade view, or inject snippets via `view_render_event`.

## Quick links

| You want to... | Go to |
| --- | --- |
| Hook custom logic into a CRM write | [Events Listeners](./events.md) |
| Send drip emails from CRM events | [Events and Campaigns](./events-and-campaigns.md) |
| Customise a core admin screen | [Override a Layout](./override-a-layout.md) |
| Ship a feature that imports CSVs | [Data Transfer](./data-transfer.md) |
| Receive inbound emails into the CRM | [Email Inbound Parse](./email-inbound-parse.md) |
| Harden production before launch | [Best Security Practices](./security-practice.md) |
| Use AI to extract leads from documents | [AI-Powered Lead Generation](./ai-powered-lead-generation.md) |
| Use `core()->formatDate(...)` and friends | [Helpers](./helpers.md) |

## When to dig deeper

Most package work doesn't need anything from this section &mdash; [Package Development](../packages/create-package.md) covers the day-to-day surface. Reach for these pages when:

- You need to **react to** something happening elsewhere in the CRM &rarr; [Events Listeners](./events.md).
- You want to **change** an existing core screen instead of building a new one &rarr; [Override a Layout](./override-a-layout.md).
- Your package has a **bulk operation** users will run on tens of thousands of rows &rarr; [Data Transfer](./data-transfer.md).
- You're putting Krayin into **production** &rarr; [Best Security Practices](./security-practice.md).
