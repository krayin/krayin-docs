[[TOC]]

### Introduction

The **Data Transfer Module** allows you to import large amounts of data from CSV files into your application, with support for leads, products, and persons entities. This module leverages Laravel's queue feature for efficient handling of large datasets, ensuring seamless imports even in high-volume scenarios. Additionally, it includes comprehensive validation and error-handling strategies to provide flexibility in dealing with data integrity.

### Features

1. **Queue and Non-Queue Based Import**: Supports importing via Laravel queues for background processing or direct imports for smaller datasets(Without Queue/Sync).
2. **CSV Data Validation**: Validate CSV data before importing to ensure data integrity.
3. **Validation Strategies**: Choose between different strategies to handle data errors (`Stop on Error`, `Skip Errors`).
4. **CSV Delimiter Customization**: Support for different CSV delimiters.
5. **Allowed Errors**: Configure the number of allowable errors before the process fails.
6. **CRUD Actions**: Supports Create, Update, and Delete operations.

### Usage

### Importing Data

The module can import data for **Leads**, **Products**, and **Persons** entities from CSV files. You can run the import with or without Laravel's queue feature, depending on your dataset size.

#### 1. Import without Queue

If you prefer to import data without utilizing a queue system, you can achieve this by turning off the queue processing functionality.

::: tip Note
This is not recommended for large datasets.
:::

#### 2. Import with Queue

To import data using a queue system, enable queue processing and ensure the Laravel queue worker is running on your server. For automatic handling, use Supervisor to keep the queue worker running in the background.

You can install Supervisor with this command:

```bash
sudo apt-get install supervisor
````

After installing, go to the `/etc/supervisor/conf.d` directory and create a file like `laravel-worker.conf`. Here's an example configuration:

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path-to-your-project/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=your-username
numprocs=8
redirect_stderr=true
stdout_logfile=/path-to-your-project/worker.log
stopwaitsecs=3600
```

Make sure to update the `command`, `user`, and paths (`/path-to-your-project/`) according to your server setup.

> **Note**: `stopwaitsecs` should be set longer than your longest running job to prevent jobs from getting killed early.

After creating the config, run these commands to activate it:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start "laravel-worker:*"
```

Or, if you don't want to set up Laravel Supervisor, you can manually run the queue worker using the terminal by executing the following command:

```bash
php artisan queue:work
```

### Validation

Before importing the CSV data, the module validates the records based on the rules defined for each entity. There are two validation strategies you can choose from:

#### Validation Strategies

1. **Stop on Errors**: This strategy will halt the import process when an error is encountered.
2. **Skip Errors**: This strategy skips the rows with errors and continues importing the valid data.

#### CSV Delimiter

The default delimiter is a comma (`,`). If your CSV uses a different delimiter, you can specify it during the import:

### Error Handling

You can configure the number of allowable errors before the process fails. If the error threshold is met, the import will be terminated and shows to display.
Errors during the import process are logged, and a detailed report is generated, showing which rows failed and why.

### CRUD Actions

The module supports three main actions during the import process:

1. **Create**: Add new records. If records do not exist, new records will be created.

2. **Update**: Update existing records if they match based on the identifier. If records exist, they will be updated.

3. **Delete**: Remove records based on the provided data. If records exist, they will be deleted, Before importing. If the data does not exist, a validation error will be displayed.

### Edit Import Data

Before finalizing the import, you can review and edit the data. The system allows you to preview the imported data and make corrections if needed.

You can adjust the queue settings in the `config/queue.php` file if needed.

### Conclusion

The **Data Transfer Module** provides a robust solution for importing large datasets into your Krayin application, with flexible options for validation, error handling, and queue-based processing. Whether you're importing millions of records or just a few, this module simplifies the process while ensuring data integrity and flexibility.
