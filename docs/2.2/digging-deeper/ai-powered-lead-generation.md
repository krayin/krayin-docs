# AI-Powered Lead Generation

Krayin's **Magic AI** feature turns uploaded documents &mdash; invoices, business cards, contracts &mdash; into ready-to-edit leads in one click. The integration sends the parsed file to an [OpenRouter](https://openrouter.ai/) model, which returns a structured JSON of person, contact details, and lead value that Krayin then persists.

This page documents both how to enable the feature for end users and how the developer-facing `MagicAIService` works under the hood.

## 🪄 What you get

- **PDF parsing** &mdash; text and embedded images, powered by [smalot/pdfparser](https://github.com/smalot/pdfparser).
- **Image OCR** (planned for future versions).
- **Auto-mapping** &mdash; AI output is mapped straight into Krayin's lead + person + email + phone schema.
- **Localised errors** &mdash; failure modes (bad upload, empty file, API failure) return translated user messages.

## ⚙️ Enable Magic AI

### 1. Get an OpenRouter API key

Sign up at [OpenRouter.ai](https://openrouter.ai/) and create an API key from your dashboard.

### 2. Configure in the admin

1. Open the admin panel.
2. Go to **Settings → Configuration → General → Magic AI**.
3. Toggle **Magic AI** on.
4. Paste your **API Key**.
5. Pick an **AI model** from the dropdown. Browse the full list at [OpenRouter Models](https://openrouter.ai/models) &mdash; you can paste additional model IDs into the field if the one you want isn't pre-listed.
6. Enable **DOC Generation**.
7. Save.

Once saved, the Upload File control becomes available on the Leads index.

## 📁 Create a lead from a document

1. Open **Leads** in the admin sidebar.
2. Click **Upload File**.
3. Pick a PDF or image (invoice, business card, …).
4. Magic AI parses the file, extracts the structured fields, and creates a draft lead pre-filled with what it found.

The flow is especially useful for capturing offline leads &mdash; trade-show business cards, scanned contracts, emailed invoices.

## 🔌 Expected AI output

The AI is instructed to return a strict JSON shape. If a field can't be extracted, it falls back to a default value:

```json
{
    "status": 1,
    "title": "Untitled Lead",
    "lead_value": 0,
    "person": {
        "name": "Unknown",
        "emails": {
            "value": null,
            "label": null
        },
        "contact_numbers": {
            "value": null,
            "label": null
        }
    }
}
```

| Field | What's extracted |
| --- | --- |
| `title` | Title of the lead &mdash; usually the invoice subject or project name |
| `lead_value` | Monetary value of the lead (numeric) |
| `person.name` | Name of the individual or contact person |
| `person.emails.value` | Email address |
| `person.emails.label` | Optional email label (`work`, `personal`, …) |
| `person.contact_numbers.value` | Phone number |
| `person.contact_numbers.label` | Optional phone label |

## 🛠️ Developer details &mdash; `MagicAIService`

All of the above is orchestrated by:

```text
Webkul\Lead\Services\MagicAIService
```

Responsibilities:

- **Validating + decoding** Base64-encoded uploads.
- **Extracting content** &mdash; text and embedded images &mdash; from supported file types via `smalot/pdfparser`.
- **Calling OpenRouter** using Laravel's HTTP client with the configured API key + model.
- **Mapping the response** into a valid Krayin lead payload (person, emails, phone numbers, value).

### Implementation notes

- **Concurrency protection** &mdash; the service holds a re-entrancy flag so the same upload can't be processed twice in parallel.
- **Temporary files** &mdash; uploads are written to a temp path, parsed, then deleted whether the call succeeds or fails.
- **Token-limit handling** &mdash; oversized documents are truncated intelligently before the prompt is built, so the request stays inside the model's context window.
- **Error path** &mdash; bad Base64, empty files, and AI response issues are caught and surfaced via `trans()` so the UI gets a localised message rather than a stack trace.

## 🧪 Verify

After saving the config:

1. Tail the Laravel log: `tail -f storage/logs/laravel.log`.
2. Upload a small test PDF from the Leads page.
3. You should see the OpenRouter request in the log, followed by a new lead in the list.

If the upload silently does nothing, check the Magic AI section in **Settings → Configuration → General → Magic AI** &mdash; an invalid or expired API key is the most common cause.
