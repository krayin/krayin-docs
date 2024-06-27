# Installation

[[TOC]]

## Install Using Composer

To install Krayin using Composer, use the following steps:

- Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory.

- Once you are in the desired directory, run the following command in your terminal to install Krayin:

- Run the following command:

    ```sh
    composer create-project krayin/laravel-crm
    ```

- Run the following command:

    ```sh
    php artisan krayin-crm:install
    ```

    ::: warning
    During the installation process, if the **`.env`** file doesn't exist, the installer will prompt you to provide the necessary information.
    :::

- Follow the prompts during the installation process to provide the following details:

    ```sh
    - Please enter the application name : 
    - Please enter the application URL : 
    - Please select the default application locale : 
    - Please select the default currency : 
    - Please select the database connection : 
    - Please select the database host : 
    - Please select the database name : 
    - Please enter your database username : 
    - Please enter your database password : 
    ```

- For Create your admin credentials
    ```sh
    - Enter the name of the admin user :
    - Enter the email address of the admin user :
    - Configure the password for the admin user :
    ```

## Start Using Krayin

### On a Production Server

To access Krayin on a production server, open your domain in a web browser. For example:

```
https://example.com/
```

### On Your Local Server

To access Krayin on your local server, follow these steps:

1. Configure your HTTP server to point to the **`public/`** directory of the project.
2. Run the following command:

    ```sh
    php artisan serve
    ```

3. Open your browser and access the provided local server URL.

### Login as an Admin

To log in as an admin, visit **`https://example.com/admin/`**. If you used the **`php artisan krayin-crm:install`** command, use the following credentials:

```text
Email: admin@example.com
Password: admin123
```

### Contributing

Contributions are welcome! Follow the contribution guidelines to get started.

### License

Krayin is open-sourced software licensed under the MIT license.sir mujhe 
