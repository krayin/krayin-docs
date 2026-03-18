# Blade Components

[[TOC]]

## Introduction

To ensure optimal user experience in **Krayin** we have created several separate Blade components for the Admin packages. Now in **`Krayin`** we have also merged the vue.js code inside the blade component to improve application performance.

Additionally, To learn in detail about blade components, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/blade#introduction).

- Here are the list of Blade component that is available in **`Krayin`**.

## Components

Components are reusable Blade components used to build the Admin.

### Tag

The Krayin CRM provides a `Tag` component that allows you to add and manage tags for various entities such as leads, mails, or any other resources where tagging functionality is required. This component is highly flexible and can be integrated wherever the tagging feature is needed.

- Component Props

The `Tag` component accepts the following three props:

| Prop Name        | Type   | Description                                                                                 |
|------------------|--------|---------------------------------------------------------------------------------------------|
| `attach-endpoint`| String | The API endpoint used to attach a tag to the specified entity. This should be a valid URL.   |
| `detach-endpoint`| String | The API endpoint used to detach a tag from the specified entity. This should be a valid URL. |
| `added-tags`     | Array  | An array of tags that are already attached to the entity. It should be an array of objects, with each object representing a tag. |

- Example Usage

```php
<x-admin::tags
    :attach-endpoint="route('admin.leads.tags.attach', $lead->id)"
    :detach-endpoint="route('admin.leads.tags.detach', $lead->id)"
    :added-tags="$lead->tags"
/>
```

- Detailed Description

- **`attach-endpoint`:** This prop is crucial for adding new tags. When a user adds a tag, the `attach-endpoint` is used to send the tag data to the server. Ensure that the endpoint provided handles the attachment logic on the backend.

- **`detach-endpoint`:** Similarly, this prop is used when a tag is removed. The `detach-endpoint` sends a request to the server to remove the specified tag from the entity.

- **`added-tags`:** This prop provides the component with the list of tags that are already associated with the entity. The tags are displayed when the component is rendered, allowing users to see which tags are currently applied.

### Avatar

The `Avatar` component in Krayin CRM is designed to generate and display an avatar with the initials of a given name. This is useful for representing users, contacts, or any other entities with a visual identifier.

- Prop

The `Avatar` component accepts the following prop:

| Prop Name | Type   | Description                                                                                     |
|-----------|--------|-------------------------------------------------------------------------------------------------|
| `name`    | String | The full name for which the avatar should generate initials. For example, if the name is `John Doe`, the avatar will display `JD`. |

- Example Usage

```php
<x-admin::avatar name="John Doe" />
```

Detailed Description

- **`name`:** The `name` prop is required and should be a string representing the full name of the person or entity. The component processes this name and extracts the initials. For example:
  - If the `name` is `John Doe`, the avatar will display `JD`.
  - If the `name` is `Jane Smith`, the avatar will display `JS`.

This component is particularly useful in scenarios where you need a quick and simple visual representation of users or entities within the CRM interface.

### Activities

The `Activities` Blade Component in Krayin CRM is a versatile and dynamic component designed to display various types of activities related to an entity, such as leads, contacts, warehouse. This component allows you to manage and display different types of data (like emails, products, quotes, and descriptions) in a structured and user-friendly way. Below is a detailed explanation of the props and slots that the component accepts:

- Props

| Prop Name             | Type     | Description                                                                                           | Default Value                                                                                         |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **`endpoint`**        | `String` | The API endpoint that the component will call to fetch and display the activities.                    | `''` (empty string)                                                                                    |
| **`emailDetachEndpoint`** | `String` | The API endpoint for detaching emails from the activity log.                                             | `''` (empty string)                                                                                    |
| **`activeType`**       | `String` | The type of activity currently active and displayed in the component.                                  | `'all'`                                                                                                |
| **`types`**           | `Array`  | An array of predefined activity types, each with a `name` and `label`, which will be displayed as filter options. | `[ {name: 'all', label: "{{ 'All' }}" }, ... ]` |
| **`extraTypes`**      | `Array`  | An array for additional custom activity types that extend the default types provided by the component. | `[]` (empty array)                                                                                     |

