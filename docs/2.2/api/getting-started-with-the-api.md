# Explore the REST API

Krayin ships a first-party **REST API** as a separate Composer package &mdash; `krayin/rest-api`. Install it, run one artisan command, and you get a fully-documented Swagger UI mounted at `/api/admin/documentation` that lets you exercise every endpoint from the browser.

This page walks through installing the package, configuring Sanctum, opening the Swagger UI, and making your first authenticated request.

## 🧩 What you get

| Capability | Detail |
| --- | --- |
| **CRUD over every core entity** | Leads, Persons, Organizations, Quotes, Products, Activities, Emails, Tags, Sources, Pipelines &mdash; all addressable via REST. |
| **Sanctum token auth** | Standard Laravel Sanctum &mdash; issue a token, send it as a `Bearer` header. |
| **Pagination + filtering** | List endpoints honour `page`, `per_page`, and entity-specific filters. |
| **Swagger UI** | Live, browser-based explorer generated from L5-Swagger annotations &mdash; try requests without writing code. |
| **JSON resources** | Responses use Laravel API resources so payloads stay consistent across endpoints. |

## ⬇️ 1. Install the package

From the Krayin project root:

```bash
composer require krayin/rest-api
```

Composer pulls the package into `vendor/krayin/rest-api/` and registers its service provider automatically.

## ⚙️ 2. Configure Sanctum

The REST API uses Laravel Sanctum for authentication. Add the domain(s) your CRM is served from to `.env` so Sanctum will issue tokens for them:

```ini
SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,yourdomain.com
```

For local development with the Krayin install served from `http://localhost/public`, use:

```ini
SANCTUM_STATEFUL_DOMAINS=localhost
```

::: tip Match scheme + port if non-standard
If you're serving on a custom port (e.g. `http://localhost:8000`), include the port. If you're on HTTPS, you do **not** include the scheme &mdash; just the host. See the [Sanctum stateful-domains docs](https://laravel.com/docs/11.x/sanctum#spa-authentication) for the full matching rules.
:::

## 🪄 3. Run the installer

The package ships an artisan command that publishes config, runs migrations, and generates the initial Swagger spec:

```bash
php artisan krayin-rest-api:install
```

The command takes a few seconds. When it finishes, the Swagger UI route is live.

## 🌐 4. Open the Swagger UI

Visit:

```text
http://yourdomain.com/api/admin/documentation
```

For a local install served from `http://localhost/public`, that's:

```text
http://localhost/public/api/admin/documentation
```

You land on the L5-Swagger UI &mdash; every endpoint is listed by tag (Leads, Persons, Quotes, ...). Click an endpoint to see the request shape, response shape, and a **Try it out** button.

::: tip Refresh the spec after code changes
If you customise the API (override an endpoint, add a new one), regenerate the spec with `php artisan l5-swagger:generate`. Without that, the UI keeps showing the old shape.
:::

## 🔐 5. Authenticate

Most endpoints require a Sanctum token. Get one by hitting the login endpoint with admin credentials:

```bash
curl -X POST http://localhost/public/api/admin/login \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123",
    "device_name": "cli-test"
  }'
```

Response:

```json
{
  "data": {
    "id": 1,
    "name": "Example Admin",
    "email": "admin@example.com",
    "token": "1|abcdef1234567890..."
  }
}
```

Copy the `token` &mdash; that's your Bearer token for every subsequent request.

In the Swagger UI, click **Authorize** at the top right, paste the token, and *every* "Try it out" call from then on is sent authenticated.

## 📡 6. Make your first request

List leads with `curl`:

```bash
curl -X GET http://localhost/public/api/admin/leads \
  -H "Accept: application/json" \
  -H "Authorization: Bearer 1|abcdef1234567890..."
```

You should get back a paginated JSON envelope:

```json
{
  "data": [
    { "id": 1, "title": "Acme deal", "lead_value": 5000, "status": 1 },
    { "id": 2, "title": "Globex deal", "lead_value": 12000, "status": 1 }
  ],
  "links": { "first": "...", "last": "...", "prev": null, "next": "..." },
  "meta": { "current_page": 1, "per_page": 10, "total": 42 }
}
```

Same call as JavaScript (e.g. inside a PWA or mobile app):

```js
const res = await fetch('http://localhost/public/api/admin/leads', {
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

const { data } = await res.json();
```

## 📋 Common endpoints

A quick reference for the routes you'll reach for most often. The full list (with payloads) is in the Swagger UI.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/admin/login` | Issue a Sanctum token. |
| `POST` | `/api/admin/logout` | Revoke the current token. |
| `GET` | `/api/admin/leads` | List leads (paginated). |
| `POST` | `/api/admin/leads` | Create a lead. |
| `GET` | `/api/admin/leads/{id}` | Get one lead. |
| `PUT` | `/api/admin/leads/{id}` | Update a lead. |
| `DELETE` | `/api/admin/leads/{id}` | Delete a lead. |
| `GET` | `/api/admin/contacts/persons` | List persons. |
| `GET` | `/api/admin/contacts/organizations` | List organizations. |
| `GET` | `/api/admin/quotes` | List quotes. |
| `GET` | `/api/admin/products` | List products. |

The same `POST/GET/PUT/DELETE` shape applies across persons, organizations, quotes, products, activities, and tags.

## 🧪 Verify

1. The Swagger UI loads at `/api/admin/documentation` with all endpoints grouped by tag.
2. `POST /api/admin/login` returns a token.
3. `GET /api/admin/leads` with that token returns JSON (not an HTML login page &mdash; an HTML response means the token wasn't accepted).

If the Swagger UI 404s, re-run:

```bash
php artisan krayin-rest-api:install
php artisan l5-swagger:generate
php artisan optimize:clear
```

If `/api/admin/login` returns `401` with valid credentials, the most common cause is `SANCTUM_STATEFUL_DOMAINS` not matching the host you're calling from.

## 🌍 Live demo

Krayin hosts a public Swagger UI you can poke at without installing anything:

- **API Explorer** &mdash; [apidoc.krayincrm.com/api/documentation](https://apidoc.krayincrm.com/api/documentation)
- **Admin login (for the demo)** &mdash; [apidoc.krayincrm.com/admin/login](https://apidoc.krayincrm.com/admin/login)

The same endpoints documented above are live there.

## 📝 Next steps

- [L5-Swagger](https://github.com/DarkaOnLine/L5-Swagger) &mdash; the doc-generator under the hood; useful when you want to annotate your own endpoints.
- [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum) &mdash; full auth guide, including SPA cookie-based auth as an alternative to bearer tokens.
- [Events Listeners](../digging-deeper/events.md) &mdash; the API fires the same `*.create.after` / `*.update.after` events as the admin UI, so any listener you've written works for API writes too.
