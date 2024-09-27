[[TOC]]

### **SendGrid Inbound Parse**

Krayin CRM can be integrated with SendGrid’s **Inbound Parse Webhook** to handle incoming emails. This allows emails sent to a specific domain to be automatically processed by Krayin and displayed in the **Mail > Inbox** section.

#### **Overview**
The **Inbound Parse Webhook** feature of SendGrid allows emails to be converted into HTTP POST requests and forwarded to a specified URL in your application. By integrating SendGrid with Krayin CRM, you can seamlessly receive and display incoming emails.

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
