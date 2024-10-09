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

#### Configuring IMAP Settings

To properly configure your email service via IMAP, follow the steps below to set up the necessary parameters through the application’s configuration interface. 

#### Step 1: Access IMAP Settings

1. **Open Your Application Dashboard**:
   - Navigate to the **Configuration** section in your application.

2. **Select IMAP Settings**:
   - Click on **IMAP Settings** from the menu.

#### Step 2: Enter IMAP Configuration Details

In the IMAP settings interface, you will find fields to input the following parameters:

| Parameter           | Description                                                      | Example                   |
|---------------------|------------------------------------------------------------------|---------------------------|
| **Host**            | The hostname of your email server.                               | `imap.example.com`        |
| **Port**            | The port used for IMAP connections.                              | `993` (for SSL)           |
| **Encryption Type** | The encryption type for the connection (e.g., SSL, TLS).        | `SSL`                     |
| **Validate SSL**    | Specify whether to validate the SSL certificate.                | `true` or `false`        |
| **IMAP Username**   | Your email account username (usually the full email address).    | `user@example.com`        |
| **IMAP Password**   | The password associated with your email account.                 | `yourpassword`            |

#### Step 3: Example Configuration

When filling out the IMAP settings, your input should resemble the following:

- **Host**: `imap.example.com`
- **Port**: `993`
- **Encryption Type**: `SSL`
- **Validate SSL**: `true` or `false`
- **IMAP Username**: `user@example.com`
- **IMAP Password**: `yourpassword`

#### Step 4: Save Configuration

After entering all required fields, click the **Save** button to store your IMAP configuration. This will ensure your application can connect to the email server using the provided settings.

#### **Set IMAP as the Email Receiver Driver**

In the `.env` file, ensure that the `MAIL_RECEIVER_DRIVER` is set to `webklex-imap`:

```env
MAIL_RECEIVER_DRIVER=webklex-imap
```

This tells Krayin CRM to use the Webklex IMAP package to handle incoming emails.

#### **Usage of IMAP in Krayin CRM**

Once the IMAP settings are configured in the `.env` file, Krayin CRM will be able to use IMAP to fetch emails from the specified email account.

Make sure to check your email provider’s documentation for the correct IMAP settings.
