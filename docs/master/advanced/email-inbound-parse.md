[[TOC]]

### **SendGrid Inbound Parse**

Krayin CRM can be integrated with SendGrid’s **Inbound Parse Webhook** to handle incoming emails. This allows emails sent to a specific domain to be automatically processed by Krayin and displayed in the **Mail > Inbox** section.

#### **Overview**
The **Inbound Parse Webhook** feature of SendGrid allows emails to be converted into HTTP POST requests and forwarded to a specified URL in your application. By integrating SendGrid with Krayin CRM, you can seamlessly receive and display incoming emails.

#### **Set SendGrid as the Email Receiver Driver**

In the `.env` file, ensure that the `MAIL_RECEIVER_DRIVER` is set to `sendgrid`:

```env
MAIL_RECEIVER_DRIVER=sendgrid
```

This tells Krayin CRM to use the SendGrid package to handle incoming emails.

#### **Setting Up SendGrid Inbound Parse with Krayin CRM**

1. **Create a Domain and Email in SendGrid**
   - Log into your [SendGrid account](https://app.sendgrid.com/).
   - Go to **Settings** > **Inbound Parse**.
   - Click **Add Host & URL** to configure a new Parse Webhook.
   - Add the domain from which you want to receive emails (e.g., `example.com`).
   - Under the **URL** field, specify your Krayin CRM webhook URL, which should be in the format:
     ```
     http://yourdomain.com/admin/mail/inbound-parse
     ```
     Replace `yourdomain.com` with your actual domain and ensure the endpoint matches your Krayin setup.

2. **Configure Krayin CRM to Receive Emails**
   - Once the webhook is set up in SendGrid, all emails sent to the configured domain will be forwarded to the specified Krayin webhook.
   - Krayin CRM will handle the incoming email data, including:
     - **From Address:** The sender's email.
     - **To Address:** The recipient (your configured email).
     - **Subject:** Email subject.
     - **Text/HTML Body:** Email content in plain text or HTML.
     - **Attachments:** Any files attached to the email.

3. **Krayin Endpoint for Inbound Parse**
   - Ensure that Krayin CRM is set up to receive the POST data from SendGrid. The email content will be sent to the following Krayin endpoint:
     ```
     http://yourdomain.com/admin/mail/inbound-parse
     ```
   - Krayin will parse the data sent by SendGrid, store the email information in the database, and display it in the **Mail > Inbox** section.

#### **Handling Email Attachments**
Krayin CRM is capable of handling attachments that are sent via email. These attachments will be forwarded from SendGrid to your endpoint as `multipart/form-data`. Make sure your server can process and store these files for later retrieval in the **Mail > Inbox** section of the CRM.

#### **Security Considerations**
- **Verify the Request Origin:** Ensure that incoming requests to your webhook are actually coming from SendGrid. You can verify the origin by checking headers or configuring an API key in SendGrid for additional security.
- **HTTPS:** Always use an HTTPS endpoint for secure communication between SendGrid and your server.

#### **Debugging and Testing**
- SendGrid provides tools to simulate incoming emails, which can be used to test your webhook configuration.
- Ensure that your server’s response time is efficient. SendGrid expects a response within 20 seconds. If the email processing takes longer (e.g., saving attachments), consider using asynchronous background tasks.

#### **Example Workflow**
1. A user sends an email to `contact@example.com`.
2. SendGrid captures the email and forwards it to your Krayin webhook (`http://yourdomain.com/admin/mail/inbound-parse`).
3. Krayin CRM processes the incoming email, stores the details, and displays the email in the **Mail > Inbox** section.


### **IMAP Inbound Parse**

Krayin CRM allows you to receive and manage your emails using the IMAP protocol. To integrate IMAP in Krayin CRM, we will use the **Webklex-IMAP** package as the email receiver driver.

**IMAP** (Internet Message Access Protocol) allows you to access your emails from any device without downloading them to your computer. Emails stay on the server, and you view them directly, with attachments only downloaded if needed. IMAP is ideal for accessing email on multiple devices, as any changes (like reading or deleting) are synced across all devices, making email management efficient and ensuring data consistency everywhere.

#### **Configure .env File**

To enable IMAP in Krayin CRM, you need to configure the `.env` file. Open the `.env` file in the root directory of your Laravel project and make the following changes:

```env
MAIL_RECEIVER_DRIVER=webklex-imap

IMAP_HOST=imap.example.com        # Replace with your IMAP host (e.g., imap.gmail.com)
IMAP_PORT=993                     # Use port 993 for IMAP with SSL encryption
IMAP_ENCRYPTION=ssl               # Choose 'ssl' or 'tls' based on your server settings
IMAP_VALIDATE_CERT=true           # Set this to 'true' to validate SSL certificates
IMAP_USERNAME=your_username       # Replace with your IMAP account username (email address)
IMAP_PASSWORD=your_password       # Replace with your IMAP account password
```

#### **Explanation of the `.env` IMAP Variables:**

- **IMAP_HOST**: The IMAP server host name (e.g., `imap.gmail.com` for Gmail, `imap.example.com` for other email providers).
- **IMAP_PORT**: The port used for IMAP communication, typically `993` for SSL.
- **IMAP_ENCRYPTION**: Defines the encryption method for secure communication. It can be `ssl` or `tls`.
- **IMAP_VALIDATE_CERT**: Set to `true` to validate SSL certificates for secure communication.
- **IMAP_USERNAME**: Your IMAP email account username, which is typically your email address.
- **IMAP_PASSWORD**: Your IMAP email account password.

#### **Set IMAP as the Email Receiver Driver**

In the `.env` file, ensure that the `MAIL_RECEIVER_DRIVER` is set to `webklex-imap`:

```env
MAIL_RECEIVER_DRIVER=webklex-imap
```

This tells Krayin CRM to use the Webklex IMAP package to handle incoming emails.

#### **Usage of IMAP in Krayin CRM**

Once the IMAP settings are configured in the `.env` file, Krayin CRM will be able to use IMAP to fetch emails from the specified email account.

Make sure to check your email provider’s documentation for the correct IMAP settings.
