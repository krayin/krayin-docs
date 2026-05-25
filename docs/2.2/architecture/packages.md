# Packages

Krayin's modular architecture means every major piece of CRM functionality lives in its own Laravel package. This page lists all packages bundled with Krayin out of the box, in alphabetical order.

To learn how to build your own package, see [Getting Started](../packages/create-package.md).

### Activity

Schedule and track interactions with leads and contacts:

- **Calls** — log call details, set reminders, schedule future calls
- **Meetings** — invites, agendas, availability checks, follow-ups
- **Lunches & informal appointments** — reminders for relationship-building

The Activity package ships the data layer only (models, migrations, repositories). The admin UI &mdash; calendar view, list view, and CRUD controllers &mdash; lives inside the [Admin](#admin) package at `Admin/src/Http/Controllers/Activity/`.

### Admin

Wraps every admin screen with the shared layout, sidebar, header, and theming, and provides the dashboard widgets:

- Leads started, top leads, leads over time
- Sales pipelines
- Email engagement
- Top customers and top products

The reusable UI primitives this package exposes (layouts, breadcrumbs, datagrid controls) are documented in the [Blade Components guide](../packages/blade-components.md).

### Attribute

Defines the custom fields used by Leads, Persons, Organizations, Products, and Quotes — text, number, date, boolean, dropdown, and more. Powers the [Custom Attributes system](../custom-attributes/uses.md), with per-field validation, default values, and search/visibility flags.

### Automation

Workflows and webhooks for automating routine work.

- **Workflows** — trigger custom actions when conditions are met (e.g. assign a follow-up task when a lead moves to a certain stage). Supports conditional logic and scheduled actions.
- **Webhooks** — push CRM events to external systems in real time (lead created, deal closed, …) so other tools stay in sync.

### Contact

Manages organizations and the people inside them.

- Organization profiles — name, address, related info
- Person profiles — name, email, contact numbers
- Person ↔ organization relationships so you can see who works where

### Core

Centralised settings and configuration shared across the application — application name, time zone, default language, and other global options. Most other packages depend on Core.

### DataGrid

The tabular data layer used across the admin — configurable columns, filters, sorting, and pagination on top of any Eloquent model or repository. See the [DataGrid guide](../packages/datagrid.md) for how to wire one into your own package.

### DataTransfer

Bulk import of leads, persons, and products from CSV or XLSX files. Backed by Laravel's queue system, with row-level validation, configurable error tolerance, CSV delimiter options, and an editable preview before the import is finalised. See the [Data Transfer guide](../digging-deeper/data-transfer.md) for the full workflow.

### Email

Inbox-style email management built into the CRM:

- Compose, reply, forward
- Inbox, drafts, outbox, sent, trash
- Labels, stars, filters

### EmailTemplate

Reusable email templates with rich content — template name, subject line, and HTML body. Used as the starting point for outbound campaigns and transactional mails.

### Installer

Powers both the [GUI Installer](../introduction/installation.md#method-1-gui-installer) and the `php artisan krayin-crm:install` command. Handles:

- Environment file generation and database connection setup
- Schema migrations and initial data seeding
- Admin user creation
- Post-install configuration (mail, caching, …)

### Lead

Captures and tracks potential customers through the sales pipeline.

- Lead capture from web forms, email, or manual entry
- Stage tracking — new → contacted → qualified → proposal → won/lost
- Assignment to sales reps (manual or rule-based)
- Linking to contact persons and products

### Marketing

Event-based email marketing — create events, attach campaigns with email templates, and let the daily scheduler queue campaign emails to your contacts. See the [Events and Campaigns guide](../digging-deeper/events-and-campaigns.md) for the full workflow.

### Product

Manage the product catalogue used inside quotes and leads.

- Name, description, SKU
- Quantity (stock level)
- Price

### Quote

Build and send formal sales quotes:

- Subject, description, expiration date
- Person and lead association
- Billing and shipping addresses
- Financial details — subtotal, discounts, tax, adjustments, grand total

### Tag

Coloured labels for organising leads, contacts, and other entities. Each tag carries a name, colour, and owner.

### User

Manages user accounts, roles, and groups — the foundation that [Access Control List (ACL)](../packages/create-acl.md) checks across the CRM rely on.

### Warehouse

Tracks warehouse details for inventory and logistics:

- Warehouse name and unique identification
- Contact information — emails, phone numbers, owner
- Full address — street, city, state, postal code

### WebForm

Embeddable forms that drop into external websites to capture leads directly into the CRM:

- Customisable fields (text, checkbox, dropdown, file upload)
- Maps form fields to CRM entities (Lead, Contact, …)
- Submission triggers notifications or new records
- Shareable via embed code or direct link
