# Helpers

Krayin's **Core** package ships a `core()` global helper that wraps the most common cross-package utilities &mdash; locales, timezones, country/state lookups, currency formatting, config access, singleton resolution. Use it instead of newing up `Webkul\Core\Core` yourself.

This page is a reference for the helpers you'll reach for most often inside controllers, listeners, and Blade views.

```php
// Anywhere in your package:
$timezones = core()->timezones();
$amount    = core()->formatBasePrice(1299.50);
```

## 🌐 Locale &amp; timezone

### `core()->timezones()`

Returns the list of timezones the CRM knows about (typically what you'd render in a `<select>` on a user form).

```php
$timezones = core()->timezones();
```

### `core()->locales()`

Returns the locales enabled in the admin (used for the language switcher and for filtering translatable resources).

```php
$locales = core()->locales();
```

## 🗺️ Countries &amp; states

### `core()->countries()`

Returns the full country list (handy for address dropdowns).

```php
$countries = core()->countries();
```

### `core()->country_name($code)`

Resolve a country code (e.g. `'US'`) to its display name.

```php
$name = core()->country_name('US'); // "United States"
```

### `core()->states($countryCode)`

Returns the states/provinces for a given country code &mdash; the typical "states" dropdown driver.

```php
$states = core()->states('US');
```

### `core()->state_name($code)`

Resolve a state code to its display name.

```php
$name = core()->state_name('CA'); // "California"
```

### `core()->findStateByCountryCode($countryCode, $stateCode)`

Find a single state object scoped to a country &mdash; useful when state codes aren't globally unique.

```php
$state = core()->findStateByCountryCode('US', 'CA');
```

## 💱 Currency

### `core()->currencySymbol($code)`

Return the symbol for a currency code (e.g. `'USD'` &rarr; `'$'`).

```php
$symbol = core()->currencySymbol('USD');
```

### `core()->formatBasePrice($price)`

Format a numeric amount in the configured base currency, with the right symbol and decimal separators.

```php
echo core()->formatBasePrice(1299.50); // "$1,299.50"
```

## 📅 Dates

### `core()->formatDate($date, $format = 'd M Y h:iA')`

Format a Carbon/DateTime instance using the admin's preferred format. Override the format string if you need something custom.

```php
echo core()->formatDate($lead->created_at);
echo core()->formatDate($lead->created_at, 'Y-m-d');
```

## ⚙️ Config

### `core()->getConfigField($fieldName)`

Return the full field definition (label, type, options...) for an admin config field. Use this when you're building UI that mirrors a config field.

```php
$field = core()->getConfigField('general.locale_settings.timezone');
```

### `core()->getConfigData($field)`

Return the *value* a user has saved for a config field. This is the one you reach for 95% of the time.

```php
$timezone = core()->getConfigData('general.locale_settings.timezone');
```

## 🧱 Singleton resolution

### `core()->getSingletonInstance($className)`

Resolve (or lazily create) a singleton from the container by class name &mdash; convenient when you want a single shared instance of a service across a request.

```php
$service = core()->getSingletonInstance(\Webkul\Example\Services\Reporter::class);
```

## 🧪 Verify

Drop any of these into a controller, listener, or Blade view to confirm the helper is reachable:

```php
dd(core()->countries());
```

If you get a "function not found" error, the `Core` package isn't loaded &mdash; check `bootstrap/providers.php` for `Webkul\Core\Providers\CoreServiceProvider`.

## 📝 Next steps

- [Events Listeners](./events.md) &mdash; the events you'll often call these helpers from.
- [Override a Layout](./override-a-layout.md) &mdash; customising core views; helpers are useful inside published blade files.
