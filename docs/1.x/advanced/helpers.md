# Helpers

[[TOC]]

## Introduction

Krayin provides several helper methods in its packages, which are designed to assist developers in building their projects more efficiently.

## Core Helpers

The core helper methods mentioned below are part of the `Core` class in the `Webkul\Core` namespace. Let's explore some common methods:

- **Get currency symbol from currency code.**

```php
core()->currencySymbol($amount)
```

- **Format and convert price with currency symbol.**

- **Format price with base currency symbol. This method also give ability to encode the base currency symbol and its optional.**

```php
core()->formatBasePrice($price, $isEncoded = false)
```
- **Format date using current channel.**

```php
core()->formatDate($date = null, $format = 'd-m-Y H:i:s')
```

- **Retrieve information from configuration.**

```php
core()->getConfigData($field, $channel = null, $locale = null)
```

- **Retrieve all countries.**

```php
core()->countries()
```

- **Get country name by code.**

```php
core()->country_name($code)
```   

- **Retrieve all country states.**

```php
core()->states($countryCode)
```

- **Retrieve all grouped states by country code.**

```php
core()->groupedStatesByCountries()
```

- **Get states by country code.**

```php
core()->findStateByCountryCode($countryCode = null, $stateCode = null)
```

- **Method to sort through the acl items and put them in order.**

```php
core()->sortItems($items)
```

- **Get config field.**

```php
core()->getConfigField($fieldName)
```   

- **Convert to associative array.**

```php
core()->convertToAssociativeArray($items)
```

- **Array set.**

```php
core()->array_set(&$array, $key, $value)
```

- **Create singleton object through single facade.**

```php
core()->getSingletonInstance($className)
```

- **Array merge.**

```php
core()->arrayMerge(array &$array1, array &$array2)
``` 

These core helper methods provide various functionalities to simplify common tasks and streamline development in Krayin.