# Blade Components

Krayin ships a library of reusable Blade components for the admin UI. Use them in your package's [views](./views.md) instead of writing the same form fields, tables, modals, and accordions from scratch &mdash; you get consistent styling, accessibility, and Vue-powered interactivity for free.

All components live in the **Admin** package's view namespace and are referenced with the `<x-admin::name>` syntax. For Blade-component fundamentals see the [Laravel docs](https://laravel.com/docs/11.x/blade#components).

## 🧩 Available components

Listed alphabetically. Each entry shows the props you'll pass, the slots (where relevant), and a runnable usage snippet.

### Accordion

A collapsible section with a clickable header.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `is-active` | Boolean | `false` | Whether the section is expanded on first render. |

| Slot | Purpose |
| --- | --- |
| `header` | Clickable header content. |
| `content` | Body content shown when expanded. |

```blade
<x-admin::accordion class="px-5">
    <x-slot:header class="bg-gray-200">
        Accordion Header
    </x-slot>

    <x-slot:content class="bg-green-200">
        Accordion Content
    </x-slot>
</x-admin::accordion>
```

### Activities

Renders the activity log for an entity (lead, contact, warehouse, …) with filtering by activity type and named slots for custom views.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `endpoint` | String | `''` | URL the component AJAX-fetches activities from. |
| `email-detach-endpoint` | String | `''` | URL for detaching an email from the log. |
| `active-type` | String | `'all'` | Activity type tab selected on first render. |
| `types` | Array | (built-in defaults) | Activity-type filters to show as tabs. |
| `extra-types` | Array | `[]` | Custom tabs appended after the built-in ones. |

| Slot | Purpose |
| --- | --- |
| `products` | Custom view for product-related activities. |
| `quotes` | Custom view for quote-related activities. |
| `description` | Custom view for the entity's description tab. |

```blade
<x-admin::activities
    :endpoint="route('admin.leads.activities.index', $lead->id)"
    :email-detach-endpoint="route('admin.leads.emails.detach', $lead->id)"
    :extra-types="[
        ['name' => 'description', 'label' => trans('admin::app.leads.view.tabs.description')],
        ['name' => 'products',    'label' => trans('admin::app.leads.view.tabs.products')],
        ['name' => 'quotes',      'label' => trans('admin::app.leads.view.tabs.quotes')],
    ]"
>
    <x-slot:products>
        @include('admin::leads.view.products')
    </x-slot>

    <x-slot:quotes>
        @include('admin::leads.view.quotes')
    </x-slot>

    <x-slot:description>
        <div class="p-4">{{ $lead->description }}</div>
    </x-slot>
</x-admin::activities>
```

### Attachment

File-upload widget with multi-select, server-side validation rule passthrough, and a list of already-uploaded files.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | `'attachments'` | Form field name. |
| `validations` | String | `''` | Laravel validation rules (e.g. `required|mimes:pdf|max:2048`). |
| `uploaded-attachments` | Array | `[]` | Existing attachments to render. |
| `allow-multiple` | Boolean | `false` | Allow multiple files in one upload. |
| `hide-button` | Boolean | `false` | Hide the upload button (use a custom trigger). |
| `errors` | Object | `{}` | Validation errors to display. |

```blade
<x-admin::attachments
    name="documentAttachments"
    validations="required|mimes:pdf,jpg,png|max:2048"
    :uploaded-attachments="$lead->documents"
    :allow-multiple="true"
    :hide-button="false"
    :errors="$errors->toArray()"
/>
```

### Avatar

Generates a coloured avatar showing the initials of a name.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | required | Full name. *"John Doe"* renders as **JD**. |

```blade
<x-admin::avatar name="John Doe" />
```

### Button

Button with a built-in loading-spinner state.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `title` | String | required | Visible label. |
| `loading` | Boolean | `false` | Show the spinner and disable the button. |
| `button-type` | String | `'button'` | HTML button type (`button`, `submit`, `reset`). |
| `button-class` | String | `''` | Additional CSS classes. |

```blade
<x-admin::button
    type="submit"
    class="secondary-button w-full max-w-full max-md:py-3"
    button-type="secondary-button"
    :loading="false"
    :title="trans('Save')"
/>
```

### DataGrid