- Slots

The `Activities` component also supports named slots, which allow you to insert custom content into specific sections of the component. Below are the slots available:

| Slot Name       | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **`products`**  | Slot for displaying product-related activities. You can include custom product views or components here. |
| **`quotes`**    | Slot for displaying quote-related activities. This is where you can include a view for quotes.  |
| **`description`** | Slot for displaying a description related to the entity. You can customize the description view or layout. |

- Usage Example

Here is how you can use the `Activities` component in your Blade template:

```html
<x-admin::activities
    :endpoint="route('admin.leads.activities.index', $lead->id)"
    :email-detach-endpoint="route('admin.leads.emails.detach', $lead->id)"
    :extra-types="[
        ['name' => 'description', 'label' => trans('admin::app.leads.view.tabs.description')],
        ['name' => 'products', 'label' => trans('admin::app.leads.view.tabs.products')],
        ['name' => 'quotes', 'label' => trans('admin::app.leads.view.tabs.quotes')],
    ]"
>
    <!-- Products -->
    <x-slot:products>
        @include('admin::leads.view.products')
    </x-slot>

    <!-- Quotes -->
    <x-slot:quotes>
        @include('admin::leads.view.quotes')
    </x-slot>

    <!-- Description -->
    <x-slot:description>
        <div class="p-4">
            {{ $lead->description }}
        </div>
    </x-slot>
</x-admin::activities>
```

- Explanation:

- **`endpoint`**: This prop is used to specify the API endpoint that the component will query to fetch the activities. In this example, the endpoint is dynamically generated based on the lead's ID.

- **`email-detach-endpoint`**: This prop provides the API endpoint that will be called when detaching an email from the activity log. It's crucial for managing email-related activities within the component.

- **`extra-types`**: This prop allows you to extend the types of activities displayed by the component. Each activity type is represented by an array containing a `name` and `label`. The `name` is used to identify the activity type, and the `label` is the user-friendly name displayed in the UI.

- **Slots**: The `Activities` component supports named slots (`products`, `quotes`, `description`) where you can insert custom views or content. These slots are particularly useful for displaying specific types of activities, like products or quotes, in a way that fits your application's design.

This component is powerful for creating a comprehensive activity log in CRM applications, ensuring that all relevant interactions and data are easily accessible and well-organized. The use of props and slots makes it highly customizable, allowing you to tailor the component to fit specific needs within the admin panel.

### Lookup

The Lookup Blade Component in Krayin CRM is designed to facilitate the selection of items from a list or database by providing a search-and-select interface. This component is highly customizable and can be integrated into forms or other UI elements to enhance user experience. Below is a detailed explanation of the props that the component accepts:

| Prop Name     | Type      | Description                                                                                  | Default Value |
| ------------- | --------- | -------------------------------------------------------------------------------------------- | ------------- |
| **`src`**     | `String`  | The API endpoint or URL from which the component fetches data for the lookup functionality.  | `required`    |
| **`params`**  | `Object`  | Additional parameters to be sent along with the API request, often used for filtering data.   | `{}`          |
| **`name`**    | `String`  | The name of the input field, used as an identifier in forms.                                  | `required`    |
| **`placeholder`** | `String`  | The placeholder text displayed in the input field when no value is selected.                  | `required`    |
| **`value`**   | `Object`  | The currently selected value in the lookup component. This object represents the selected item. | `{}`          |
| **`rules`**   | `String`  | Validation rules applied to the lookup component, typically using Laravel's validation syntax. | `''`          |
| **`label`**   | `String`  | A label for the lookup component, displayed above or next to the input field.                  | `''`          |
| **`canAddNew`** | `Boolean` | A boolean flag that enables or disables the ability to add a new item directly from the lookup component. | `false`       |

- Usage Example:

Here's an example of how you might use the Lookup Blade Component in your Blade template:

```php
<x-admin::lookup
    ::src="src"
    name="person[id]"
    ::params="params"
    @on-selected="addPerson"
    :placeholder="trans('admin::app.leads.common.contact.name')"
    ::value="{id: person.id, name: person.name}"
    :can-add-new="true"
/>
```

