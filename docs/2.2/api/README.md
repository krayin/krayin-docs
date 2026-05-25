# Krayin APIs

Krayin exposes its core entities through a first-party **REST API** &mdash; install one Composer package, run an artisan command, and every Lead / Person / Organization / Quote / Product action available in the admin is reachable over HTTP.

The REST API is the integration surface for:

- **Progressive Web Apps** &mdash; build a custom CRM front-end against Krayin as the back-end.
- **Mobile apps** &mdash; iOS / Android clients that read and write CRM records.
- **External systems** &mdash; sync leads from a marketing tool, push quotes to an ERP, mirror contacts into a marketing-automation platform.
- **Internal automations** &mdash; one-off scripts that bulk-process records without needing a session in the admin.

## What's in this section

- [Explore the REST API](./getting-started-with-the-api.md) &mdash; install `krayin/rest-api`, configure Sanctum, open the Swagger UI, and make your first authenticated request.

## At a glance

| Capability | Detail |
| --- | --- |
| **Auth** | Laravel Sanctum &mdash; bearer tokens for API clients, cookie sessions for SPAs. |
| **Docs UI** | L5-Swagger UI mounted at `/api/admin/documentation` &mdash; live, interactive, generated from PHP annotations. |
| **CRUD** | `POST/GET/PUT/DELETE` for every core entity. |
| **Pagination** | `page`, `per_page`, and standard Laravel paginator metadata on list endpoints. |
| **Events** | API writes fire the same listener events as admin writes &mdash; see [Events Listeners](../digging-deeper/events.md). |