Renders a sortable / filterable / paginated table fed by JSON from your controller. See the [DataGrid guide](./datagrid.md) for the full server-side flow.

```blade
<x-admin::datagrid :src="route('admin.examples.index')" />
```

### Drawer

Slide-out panel from any edge of the screen.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `is-active` | Boolean | `false` | Open the drawer on first render. |
| `position` | String | `'left'` | `top`, `bottom`, `left`, `right`. |
| `width` | String | `'500px'` | Drawer width (or height for top/bottom). |

| Slot | Purpose |
| --- | --- |
| `toggle` | Element that opens the drawer when clicked. |
| `header` | Drawer header content. |
| `content` | Main body content. |
| `footer` | Drawer footer content. |

```blade
<x-admin::drawer position="left" width="100%">
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header class="bg-red-100">
        Drawer Header
    </x-slot>

    <x-slot:content class="!p-5">
        Drawer Content
    </x-slot>
</x-admin::drawer>
```

### Dropdown

Click-to-open menu anchored to a toggle.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `close-on-click` | Boolean | `true` | Close the menu when clicking outside. |
| `position` | String | `'bottom-left'` | `top-left`, `top-right`, `bottom-left`, `bottom-right`. |

| Slot | Purpose |
| --- | --- |
| `toggle` | Trigger element. |
| `content` | Free-form dropdown content. |
| `menu` | Menu-item list (use `<x-admin::dropdown.menu.item>`). |

```blade
<x-admin::dropdown position="bottom-left">
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:menu>
        <x-admin::dropdown.menu.item>Menu Item 1</x-admin::dropdown.menu.item>
        <x-admin::dropdown.menu.item>Menu Item 2</x-admin::dropdown.menu.item>
    </x-slot>
</x-admin::dropdown>
```

### Flat-Picker

Date and date-time picker, built on [Flatpickr](https://flatpickr.js.org/).

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | required | Form field name. |
| `value` | String | `null` | Initial value. |
| `allow-input` | Boolean | `true` | Allow typing into the input. |
| `disable` | Array | `[]` | Dates to disable. |

```blade
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

### Inline Editable

Click-to-edit field with optional server-save endpoint.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | required | Field name / identifier. |
| `value` | Mixed | required | Current value. |
| `rules` | String | `''` | [VeeValidate v4](https://vee-validate.logaretm.com/v4/) rules. |
| `label` | String | `''` | Label rendered next to the input. |
| `placeholder` | String | `''` | Placeholder text. |
| `position` | String | `'right'` | Input position relative to the label (`left` / `right`). |
| `allow-edit` | Boolean | `true` | Make the field read-only when `false`. |
| `errors` | Object | `{}` | Validation errors to display. |
| `url` | String | `''` | Endpoint that receives the new value on save. |
| `params` | Object | `{}` | Extra params sent with the save request. |
| `value-label` | String | `''` | Display label for complex values. |

```blade
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

### Lookup

Search-as-you-type select bound to a JSON endpoint, with an optional "add new" affordance.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `src` | String | required | Endpoint that returns matching results. |
| `params` | Object | `{}` | Extra query params on each request. |
| `name` | String | required | Form field name. |
| `placeholder` | String | required | Placeholder text. |
| `value` | Object | `{}` | Pre-selected value. |
| `rules` | String | `''` | Laravel validation rules. |
| `label` | String | `''` | Label above the input. |
| `can-add-new` | Boolean | `false` | Show an "Add new" option in the dropdown. |

```blade
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

### Media

Image / file gallery widget with upload, edit, delete.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | required | Form field name. |
| `allow-multiple` | Boolean | `false` | Allow more than one image. |
| `show-placeholders` | Boolean | `true` | Show placeholder thumbnails when empty. |
| `uploaded-images` | Array | `[]` | Existing images to render. |
| `width` | String | `'100%'` | Width of the image container. |
| `height` | String | `'auto'` | Height of the image container. |

```blade
<x-admin::media.images
    name="images"
    allow-multiple="true"
    show-placeholders="true"
    :uploaded-images="$product->images"
/>
```

### Modal

Centered overlay dialog with header / content / footer slots.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `is-active` | Boolean | `false` | Open on first render. |

| Slot | Purpose |
| --- | --- |
| `toggle` | Element that opens the modal when clicked. |
| `header` | Modal header content. |
| `content` | Modal body content. |
| `footer` | Modal footer content. |

```blade
<x-admin::modal>
    <x-slot:toggle>
        Open Modal
    </x-slot>

    <x-slot:header>
        Modal Header
    </x-slot>

    <x-slot:content>
        Modal Content
    </x-slot>
</x-admin::modal>
```

### Shimmer

Pre-built skeleton loaders for various surfaces, used while async data is loading.

```blade
<x-admin::shimmer.datagrid />
```

### Table

Building blocks for a structured static table (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`). Use this for tables that don't need DataGrid features (sorting, filtering, pagination); otherwise use `<x-admin::datagrid>`.

