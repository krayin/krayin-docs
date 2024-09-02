# Packages

[[Toc]]

## Introduction

[Laravel](https://laravel.com) packages are the primary way of adding functionality so the following features are distributed into packages to enhance the application and allow developers to follow the standard way of developing custom functionality.

Krayin comes with a set of powerful default packages that provide essential functionalities out of the box. Below is a list of these default packages along with a brief description of each:

## Available Packages In Krayin


[Laravel](https://laravel.com) packages are the primary way of adding functionality so the following features are distributed into packages to enhance the application and allow developers to follow the standard way of developing custom functionality.

Krayin comes with a set of powerful default packages that provide essential functionalities out of the box. Below is a list of these default packages along with a brief description of each:

### Admin

The Admin Package provides comprehensive monitoring and management capabilities within the admin dashboard, enabling administrators to oversee various aspects of the store effectively. Here are the key areas the dashboard monitors:

- Leads Started: Monitor new leads as they enter the system. Track the initial stages of lead engagement to understand how leads are being generated and where they are coming from.

- Top Leads: Identify and prioritize the most promising leads based on criteria such as engagement level, potential revenue, and likelihood of conversion. This helps in focusing efforts on high-value prospects.

- Leads Over Time: Analyze the progression of leads over time to understand trends, conversion rates, and the effectiveness of marketing and sales strategies. This provides insights into the overall health of the sales pipeline.

- Activities: Track all sales and customer engagement activities, including calls, meetings, follow-ups, and tasks. This ensures that all interactions are logged and can be easily referenced to maintain a cohesive sales strategy.

- Pipelines: Visualize and manage sales pipelines to track the progress of leads through various stages. This helps in identifying bottlenecks and optimizing the sales process for better efficiency and higher conversion rates.

- Emails: Monitor email communication with leads and customers. This includes tracking email campaigns, responses, and overall email engagement to ensure effective communication.

- Customers: Oversee customer profiles, including contact information, purchase history, preferences, and support interactions. This helps in providing personalized service and maintaining strong customer relationships.

- Top Customers: Identify and highlight top customers based on purchase frequency, total spend, and loyalty. This information can be used to tailor marketing efforts and reward loyal customers.

- Products: Manage and monitor product listings, including adding new products, updating existing ones, and organizing them into categories. This also includes tracking inventory levels and product performance.

- Top Products: Identify best-selling and high-performing products. This helps in making informed decisions about inventory management, marketing strategies, and product development.

### Activity

This package offers a comprehensive solution for managing various types of interactions and appointments, including calls, meetings, and lunches. It is designed to streamline the scheduling, tracking, and organization of these activities to enhance productivity and ensure efficient time management. Here are some key features and functionalities provided by this package:

- Call Management: Keep track of all your phone calls, whether they're client calls, team calls, or follow-ups. The system allows you to log call details, schedule future calls, and set reminders to ensure you never miss an important conversation.

- Meeting Scheduling: Organize meetings effortlessly with tools to schedule, invite participants, and set agendas. The package can integrate with calendar systems to provide real-time availability and avoid scheduling conflicts. Meeting summaries and follow-up tasks can also be logged for future reference.

- Lunch Appointments: Manage lunch meetings with clients, partners, or colleagues by scheduling, sending invites, and setting reminders. This feature helps maintain a balance between formal meetings and informal, relationship-building interactions.

### Attribute

Attributes are specific details or features that describes Leads, Persons, Organizations, Products, Quotes such as user_id, lead_type_id, organization_id, emails, address, price, sku, description, shipping_address, billing_address and more.

- Create Attributes: Easily create new attributes to describes Leads, Persons, Organizations, Products, Quotes. Each attribute can have various data types, such as text, number, date, boolean, or dropdown options, allowing for flexible and detailed attribute creations.

- Attribute Configuration: Configure each attribute to determine how it will be used. This includes setting default values, specifying if the attribute is required, searchable, comparable, or visible.

- Attribute Validation: Define validation rules for attributes to ensure data consistency and accuracy.

### Contact

The Contact package is responsible for handling the creation and management of both organizations and individuals (persons). Here’s an in-depth description of its functionalities:

Organization Management

- Create Organizations: Easily add new organizations to the system. Capture essential details such as organization name, address and other relevant information.

Person Management

- Create Persons: Add individual contacts (persons) to the system, capturing details such as name, email and contact numbers.

Link to Organizations: Associate persons with specific organizations. This linkage helps in understanding the relationships and roles individuals have within different organizations.

By effectively managing the creation and organization of both organizations and persons, the Contact package ensures that all contact information is detailed, organized, and easily accessible. This leads to better relationship management, more efficient communication, and a comprehensive understanding of your network of contacts.

### Core

The Core Package provides essential functionalities and utilities that are used across other packages, ensuring consistency and efficiency within the system. Here’s an in-depth description of its key components:

Settings and Configurations

- System Settings: Centralized management of system-wide settings, such as application name, time zone, default language, and other global configurations. This ensures that all parts of the system operate under consistent settings.

### Email

The Mail Package provides comprehensive email management capabilities, allowing users to handle all aspects of their email communication efficiently. Here’s a detailed description of its functionalities:

Email Composition and Management

- Compose Mail: Create and send new emails with a rich text editor that supports formatting, attachments, and inline images. Users can easily compose professional-looking emails with various formatting options.

- Inbox Management: Manage received emails in the inbox. Features include reading, replying, forwarding, and organizing emails with labels or directories. Users can also mark emails as read or unread, star important emails, and filter messages based on various criteria.

- Drafts: Save unfinished emails as drafts. Users can revisit and edit drafts before sending them, ensuring that they can work on emails over time without losing any information.

- Outbox: Monitor emails that are queued for sending. This is particularly useful for managing large batches of emails or emails that are scheduled to be sent at a later time.

- Sent Mail: Access a log of all sent emails. This helps users keep track of their communications and refer back to previously sent messages when needed.

- Trash: Manage deleted emails in the trash directory. Users can recover emails from the trash if they were deleted by mistake or permanently delete emails to free up space

### EmailTemplate

The Email Template Package provides essential tools for managing email templates, focusing on key elements such as the template name, subject, and content. This package simplifies the process of creating consistent and professional emails. Here’s a detailed description of its functionalities:

Template Management

- Template Name: Assign a unique name to each email template for easy identification and organization. This helps in quickly locating and selecting the appropriate template for different email campaigns or communications.

- Subject Line: Define the subject line for each email template. The subject line is crucial as it is the first thing recipients see and can significantly impact open rates. Users can craft compelling subject lines to capture the recipient's attention.

- Email Content: Create and manage the main body of the email content. This includes writing and formatting the email message to ensure it is clear, engaging, and professional. The content section supports basic text formatting to enhance readability and presentation.

### Installer

The Installer Package in Krayin CRM streamlines the setup and installation process, allowing users to quickly and efficiently get the CRM up and running. The package now includes Command Line Interface (CLI) and Graphical User Interface (GUI) support, enhancing ease of use and automation capabilities. Here’s a detailed description of its functionalities:

Key Features

Command-Line Interface (CLI) Support: The Installer Package provides a robust CLI for installation and configuration. This allows users to perform installation tasks directly from the command line, making the process faster and more efficient.

- Automated Setup: Automate the setup process with predefined commands that handle the configuration of the CRM, including setting up the database, configuring environment variables, and initializing default settings.

- User-Friendly Prompts: During the installation process, the CLI provides user-friendly prompts to guide users through necessary configurations. This includes inputting database credentials, setting up the admin user, and other critical settings.

- Environment Configuration: The Installer Package assists in configuring environment variables, ensuring that the CRM is correctly set up to work in different environments (development, testing, production). It handles the creation and modification of the .env file with the necessary parameters.

- Database Setup and Migration: Easily set up and migrate the database with a single command. The package handles database creation, schema migration, and seeding of initial data, ensuring that the database is ready for use without manual intervention.

- Dependency Installation: Automatically install necessary dependencies and packages. This includes installing composer dependencies and running other required setup scripts to ensure that all components are in place.

Post-Installation Configuration: After the initial setup, the installer can also handle additional configurations such as setting up email services, configuring caching, and other optional settings to optimize the CRM’s performance and capabilities.

In addition to the Command-Line Interface (CLI), the Installer Package in Krayin CRM also offers a Graphical User Interface (GUI) for users who prefer a more visual and guided setup process. The GUI Installer is designed to make the installation process user-friendly, even for those who may not be familiar with command-line operations.

Accessing the GUI Installer

Navigate to the Installer:
Open your web browser and navigate to the installation URL of your Krayin CRM instance. Typically, this would be:
arduino

```path
http://yourdomain.com/install
```

This will take you to the GUI Installer interface, where you can begin the setup process.


### Lead

The Lead Package in Krayin CRM is designed to efficiently manage leads, contact persons, and products. It ensures that all aspects of lead management are handled systematically, allowing for seamless tracking and conversion of potential customers. Here’s a detailed description of its functionalities:

Key Responsibilities
Lead Management:

Capture Leads: Collect leads from various sources such as web forms, emails, and manual entry. This ensures that all potential customers are captured in the system.
Lead Tracking: Monitor the status and progress of leads throughout the sales pipeline. This includes stages such as new, contacted, qualified, proposal sent, and closed (won/lost).
Lead Assignment: Automatically or manually assign leads to sales representatives based on predefined rules or manual selection. This ensures that each lead is promptly followed up.
Contact Person Management:

- Create and Manage Contacts: Add and manage contact persons associated with each lead. This includes capturing details such as name, email and contact numbers in the organization.

- Product: Manage a catalog of products offered by the company. This includes product name, descriptions, SKU, Quantity and Price.

- Lead-Product Association: Link leads to specific products or services they are interested in. This helps in understanding the needs and preferences of each lead.

### Product

The Product Package in Krayin CRM is designed to effectively manage essential product details such as name, description, SKU (Stock Keeping Unit), quantity, and price. This package plays a crucial role in facilitating comprehensive product management within the CRM. Here’s a detailed overview of its key functionalities:

Product Management Features

- Product Name: Represents the unique name or title of each product offered by the company.
Usage: Used for identification purposes in the CRM and across various customer-facing interfaces.

- Description: Provides a detailed description or overview of the product's features, benefits, and specifications.
Usage: Helps customers and internal stakeholders understand the product's attributes and value proposition.

- SKU (Stock Keeping Unit): A unique alphanumeric identifier assigned to each product for inventory management and tracking purposes.
Usage: Enables efficient inventory control, order processing, and reporting within the CRM.

- Quantity: Represents the current stock level or available units of a particular product.

- Price: Specifies the selling price or unit cost of the product.
Usage: Determines the financial value of the product, aids in pricing strategies, and facilitates accurate sales transactions.

### Quote

The Quote Package in Krayin CRM centralizes the management of sales quotes, encompassing essential details and functionalities to streamline the quotation process and facilitate accurate sales transactions. Here’s a detailed overview of its components and capabilities:

Key Components Handled

- Sales Owner: Assigns responsibility to the sales representative overseeing the quote, ensuring accountability throughout the sales cycle.

- Subject and Description: Provides clear communication of the quote's purpose and details, including product/service offerings, terms, and conditions.

- Expiration Date: Sets a validity period for the quote, prompting timely decisions from customers and ensuring pricing and terms are current.

- Person and Lead: Associates the quote with specific contacts and leads within the CRM, enhancing context and personalized engagement.

- Billing and Shipping Addresses: Manages customer information for accurate invoicing and delivery logistics, ensuring seamless order fulfillment.

Financial Details Managed

- Quotes: Represents the formal proposal presented to customers, detailing products/services, pricing, and contractual terms upon acceptance.

- Subtotal: Calculates the total cost of items before applying discounts, taxes, or adjustments, providing transparency in pricing.

- Discounts: Applies reductions in price based on negotiated terms, promotions, or volume discounts, influencing customer purchasing decisions.

- Tax and Adjustment: Incorporates applicable taxes and optional adjustments to finalize the quote's total cost, ensuring compliance and accuracy.

- Grand Total: Summarizes the final amount payable by the customer, including all costs and adjustments, facilitating financial clarity and decision-making.

### Tag

The Tag Package in Krayin CRM manages tags associated with various entities, providing essential functionalities to categorize and organize information effectively. Here's a concise overview of its key components and capabilities:

Key Components Managed

- Name: Defines the unique identifier or label assigned to each tag, representing its purpose or category.

- Color: Specifies a visual identifier for the tag, enhancing visual distinction and organization in the CRM interface.

- User ID: Associates tags with specific users or owners within the CRM, facilitating personalized organization and access control.

### User

The User Package in Krayin CRM is instrumental for managing groups, roles, and user accounts within the system. Here’s an overview of its functionalities:

- Groups: Organizational units used to categorize users based on specific criteria or roles, facilitating group-based permissions and access control.

- Roles: Sets of permissions assigned to users based on their organizational roles, controlling access to CRM features, data, and functionalities.

- User Accounts: Individual accounts registered within the CRM system, managing user profiles, authentication, authorization, and personalization settings.

### WebForm

The WebForm feature in Krayin CRM enables users to create and manage customizable forms directly within the CRM environment. Here’s an overview of its functionalities and benefits:

Customizable Form Creation: Users can design forms tailored to specific needs, incorporating fields such as text inputs, checkboxes, dropdowns, and file uploads.

Integration with CRM Data: WebForms can be integrated with CRM data fields, allowing seamless capture and storage of information related to contacts, leads, or other entities.

Automation and Notifications: Submission of WebForms can trigger automated actions such as sending notifications, creating new CRM records, or updating existing data.

Accessibility and Embedding: Forms can be embedded on websites or shared via links, providing accessibility to external users and ensuring data collection efficiency.

### Automation

Automation in Krayin CRM is designed to enhance your business processes by streamlining operations through a series of automated actions that are triggered based on predefined conditions. This powerful feature is a combination of workflows and webhooks, enabling users to create complex, automated sequences that help reduce manual tasks, improve efficiency, and ensure consistency across various operations. Here’s how Automation enhances the CRM functionality:

1. Workflows

Task Automation: Trigger any custom actions when specific conditions are met. For example, when a lead is moved to a certain stage, a follow-up task can be automatically assigned to a salesperson.
Conditional Logic: Define conditional statements that guide the automation process. Workflows can branch into different actions based on whether certain conditions are true or false. This allows for highly customized automation that fits specific business requirements.
Scheduled Actions: Set up actions to occur at a later date, such as sending a reminder email after a lead has been idle for a specific number of days. This keeps your team proactive and ensures no lead falls through the cracks.

2. Webhooks

Integration with External Systems: Webhooks allow Krayin CRM to communicate with other systems and applications in real-time. When a trigger event occurs, a webhook sends data to an external URL, enabling seamless integration with other tools like marketing platforms, analytics systems, or custom applications.
Real-Time Updates: Automate the process of sending real-time updates to external systems when certain events happen within the CRM. For example, when a new contact is added or a deal is closed, the relevant data can be instantly pushed to other systems to keep all your tools in sync.
Custom Actions: Utilize webhooks to define custom actions that go beyond the built-in capabilities of Krayin CRM. This flexibility allows you to tailor the CRM to fit the unique needs of your business.

Service provider enables features such as loading [routes](/master/packages/routes.html), [migrations](/master/packages/create-migrations.html), [languages](/master/packages/localization.html) or publishing [views](/master/packages/views.html), etc so **Krayin** is developed considering these aspects.

### Datagrid

The DataGrid package in Krayin empowers administrators with a versatile solution for displaying and managing tabular data within the admin panel. It incorporates crucial components like models, repositories, and database interactions to streamline data handling and enhance user experience.

#### Dynamic Data Presentation:

- Dynamic Data Presentation
    - Allows administrators to configure columns, filters, sorting options, and pagination settings for displaying data tables.

- Advanced Filtering and Sorting
    - Enables administrators to apply filters based on various criteria to refine data views.

    - Supports sorting functionalities to organize data based on specified attributes.

### Warehouse

The Warehouse Package in Krayin CRM is designed to manage warehouse information efficiently. It allows users to store and organize key details about each warehouse, including contact information, descriptions, and addresses. This package provides the necessary tools to handle warehouse-related data, which is crucial for managing inventory and logistics operations within the CRM.

Key Features

- Warehouse Management:

The package provides functionalities to create, update, and manage warehouses within the CRM. Each warehouse can be uniquely identified by its name and associated with specific contact information, such as email addresses, phone numbers, and physical addresses.
Contact Information Handling:

The package supports storing multiple contact details for each warehouse, including names, emails, and phone numbers. This feature ensures that all relevant contact information is easily accessible for communication and coordination.

- Address Management:

The package allows you to store and manage the full address details of each warehouse, including street, city, state, and postal code. This is useful for ensuring that all logistical operations are correctly aligned with the physical locations of the warehouses.