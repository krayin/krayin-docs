# Dashboard Reporting

[[TOC]]

The dashboard reports on a period the user chooses with a single date range control, and every section on the page follows that same period. The figures are produced by reporting helpers under `Webkul\Admin\Helpers\Reporting`.

## 🧱 The reporting helpers

Each helper covers one subject and extends `AbstractReporting`:

| Helper | Reports on |
| --- | --- |
| `Lead` | Lead counts, stages and value. |
| `Quote` | Quotes raised over the period. |
| `Person` | The contacts bringing in the most revenue. |
| `Product` | The products sold most over the period. |
| `Activity` | Activities logged over the period. |
| `Organization` | Organization figures. |

`AbstractReporting` holds the period itself, so a helper only writes the query for its own subject.

## ⚙️ The period

The base class keeps a current period and the one immediately before it, which is what lets every section show a change against the previous period.

| Method | Returns |
| --- | --- |
| `getStartDate()` / `getEndDate()` | The period being reported on. |
| `getLastStartDate()` / `getLastEndDate()` | The period immediately before it, of the same length. |
| `getPercentageChange($previous, $current)` | The change between the two. |

### Setting the period

```php
$reporting = app(\Webkul\Admin\Helpers\Reporting\Lead::class)
    ->setStartDate($startDate)
    ->setEndDate($endDate);
```

Two rules are applied as the dates are set:

- **An end date in the future is pulled back to now.** There is nothing yet to report on beyond today.
- **An inverted range is corrected.** If the start date is later than the end date, the start is pulled back to the end date, so a reversed range reports on a single day rather than returning nothing.

::: warning Set the start date before the end date
The inverted-range correction runs inside `setEndDate()` and adjusts the start. Calling them the other way round leaves the range uncorrected.
:::

## 📝 Grouping over time

`getTimeInterval()` splits the period into points for a chart, choosing the grouping from the length of the range:

```php
$reporting->getTimeInterval($startDate, $endDate, 'created_at', $period);
```

Passing `'auto'` picks the grouping from the length of the range:

| Range | Grouped by | SQL grouping |
| --- | --- | --- |
| More than 5 months | Months | `MONTH(created_at)` |
| More than 6 weeks | Weeks | `WEEK(created_at)` |
| Less than 6 weeks | Days | `DAYOFYEAR(created_at)` |

It returns both the grouping column and the intervals to plot:

```php
[
    'group_column' => 'DAYOFYEAR(created_at)',
    'intervals' => [...],
]
```

## 🔒 Scoping a report to the user

A helper that reports on records belonging to users should restrict its query to the acting user's data scope. `bouncer()->getAuthorizedUserIds()` returns `null` for a user who may see everything, and the ids they are limited to otherwise:

```php
->when(
    ($userIds = bouncer()->getAuthorizedUserIds()) !== null,
    fn ($query) => $query->whereIn('leads.user_id', $userIds)
)
```

::: warning Scope every helper that reports on owned records
A helper without this clause reports across the whole installation, so a user restricted to their own records still sees global figures. `Person` and `Product` apply it; check any helper you add, and any you extend.
:::

## 🧩 Adding your own report

### 1. Extend the base class

```php
<?php

namespace Webkul\Example\Helpers\Reporting;

use Webkul\Admin\Helpers\Reporting\AbstractReporting;

class Example extends AbstractReporting
{
    public function getTotalExamplesOverTime($period = 'auto'): array
    {
        return $this->getTimeInterval(
            $this->getStartDate(),
            $this->getEndDate(),
            'created_at',
            $period
        );
    }
}
```

### 2. Read the period from the base class

Use `getStartDate()` and `getEndDate()` rather than reading the request, so your report follows the same control as the rest of the page.

### 3. Verify

```bash
php artisan tinker --execute="\$r = app(Webkul\Admin\Helpers\Reporting\Lead::class)->setStartDate(now()->subDays(30))->setEndDate(now()); echo \$r->getStartDate().' to '.\$r->getEndDate();"
```