- Description:

- **`src`**: The URL or API endpoint from which the lookup component fetches its data. This is required and is the source for populating the search results within the lookup dropdown.

- **`params`**: An object containing additional parameters that are sent along with the API request. This allows for filtering or customizing the data fetched based on specific criteria.

- **`name`**: The name of the lookup input field, used to identify the component in form submissions. This is required and should be unique within the form.

- **`placeholder`**: The placeholder text that appears in the input field when the user hasn't selected a value. This helps guide users on what the input field is used for.

- **`value`**: An object representing the currently selected value in the lookup component. This is typically bound to a data property in your application and is used to prepopulate the lookup field with a selected item.

- **`rules`**: Validation rules that are applied to the lookup component. These rules are defined using Laravel's validation syntax and can enforce constraints such as required fields.

- **`label`**: A label that accompanies the lookup component, providing context or instructions to the user. It is optional and can be used to describe the purpose of the lookup field.

- **`canAddNew`**: A boolean flag that, when set to `true`, allows users to add a new item directly from the lookup component. This is particularly useful when the desired item is not found in the existing list, enabling a quick addition of new options.

This Lookup Component is useful in various scenarios where users need to search for and select items from a list, such as selecting products, categories, or any other entities within Krayin CRM. The flexibility provided by props like `src`, `params`, and `canAddNew` ensures that it can be tailored to fit the specific needs of different parts of the application.

### Attachment

The Attachment Blade Component in Krayin CRM is designed to handle file uploads with various customizable options. This component is powered by Vue.js, providing flexibility in managing attachments within forms or other UI elements. Below is a detailed explanation of the props that the component accepts:

| Prop Name              | Type      | Description                                                                                 | Default Value      |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------- | ------------------ |
| **`name`**             | `String`  | The name of the input field for attachments, used as an identifier in forms.                | `'attachments'`    |
| **`validations`**      | `String`  | Validation rules for the attachments, typically using Laravel's validation syntax.          | `''`               |
| **`uploadedAttachments`** | `Array`  | An array of already uploaded attachments, allowing for the display and management of existing files. | `[]`            |
| **`allowMultiple`**    | `Boolean` | Determines whether multiple files can be uploaded at once.                                  | `false`            |
| **`hideButton`**       | `Boolean` | Option to hide the upload button, useful in scenarios where uploads are triggered differently. | `false`         |
| **`errors`**           | `Object`  | An object containing any validation errors related to the file upload process.              | `{}`               |

- Usage Example:

Here's an example of how you might use the Attachment Blade Component in your Blade template:

```html
<x-admin::attachments 
    name="documentAttachments" 
    validations="required|mimes:pdf,jpg,png|max:2048"
    :uploadedAttachments="$lead->documents"
    :allowMultiple="true"
    :hideButton="false"
    :errors="$errors->toArray()"
/>
```

- Description:

- **Name**: This is the name of the input field for the attachments, often used as the `name` attribute in the HTML form. It uniquely identifies the file input, especially in forms that may have multiple file upload fields.
  
- **Validations**: Validation rules that apply to the uploaded files. These rules are defined using Laravel's validation syntax, allowing you to specify file types, size limits, and other constraints.

- **Uploaded Attachments**: An array that holds information about attachments that have already been uploaded. This allows for displaying existing files to users, enabling them to view or manage previously uploaded files.

- **Allow Multiple**: A boolean flag that enables or disables the ability to upload multiple files at once. If set to `true`, users can select and upload several files in one action.

- **Hide Button**: A boolean flag to hide the file upload button. This can be useful if the file upload is triggered by other UI elements or if you want to prevent manual file uploads in certain contexts.

- **Errors**: An object containing validation errors related to the file uploads. If the uploaded files don't meet the specified validation criteria, the errors object will hold the relevant messages to be displayed to the user.

This component is versatile and can be integrated into various parts of Krayin CRM where file uploads are necessary, such as when attaching documents to leads, contacts, or any other CRM entities. The ability to customize validation rules, manage multiple files, and control the visibility of the upload button makes it a powerful tool for handling attachments.

