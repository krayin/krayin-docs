# Custom Attributes

Krayin is **attribute-driven**. The fields you see on a Lead, Person, Organization, Product, Quote, or Warehouse are not hard-coded &mdash; each one is an `Attribute` record an admin can create, edit, or delete without touching code.

This section covers both sides of the system: how admins add new fields, and how package developers register *their own* entities so the attribute system can attach custom fields to them too.

## What's in this section

- [Create and Use an Attribute](./custom-attribute.md) &mdash; the admin flow. Pick a type (text, textarea, price, boolean, date, datetime, email, phone, select, multiselect, lookup, image, file, address, or **subheading**), wire it to an entity, optionally mark it for the **Quick Add** modal, and arrange it inside an Attribute Group.
- [Make a Model Use Custom Attributes](./model-custom-attribute.md) &mdash; the package-developer flow. Register your entity type via `Config/attribute_entity_types.php`, add the `CustomAttribute` trait, and persist values through `AttributeValueRepository::save($data, $id)`.

## Quick links

| You want to... | Go to |
| --- | --- |
| Add a new field to Leads / Persons / etc. | [Create and Use an Attribute](./custom-attribute.md) |
| Make a field appear in the Quick Add modal | [Quick Add](./custom-attribute.md#quick-add) |
| Group fields visually on a form | [Subheading](./custom-attribute.md#-subheading) |
| Let your own entity have custom attributes | [Make a Model Use Custom Attributes](./model-custom-attribute.md) |
| React when admins add a new attribute | [Events Listeners &mdash; settings.attribute.create.after](../digging-deeper/events.md#settings-attributes) |

## How it fits together

| Piece | Lives in | What it does |
| --- | --- | --- |
| **Attribute** record | `attributes` table | Defines a field &mdash; code, type, entity it's attached to, validation flags. |
| **AttributeValue** record | `attribute_values` table | The actual value of one attribute for one entity record. |
| **`CustomAttribute` trait** | `Webkul\Attribute\Traits\CustomAttribute` | Adds attribute-value relationships and accessors to your Eloquent model. |
| **`AttributeValueRepository`** | `Webkul\Attribute\Repositories` | `save($data, $id)` persists every attribute value sent in `$data` for the entity with `$id`. |
| **`attribute_entity_types` config** | Merged from each package | Lists every entity type the admin can attach attributes to. |
| **Attribute Groups** | `attribute_groups` table | Layout: which attributes appear together on the create/edit form, and in what order. |
