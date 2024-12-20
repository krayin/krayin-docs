(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{355:function(e,t,n){"use strict";n.r(t);var i=n(10),a=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#sendgrid-inbound-parse"}},[e._v("SendGrid Inbound Parse")])])])]),t("p"),e._v(" "),t("h3",{attrs:{id:"sendgrid-inbound-parse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendgrid-inbound-parse"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SendGrid Inbound Parse")])]),e._v(" "),t("p",[e._v("Krayin CRM can be integrated with SendGrid’s "),t("strong",[e._v("Inbound Parse Webhook")]),e._v(" to handle incoming emails. This allows emails sent to a specific domain to be automatically processed by Krayin and displayed in the "),t("strong",[e._v("Mail > Inbox")]),e._v(" section.")]),e._v(" "),t("h4",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Overview")])]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Inbound Parse Webhook")]),e._v(" feature of SendGrid allows emails to be converted into HTTP POST requests and forwarded to a specified URL in your application. By integrating SendGrid with Krayin CRM, you can seamlessly receive and display incoming emails.")]),e._v(" "),t("h4",{attrs:{id:"set-sendgrid-as-the-email-receiver-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-sendgrid-as-the-email-receiver-driver"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Set SendGrid as the Email Receiver Driver")])]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v(".env")]),e._v(" file, ensure that the "),t("code",[e._v("MAIL_RECEIVER_DRIVER")]),e._v(" is set to "),t("code",[e._v("sendgrid")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-env extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MAIL_RECEIVER_DRIVER=sendgrid\n")])])]),t("p",[e._v("This tells Krayin CRM to use the SendGrid package to handle incoming emails.")]),e._v(" "),t("h4",{attrs:{id:"setting-up-sendgrid-inbound-parse-with-krayin-crm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-sendgrid-inbound-parse-with-krayin-crm"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Setting Up SendGrid Inbound Parse with Krayin CRM")])]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Create a Domain and Email in SendGrid")])]),e._v(" "),t("ul",[t("li",[e._v("Log into your "),t("a",{attrs:{href:"https://app.sendgrid.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SendGrid account"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Go to "),t("strong",[e._v("Settings")]),e._v(" > "),t("strong",[e._v("Inbound Parse")]),e._v(".")]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("Add Host & URL")]),e._v(" to configure a new Parse Webhook.")]),e._v(" "),t("li",[e._v("Add the domain from which you want to receive emails (e.g., "),t("code",[e._v("example.com")]),e._v(").")]),e._v(" "),t("li",[e._v("Under the "),t("strong",[e._v("URL")]),e._v(" field, specify your Krayin CRM webhook URL, which should be in the format:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse\n")])])]),e._v("Replace "),t("code",[e._v("yourdomain.com")]),e._v(" with your actual domain and ensure the endpoint matches your Krayin setup.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Configure Krayin CRM to Receive Emails")])]),e._v(" "),t("ul",[t("li",[e._v("Once the webhook is set up in SendGrid, all emails sent to the configured domain will be forwarded to the specified Krayin webhook.")]),e._v(" "),t("li",[e._v("Krayin CRM will handle the incoming email data, including:\n"),t("ul",[t("li",[t("strong",[e._v("From Address:")]),e._v(" The sender's email.")]),e._v(" "),t("li",[t("strong",[e._v("To Address:")]),e._v(" The recipient (your configured email).")]),e._v(" "),t("li",[t("strong",[e._v("Subject:")]),e._v(" Email subject.")]),e._v(" "),t("li",[t("strong",[e._v("Text/HTML Body:")]),e._v(" Email content in plain text or HTML.")]),e._v(" "),t("li",[t("strong",[e._v("Attachments:")]),e._v(" Any files attached to the email.")])])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Krayin Endpoint for Inbound Parse")])]),e._v(" "),t("ul",[t("li",[e._v("Ensure that Krayin CRM is set up to receive the POST data from SendGrid. The email content will be sent to the following Krayin endpoint:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse\n")])])])]),e._v(" "),t("li",[e._v("Krayin will parse the data sent by SendGrid, store the email information in the database, and display it in the "),t("strong",[e._v("Mail > Inbox")]),e._v(" section.")])])])]),e._v(" "),t("h4",{attrs:{id:"handling-email-attachments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-email-attachments"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Handling Email Attachments")])]),e._v(" "),t("p",[e._v("Krayin CRM is capable of handling attachments that are sent via email. These attachments will be forwarded from SendGrid to your endpoint as "),t("code",[e._v("multipart/form-data")]),e._v(". Make sure your server can process and store these files for later retrieval in the "),t("strong",[e._v("Mail > Inbox")]),e._v(" section of the CRM.")]),e._v(" "),t("h4",{attrs:{id:"security-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Security Considerations")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Verify the Request Origin:")]),e._v(" Ensure that incoming requests to your webhook are actually coming from SendGrid. You can verify the origin by checking headers or configuring an API key in SendGrid for additional security.")]),e._v(" "),t("li",[t("strong",[e._v("HTTPS:")]),e._v(" Always use an HTTPS endpoint for secure communication between SendGrid and your server.")])]),e._v(" "),t("h4",{attrs:{id:"debugging-and-testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging-and-testing"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Debugging and Testing")])]),e._v(" "),t("ul",[t("li",[e._v("SendGrid provides tools to simulate incoming emails, which can be used to test your webhook configuration.")]),e._v(" "),t("li",[e._v("Ensure that your server’s response time is efficient. SendGrid expects a response within 20 seconds. If the email processing takes longer (e.g., saving attachments), consider using asynchronous background tasks.")])]),e._v(" "),t("h4",{attrs:{id:"example-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-workflow"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Example Workflow")])]),e._v(" "),t("ol",[t("li",[e._v("A user sends an email to "),t("code",[e._v("contact@example.com")]),e._v(".")]),e._v(" "),t("li",[e._v("SendGrid captures the email and forwards it to your Krayin webhook ("),t("code",[e._v("http://yourdomain.com/admin/mail/inbound-parse")]),e._v(").")]),e._v(" "),t("li",[e._v("Krayin CRM processes the incoming email, stores the details, and displays the email in the "),t("strong",[e._v("Mail > Inbox")]),e._v(" section.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);