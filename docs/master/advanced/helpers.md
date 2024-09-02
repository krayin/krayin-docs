# Helpers

[[TOC]]

## Introduction

Krayin provides a range of helper methods in its packages to streamline and simplify the development process. These helpers are designed to offer utility functions that facilitate common tasks, reducing the amount of boilerplate code developers need to write and enhancing overall productivity.

## Core Helpers

The core helper methods are part of the Core class in the `Webkul\Core` namespace. These methods provide essential functionality that can be utilized across different parts of the application, making development more efficient and consistent. Let's explore some common methods:

### Get the lists of timezone

To retrieve a list of timezones in the CRM, you can use the `core()->timezones()` method, which returns the list of timezones.

```php
core()->timezones();
```

### Get the list of available locals

To retrieve a list of available local in the CRM, you can use the `core()->locales()` method, which return the list of available locales

```php
core()->locales();
```

### Get the list of countries

To retrieve a list of countries in the CRM, you can use the `core()->countries()` method, which returns the list of all countries within the CRM.

```php
core()->countries();
```

### Get the country name

To retrieve the country name by its country code, you can use the `core()->country_name($code)` method, which returns the name of the country associated with the specified country code.

```php
core()->country_name($code);
```

### Get the available states associated with country code

To retrieve a list of states associated with states in the CRM, you can use the `core()->states($countryCode)` method, which returns the all states associated with the country code.

```php
core()->states($countryCode);
```

### Get the specified state name associated with state code

To retrieve the state name by its state code, you can use the `core()->state_name($code)` method, which returns the name of the state name associated with the specified state code.

```php
core()->state_name($code);
```

### Get the Grouped the states by the countries

To retrieve the grouped the states by the countries, you can use the `core()->findStateByCountryCode($countryCode, $stateCode)` which takes two argument `$countryCode` and `$stateCode`.

```php
core()->findStateByCountryCode($countryCode, $stateCode);
```

### Create singleton object through single facade

You can use the core method for singleton binding through the core helper methods.

```php
core()->getSingletonInstance($className)
```

### Format Date

You can use `core()->formatDate($date, $format = 'd M Y h:iA')` method to format the provided date, you can modify the format date structure by passing second argument.

```php
core()->formatDate($date, $format);
```

### Return currency symbol from currency code

To get the symbol of current currency int the crm you can use the method of core helper

```php
core()->currencySymbol($code);
```

### Format base price

To format the price of provided price you can use the method `core()->formatBasePrice()`

```php
core()->formatBasePrice($price);
```

### Get the config field

To get the config field you can use the `core()->getConfigField($fieldName)`

```php
core()->getConfigField($fieldName);
```

### Get the config data

To retrieve the config data you can use the method `core()->getConfigData($field)`

```php
core()->getConfigData($field);
```

These core helper methods provide various functionalities to simplify common tasks and streamline development in Krayin.