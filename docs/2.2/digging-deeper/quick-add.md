# Quick Add

[[TOC]]

**Quick Add** is the **+** button in the admin header. It creates a record from a short form without leaving the current page, and covers leads, quotes, contacts, organizations, products and mail.

Two things decide what a user sees there: an **ACL permission** per option, and the **attributes** marked for quick add on that entity.

## 🔒 Permissions

Each option is guarded by its own `quick-create` permission, declared in `packages/Webkul/Admin/src/Config/acl.php` beside the section's other permissions:

```php
[
    'key' => 'leads.create.quick-create',
    'name' => 'admin::app.acl.quick_add',
    'route' => ['admin.leads.create', 'admin.leads.store'],
    'sort' => 1,
],
```

The keys the core ships with:

| Option | Permission key |
| --- | --- |
| Lead | `leads.create.quick-create` |
| Quote | `quotes.create.quick-create` |
| Person | `contacts.persons.create.quick-create` |
| Organization | `contacts.organizations.create.quick-create` |
| Product | `products.create.quick-create` |
| Mail | `mail.compose.quick-create` |

The header checks each one before rendering its option:

```php
$canCreateLead = bouncer()->hasPermission('leads.create.quick-create');
```

A role holding none of them sees no **+** button at all.

::: tip Permission keys are hierarchical
`leads.create.quick-create` sits under `leads.create`, so a role is granted quick add separately from full create. That lets you give a user the short form without the full page, or the reverse.
:::

## 🗂️ Which fields appear

A Quick Add form is not a hardcoded field list. It renders the attributes of that entity whose `quick_add` flag is set, so the form stays short and is configurable per installation:

```php
<x-admin::attributes
    :custom-attributes="app('Webkul\Attribute\Repositories\AttributeRepository')->findWhere([
        'entity_type' => 'leads',
        'quick_add' => 1,
    ])"
/>
```

The same flag is exposed in the admin under **Settings → Attributes**, so an administrator can add or remove a field from the short form without touching code.

### Add your own attribute to Quick Add

Set `quick_add` when creating the attribute in a migration:

```php
$attribute = $this->attributeRepository->create([
    'code' => 'budget',
    'name' => 'Budget',
    'type' => 'price',
    'entity_type' => 'leads',
    'quick_add' => 1,
    'is_user_defined' => 1,
]);
```

## 🧩 Handling a quick-add submission

The form posts the same route as the full create page, with a `quick_add` field naming the entity:

```html
<input type="hidden" name="quick_add" value="lead" />
```

A controller can then relax the rules that only apply to the full form. The quote controller does exactly this, because a quote started from Quick Add carries no line items:

```php
if (! request()->has('quick_add')) {
    $this->additionalValidation();
}
```

::: warning A record created through Quick Add may be incomplete
Quick Add deliberately collects less than the full form, so anything your repository does unconditionally with an optional section has to tolerate its absence. Creating a quote without `items` used to fail on a missing array key for this reason.
:::

## 🪄 Verify

Check which attributes a form will render:

```bash
php artisan tinker --execute="echo Webkul\Attribute\Models\Attribute::where('entity_type','leads')->where('quick_add',1)->pluck('name');"
```

Check whether the signed-in role holds a permission:

```php
bouncer()->hasPermission('quotes.create.quick-create');
```
