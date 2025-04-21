<!-- @format -->

[[TOC]]

# AI-Powered Lead Generation

Krayin CRM introduces an **AI-powered feature** designed to automate the creation of leads and contacts by extracting structured data from uploaded documents such as invoices, business cards, and other similar files.

This feature integrates with the OpenRouter AI platform to interpret and process the contents of supported file types, reducing the need for manual data entry and enabling faster lead management.

## Overview of the Magic AI Service

The core functionality is handled by the `MagicAIService` class located at:

```
Webkul\Lead\Services\MagicAIService
```

This service provides a complete workflow for:

- Validating and decoding Base64-encoded files
- Extracting content (text and images) from supported documents
- Interacting with the OpenRouter AI API to generate structured responses
- Mapping the response to a valid lead format in Krayin CRM

## Supported File Types

Currently, this feature supports the following:

- **PDF files** with embedded or scanned text/images
- **Image files** (to be expanded in future versions)

The system uses the `smalot/pdfparser` PHP library to extract data from PDF files, and supports embedded image extraction for further AI processing.

## System Prompt for AI Processing

The AI model uses a structured system prompt to ensure consistent output. This prompt instructs the AI to extract specific fields from the document’s content.

### Expected AI Output Format

The AI returns a JSON structure similar to the following:

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

### Fields Extracted

- **Title**: Title of the lead (e.g., Invoice Subject or Project Title)
- **Lead Value**: Monetary value of the lead
- **Person Name**: Name of the individual or contact person
- **Person Email**: Email address with optional label (e.g., work, personal)
- **Person Contact Number**: Phone number with optional label

If any of these fields are missing in the source document, the AI will use fallback default values as shown above.

## Configuration Guide

To enable and configure AI-based lead creation, follow these steps:

1. Go to the **Admin Panel** in Krayin CRM.
2. Navigate to **Settings > Configuration > General > Magic AI**.
3. Enable the **Magic AI** feature.
4. Enter your **API Key** from [OpenRouter.ai](https://openrouter.ai/).
5. Select your preferred **AI model** from the available options.
6. (Optional) You can add additional model IDs by referencing the models list available at [Openrouter Models](https://openrouter.ai/models).

Once configured, the AI engine will be activated and ready to process document uploads.

## Using the Feature – Lead Creation via File Upload

After enabling and configuring the Magic AI service, follow these steps to generate leads:

1. Navigate to the **Leads** section from the CRM sidebar.
2. Click on the **Upload File** button.
3. A modal window will appear. Select and upload a document (e.g., an invoice or business card).
4. The AI service will automatically extract relevant data and create a new lead based on the extracted information.

This process is particularly useful for importing leads from offline documents or third-party sources.

## Developer Implementation Details

- **Concurrency Protection**: The `MagicAIService` includes a re-entrancy flag to prevent recursive processing of the same file.
- **File Handling**: Files are temporarily stored, parsed, and deleted after processing.
- **Data Truncation**: If the file contains too much text, the prompt is truncated intelligently to stay within the token limit allowed by the model.
- **AI Integration**: API requests are sent using Laravel’s HTTP client with secure headers and model configurations.
- **Error Handling**: All errors (invalid Base64, empty files, AI response issues) are caught and returned as localized messages using Laravel’s `trans()` function.