### Inline Editable
The Inline Editable Blade Component in Krayin CRM allows users to create editable fields directly within the user interface, providing an intuitive and seamless editing experience. This component is powered by Vue.js and is highly customizable through various props that dictate its behavior, appearance, and functionality. Below is a detailed explanation of each prop that the component accepts:

| Prop Name      | Type     | Description                                                                                   | Default Value   |
| -------------- | -------- | --------------------------------------------------------------------------------------------- | --------------- |
| **`name`**     | `String` | The name of the field, used as an identifier for the input.                                    | **Required**    |
| **`value`**    | `Mixed`  | The current value of the field that will be displayed and edited.                             | **Required**    |
| **`rules`**    | `String` | Validation rules for the field, typically using [Vee Validate v4](https://vee-validate.logaretm.com/v4/guide/overview/).                  | `''`            |
| **`label`**    | `String` | The label for the field, displayed alongside the input.                                       | `''`            |
| **`placeholder`** | `String` | Placeholder text for the input field, shown when the value is empty.                       | `''`            |
| **`position`** | `String` | The position of the editable input relative to its label or icon, typically 'right' or 'left'.| `'right'`       |
| **`allowEdit`**| `Boolean`| Determines whether the field is editable by the user.                                         | `true`          |
| **`errors`**   | `Object` | An object containing any validation errors related to the field.                              | `{}`            |
| **`url`**      | `String` | The endpoint URL where the updated value should be sent for saving.                           | `''`            |
| **`params`**   | `Object` | Additional parameters to be sent along with the value when saving.                            | `{}`            |
| **`valueLabel`** | `String` | A label to represent the value, especially useful when displaying complex data types.       | `''`            |

- Usage Example:

Here's an example of how you might use this Inline Editable Blade Component in your Blade template:

```php
<x-admin::form.control-group.controls.inline.text
    type="inline"
    ::name="'{{ $attribute->code }}'"
    ::value="'{{ $value }}'"
    position="left"
    rules="required"
    :label="$attribute->name"
    :placeholder="$attribute->name"
    ::errors="errors"
    :url="$url"
    :allow-edit="$allowEdit"
/>
```

- Description:

- **Name**: This is the identifier for the input field, often used as the `name` attribute in the HTML form.
- **Value**: The current value of the field, which can be edited by the user. It is passed directly to the input field.
- **Rules**: Validation rules that are applied when the value is updated, ensuring the data meets specific criteria before being saved.
- **Label**: The text label displayed next to the input field, providing context about what the field represents.
- **Placeholder**: Text that appears in the input field when it is empty, guiding the user on what to enter.
- **Position**: Determines where the editable input appears relative to the label or any accompanying icons.
- **Allow Edit**: A boolean flag that enables or disables the ability to edit the field. When set to `false`, the field will be read-only.
- **Errors**: Any validation errors associated with the field, which can be displayed to the user if the input does not meet the validation criteria.
- **URL**: The endpoint where the component sends the updated value when the user saves their changes.
- **Params**: Additional parameters that can be sent along with the value, such as method overrides or extra data needed for the request.
- **Value Label**: A label that can represent the value when displaying complex data types or when the value itself is not straightforward.

This component is highly versatile and can be used across various sections of the CRM, such as in leads, contacts, or any other entity where inline editing is required. The ability to customize nearly every aspect of its behavior makes it a powerful tool for enhancing user experience.

### Accordion

Krayin provides a collapsible accordion UI element, allowing users to toggle the visibility of content sections. It is commonly used for organizing and presenting information in a compact and intuitive manner.

| Props           | Type    | Default | Description                                                 |
| --------------- | ------- | ------- | ------------------------------------------------------------|
| **`is-active`** | Boolean | `false` | Determines the initial state of the accordion. When set to `true`, the accordion section will be expanded by default; otherwise, it will be collapsed. |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`header`**  | Used to customize the header section of the accordion. |
  | **`content`** | Used to customize the content section of the accordion. |

You can customize the appearance of the accordion `header` and `content` by passing additional CSS classes to the header and content slots, respectively.

Let's assume you want to use the **`accordion`** component, you can call it like this:

```php
<!-- Admin Accordion -->
<x-admin::accordion 
    title="Admin Accordion" 
    class="px-5"
>
    <x-slot:header class="bg-gray-200">
        Accordion Header
    </x-slot>

    <x-slot:content class="bg-green-200">
        Accordion Content
    </x-slot>
</x-admin::accordion>
```

### Button

The `button` component in Krayin provides a versatile button element that supports loading state with a spinner animation. It offers flexibility in styling and functionality to suit various use cases within your application.

  | Prop            | Type          | Default Value | Description                                                            |
| ---------------   | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`title`**       | `String`      | None          | Title text displayed on the button.                                     |
| **`loading`**     | `Boolean`     | `false`       | Indicates whether the button is in a loading state.                      |
| **`button-type`**  | `String`      | `'button'`    | Specifies the type of button (`'button'`, `'submit'`, `'reset'`, etc.). |
| **`button-class`** | `String`      | `''`          | Additional classes for custom styling.                                  |

You can customize the appearance of the button by passing additional props `loading`  `buttonType`  `buttonClass` respectively.

Let's assume you want to use the **`button`** component. You can call it like this:
 
```php
<!-- Admin Button -->
<x-admin::button
    type="submit"
    class="secondary-button w-full max-w-full max-md:py-3 max-sm:rounded-lg max-sm:py-1.5"
    button-type="secondary-button"
    :loading="false"
    :title="trans('Button')"
    :disabled="true"
    ::loading="true"
/>
```

### Drawer

The `drawer` component in Krayin provides a versatile drawer that can be positioned on the top, bottom, left, or right side of the screen. It allows you to create interactive drawers that can contain various content such as headers, body, and footer sections. The drawer can be toggled open or closed, providing a clean and efficient way to display additional information or functionality.

| Props            | Type          | Default Value | Description                                                            |
| --------------  | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`is-active`** | `Boolean`     | `false`       | Determines whether the drawer is initially active.                      |
| **`position`** | `String`      | `'left'`      | Specifies the position of the drawer (`top`, `bottom`, `left`, or `right`). |
| **`width`**    | `String`      | `'500px'`     | Specifies the width of the drawer.                                      |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element. |
  | **`header`** | Slot for the header content. |
  | **`content`** | Slot for the main content. |
  | **`footer`** |  Slot for the footer content. |

You can customize the appearance of the Drawer by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`drawer`** component. You can call it like this.

```php
<!-- Admin Drawer -->
<x-admin::drawer     
    position="left"
    width="100%"
>
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header class="bg-red-100">  <!-- Pass your custom css to customize header -->
        Drawer Header
    </x-slot>

    <x-slot:content class="!p-5"> <!-- Pass your custom css to customize header -->
        Drawer Content
    </x-slot>
</x-admin::drawer>
```

### Dropdown

The `dropdown` component in Krayin provides a customizable dropdown menu that can be positioned at different locations relative to its toggle button. It enables you to create dropdown menus with various content sections such as toggle button, content, and menu items.

| Prop              | Type      | Default Value | Description                                                            |
| ----------------- | --------- | ------------- | ---------------------------------------------------------------------- |
| **`close-on-click`**| `Boolean` | `true`        | Determines whether the dropdown should close when clicking outside the menu. |
| **`position`**    | `String`  | `'bottom-left'`| Specifies the position of the dropdown menu relative to the toggle button (`top-left`, `top-right`, `bottom-left`, `bottom-right`). |

  | Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element.. |
  | **`content`** | Slot for the main content. |
  | **`menu`** | Slot for the menu items.. |

To customize the content section, you can target the `content` slot with your own CSS classes or styles.

Let's assume you want to use the **`dropdown`** component. You can call it like this.

```php
<!-- Admin Dropdown -->
<x-admin::dropdown position="bottom-left"> 
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!p-0">
        Dropdown Content
    </x-slot>

    <x-slot:menu>
        <x-admin::dropdown.menu.item
            Menu Item 1
            Menu Item 2
        >
        </x-admin::dropdown.menu.item>
    </x-slot>
</x-admin::dropdown>
```

### Flat-Picker

The `datetime-picker` and `date-picker` components provide `date` and `time` picker functionality within Krayin applications. These components are based on the Flatpickr library and offer customizable options for selecting dates and times.

It can be configured with various props to customize its behavior according to application requirements.

| Prop          | Type             | Default Value | Description                                                             |
| ------------- | ---------------- | ------------- | ----------------------------------------------------------------------- |
| **`name`**    | `String`         | None          | Name attribute for the input field.                                      |
| **`value`**   | `String`         | None          | Initial value of the date picker.                                        |
| **`allow-input`** | `Boolean`      | `true`      | Determines whether manual input is allowed in the input field.           |
| **`disable`** | `Array`          | `[]`          | Array of dates to disable in the date picker.                            |
                                                                                                                              
Let's assume you want to use the **`flat-picker`** component. You can call it like this.

```php
<!-- Admin DateTime Picker -->
<x-admin::flat-picker.date ::allow-input="false">
    <input
        type="datetime"
        name="datetime"
        class="mb-4"
        :value="selectedDateTime"
        :disable="disabledDates"
        placeholder="datetime"
    />
</x-admin::flat-picker.date>
```

### Data Grid

The `datagrid` component in Krayin applications provides a flexible and customizable data grid interface for displaying tabular data. It includes features such as `sorting`, `filtering`, `pagination`, and `mass actions` to manage data efficiently.

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](https://devdocs.Krayin.com/2.0/packages/datagrid.html#datagrid-customization) documentation.

Let's assume you want to use the **`datagrid`** component. You can call it like this.

```php
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')" />
```

### Tinymce

The `tinymce` component wraps the Tinymce editor and provides additional functionalities like AI content generation.

| Props          | Type    | Default Value | Description                                                      |
| -------------- | ------- | ------------- | ---------------------------------------------------------------- |
| **`selector`** | String  | `''`          | The CSS selector for the textarea element to initialize as TinyMCE. |
| **`field`**    | Object  | `{}`          | Vue Formulate field object.                                      |

Let's assume you want to use the **`tinymce`** component on admin and shop. You can call it like this.

```php
<!-- Admin Tinymce -->
<x-admin::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="Content"
    :placeholder="Content"
    :tinymce="true"
/>
```

### Shimmer

Prebuilt `shimmer` effects are available in Krayin. You can easily use them.

Let's assume you want to use the **`shimmer`** You can call it like this.

```php
<!-- Admin shimmer -->
<x-admin::shimmer.datagrid />
```

### Table

The `Table` component in Laravel Krayin CRM is used to display structured tabular data. The customization options are also available through CSS for various table elements:

| Styling        | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **`Table`**    | Apply custom styles to the `table` element to change its appearance, such as borders, padding, and background color. |
| **`Cell`**     | Customize the appearance of `th` and `td` elements using CSS, such as font size, text alignment, and background color. |
| **`Row`**      | Apply styles to `tr` elements to change their appearance, such as background color, hover effects, and borders. |
| **`Header`**   | Customize the appearance of the header cells within the `thead` section using `th` elements. Apply styles such as font weight, text color, and background color. |

To use the **`Table`** component in Krayin CRM, you can call it like this:

```php
<!-- CRM Table -->
<x-admin::table>
    <x-admin::table.thead>
        <x-admin::table.thead.tr>
            <x-admin::table.th>
                Heading 1
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 2
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 3
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 4
            </x-admin::table.th>
        </x-admin::table.thead.tr>
    </x-admin::table.thead>

    <x-admin::table.tbody>
        <x-admin::table.tbody.tr>
            <x-admin::table.td>
                Column 1
            </x-admin::table.td>

            <x-admin::table.td>
                Column 2
            </x-admin::table.td>

            <x-admin::table.td>
                Column 3
            </x-admin::table.td>

            <x-admin::table.td>
                Column 4
            </x-admin::table.td>
        </x-admin::table.tbody.tr>
    </x-admin::table.tbody>
</x-admin::table>
```

### Modal

The `modal` component in Krayin provides a flexible way to create modal dialogs. It allows you to display content in a layer that floats above the rest of the page.

| Props         | Type      | Default Value | Description                           |
|--------------|-----------|---------------|---------------------------------------|
| `is-active`  | Boolean   | `false`       | Controls the visibility of the modal.  |

| Slot          | Description                                                 |
|---------------|-------------------------------------------------------------|
| **`toggle`**  | Used for the element that toggles the visibility of the modal. |
| **`header`**  | Allows customization of the modal header content.           |
| **`content`** | Provides a slot for the main body content of the modal.      |
| **`footer`**  | Allows customization of the footer content within the modal. |

You can customize the appearance of the Modal by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`modal`** component, You can call it like this.

```php
<!-- Admin Modal -->
<x-admin::modal>
    <x-slot:toggle>
        Modal Toggle
    </x-slot>

    <x-slot:header>
        Modal Header
    </x-slot>

    <x-slot:content>
        Modal Content
    </x-slot>
</x-admin::modal>
```

### Tree

The Tree component in Krayin enables you to display hierarchical data in a tree-like structure, with support for checkboxes or radio buttons for selection.

| Props           | Type                             | Default Value | Description                                                      |
|-----------------|----------------------------------|---------------|------------------------------------------------------------------|
| **`input-type`** | `String`                         | `'checkbox'`  | Specifies the type of input to use for selection. Can be either `checkbox` or `radio`. |
| **`selection-type`** | `String`                     | `'hierarchical'` | Specifies the selection type. Can be `'hierarchical'` or `'individual'`. |
| **`name-field`** | `String`                         | `'permissions'` | The field name to use as the identifier for each tree node.      |
| **`value-field`** | `String`                         | `'value'`      | The field name to use as the value for each tree node.           |
| **`id-field`**    | `String`                         | `'id'`         | The field name to use as the unique identifier for each tree node. |
| **`label-field`** | `String`                         | `'name'`       | The field name to use as the label for each tree node.           |
| **`children-field`** | `String`                      | `'children'`   | The field name to use for nesting child nodes within each tree node. |
| **`items`**      | `Array`, `String`, `Object`      | `[]`           | The hierarchical data to be displayed in the tree structure.      |
| **`value`**      | `Array`, `String`, `Object`      | `[]`           | The selected values.                                             |
| **`fallback-locale`** | `String`                     | `'en'`         | The fallback locale to use for translations.                     |
| **`collapse`**   | `Boolean`                        | `false`       | Determines whether the tree nodes are initially collapsed (`true`) or expanded (`false`). |

Let's assume you want to use the **`tree`** component, You can call it like this.

```php
<x-admin::tree.view
    input-type="checkbox"
    selection-type="individual"
    name-field="categories"
    id-field="id"
    value-field="id"
    ::items="categories"
    :value="($product->categories->pluck('id'))"
    :fallback-locale="config('app.fallback_locale')"
    :collapse="true"
>
</x-admin::tree.view>
```

### Media
 
The Media component in Krayin provides a user interface for managing and displaying images, allowing users to upload, edit, and delete images.:

| Props               | Type        | Default Value | Description                                                      |
|---------------------|-------------|---------------|------------------------------------------------------------------|
| **`name`**          | `String`    |               | The name of the input field.                                      |
| **`allow-multiple`** | `Boolean`   | `false`       | Whether to allow uploading multiple images.                       |
| **`show-placeholders`** | `Boolean` | `true`        | Whether to show placeholder images when no images are uploaded.   |
| **`uploaded-images`** | `Array`     | `[]`          | Array of uploaded images.                                         |
| **`width`**         | `String`    | `'100%'`      | Width of the image container.                                     |
| **`height`**        | `String`    | `'auto'`      | Height of the image container.                                    |

Let's assume you want to use the **`Image`** component, You can call it like this.

```php
<!-- Image Component -->
<x-admin::media.images
    name="images"
    allow-multiple="true"
    show-placeholders="true"
    :uploaded-images="$product->images"
/>