```blade
<x-admin::table>
    <x-admin::table.thead>
        <x-admin::table.thead.tr>
            <x-admin::table.th>Heading 1</x-admin::table.th>
            <x-admin::table.th>Heading 2</x-admin::table.th>
            <x-admin::table.th>Heading 3</x-admin::table.th>
        </x-admin::table.thead.tr>
    </x-admin::table.thead>

    <x-admin::table.tbody>
        <x-admin::table.tbody.tr>
            <x-admin::table.td>Column 1</x-admin::table.td>
            <x-admin::table.td>Column 2</x-admin::table.td>
            <x-admin::table.td>Column 3</x-admin::table.td>
        </x-admin::table.tbody.tr>
    </x-admin::table.tbody>
</x-admin::table>
```

### Tag

Add / remove tags on any taggable entity (leads, mails, …).

| Prop | Type | Purpose |
| --- | --- | --- |
| `attach-endpoint` | String | URL to POST when a tag is added. |
| `detach-endpoint` | String | URL to POST when a tag is removed. |
| `added-tags` | Array | Tags already on the entity. |

```blade
<x-admin::tags
    :attach-endpoint="route('admin.leads.tags.attach', $lead->id)"
    :detach-endpoint="route('admin.leads.tags.detach', $lead->id)"
    :added-tags="$lead->tags"
/>
```

### Tinymce

TinyMCE rich-text editor wrapper with built-in AI content generation.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `selector` | String | `''` | CSS selector for the `<textarea>` to initialise. |
| `field` | Object | `{}` | Form-field metadata. |

Use it via the form control-group with `:tinymce="true"`:

```blade
<x-admin::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="trans('admin::app.content')"
    :placeholder="trans('admin::app.content')"
    :tinymce="true"
/>
```

### Tree

Hierarchical checkbox / radio tree.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `input-type` | String | `'checkbox'` | `checkbox` or `radio`. |
| `selection-type` | String | `'hierarchical'` | `hierarchical` (selecting a node selects its children) or `individual`. |
| `name-field` | String | `'permissions'` | Form field name for selected values. |
| `value-field` | String | `'value'` | Key in each node holding the value. |
| `id-field` | String | `'id'` | Key in each node holding the unique id. |
| `label-field` | String | `'name'` | Key in each node holding the display label. |
| `children-field` | String | `'children'` | Key in each node holding its child list. |
| `items` | Array / String / Object | `[]` | Hierarchical data. |
| `value` | Array / String / Object | `[]` | Currently selected values. |
| `fallback-locale` | String | `'en'` | Fallback locale for translated labels. |
| `collapse` | Boolean | `false` | Start collapsed instead of expanded. |

```blade
<x-admin::tree.view
    input-type="checkbox"
    selection-type="individual"
    name-field="examples"
    id-field="id"
    value-field="id"
    ::items="examples"
    :value="$product->tags->pluck('id')"
    :fallback-locale="config('app.fallback_locale')"
    :collapse="true"
/>
```

## 📝 Notes

- Every component is namespaced under `admin::`. There is no separate shop / customer namespace &mdash; Krayin is an admin-only CRM.
- Components are defined in [`packages/Webkul/Admin/src/Resources/views/components/`](https://github.com/krayin/laravel-crm/tree/2.2/packages/Webkul/Admin/src/Resources/views/components) &mdash; clone the repo and browse if you need to read the source or extend a component.
- For deeper Blade-component guidance (slots, attributes, anonymous components), see the [Laravel Blade docs](https://laravel.com/docs/11.x/blade#components).
