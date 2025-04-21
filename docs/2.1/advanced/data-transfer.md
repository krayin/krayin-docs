[[TOC]]

### Introduction

The **Data Transfer Module** allows you to import large amounts of data from CSV files into your application, with support for leads, products, and persons entities. This module leverages Laravel's queue feature for efficient handling of large datasets, ensuring seamless imports even in high-volume scenarios. Additionally, it includes comprehensive validation and error-handling strategies to provide flexibility in dealing with data integrity.

### Features

- **Queue and Non-Queue Based Import**: Supports importing via Laravel queues for background processing or direct imports for smaller datasets(Without Queue/Sync).
- **CSV Data Validation**: Validate CSV data before importing to ensure data integrity.
- **Validation Strategies**: Choose between different strategies to handle data errors (`Stop on Error`, `Skip Errors`).
- **CSV Delimiter Customization**: Support for different CSV delimiters.
- **Allowed Errors**: Configure the number of allowable errors before the process fails.
- **CRUD Actions**: Supports Create, Update, and Delete operations.

### Usage

#### Importing Data

The module can import data for **Leads**, **Products**, and **Persons** entities from CSV files. You can run the import with or without Laravel's queue feature, depending on your dataset size.

##### Import without Queue

If you prefer to import data without utilizing a queue system, you can achieve this by turning off the queue processing functionality. 

##### Import with Queue

If you prefer to import data utilizing a queue system, you can achieve this by turning on the queue processing functionality. 

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

### Queue Configuration

If you are using queues for import, make sure your Laravel queue worker is running:

```bash
php artisan queue:work
```

You can adjust the queue settings in the `config/queue.php` file if needed.

### Conclusion

The **Data Transfer Module** provides a robust solution for importing large datasets into your Krayin application, with flexible options for validation, error handling, and queue-based processing. Whether you're importing millions of records or just a few, this module simplifies the process while ensuring data integrity and flexibility.