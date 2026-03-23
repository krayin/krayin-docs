# Installation

[[TOC]]

## Install Using GUI Installer

To install Krayin using our GUI installer, you can follow any of the following methods:

#### Method 1:

- Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory. 

- Once you are in the desired directory, run the following command in your terminal to install Krayin:

    ```sh
    composer create-project krayin/laravel-crm
    ```

- Configure your HTTP server to point to the **`public/`** directory of the project.

- Open your browser and access the following URL:

    ```
    http://localhost/krayin/public/
    ```

  This will launch the Krayin installer.

#### Method 2:

Otherwise you can download the zip file and install it using the following steps:

- [Download Krayin](https://krayincrm.com/download/) from our website.

- Extract the contents of the downloaded

- Navigate to the project root directory.

- Run the following command:

    ```sh
    composer create-project
    ```

- Configure your HTTP server to point to the **`public/`** directory of the project.

- Open your browser and access the following URL:

    ```
    http://localhost/krayin/public/
    ```

   This will launch the Krayin installer.

::: warning
Ensure that Composer is installed on your system
:::

## Install Using Composer

To install Krayin using Composer, use the following steps:

- Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory.

- Once you are in the desired directory, run the following command in your terminal to install Krayin:

- Run the following command:

    ```bash
    composer create-project krayin/laravel-crm
    ```

- Run the following command:

    ```bash
    php artisan krayin-crm:install
    ```

    ::: warning
    During the installation process, if the **`.env`** file doesn't exist, the installer will prompt you to provide the necessary information.
    :::

- Follow the prompts during the installation process to provide the following details:

    ```bash
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
    ```bash
    - Enter the name of the admin user :
    - Enter the email address of the admin user :
    - Configure the password for the admin user :
    ```

- Start Using Krayin On a Production Server

    - To access Krayin on a production server, open your domain in a web browser. For example:

    ```
    https://example.com/
    ```

- Start Using Krayin On a Production Server

    - To access Krayin on your local server, follow these steps:

    1. Configure your HTTP server to point to the **`public/`** directory of the project.
    2. Run the following command:

        ```bash
        php artisan serve
        ```

    3. Open your browser and access the provided local server URL.

- Login as an Admin

    To log in as an admin, visit **`https://example.com/admin/`**. If you used the **`php artisan krayin-crm:install`** command, use the following credentials:

    ```text
    Email: admin@example.com
    Password: admin123
    ```

## Installing Krayin on Shared Hosting

Follow these steps to install Krayin CRM on shared hosting:

#### 1. Download Krayin

Go to the [official website](https://krayincrm.com/download/) and download the latest version of Krayin CRM  in ZIP format..

#### 2. Extract the Contents

Unzip the downloaded file and extract the contents to your local machine.

#### 3. Upload Files to Your Hosting Account
 
Use an FTP client (e.g., FileZilla) or your hosting control panel's File Manager to upload all the extracted files, including hidden files (like .env.example), to the root directory (e.g., public_html) or a subdirectory of your hosting account (e.g., public_html/krayin).

#### 4. Set File Permissions

Make the following directories writable by setting appropriate permissions:

    - storage/
    - bootstrap/cache/

#### 5. Set Up a Database

Log in to your hosting control panel, create a new database, and assign a user with full privileges to this database. Note the database name, username, and password for later steps.

#### 6. Install Dependencies and Run Installer

- **With SSH Access:**

If your hosting account provides terminal or SSH access, navigate to the project root directory and execute the following commands:

```sh
composer create-project

php artisan krayin-crm:install
```

Provide the required details during the prompts, including application name, URL, locale, currency, database connection, and admin credentials.:

```bash
Please enter the application name : 
Please enter the application URL : 
Please select the default application locale : 
Please select the default currency : 
Please select the database connection : 
Please select the database host : 
Please select the database name : 
Please enter your database username : 
Please enter your database password : 
```

Next, create the admin user credentials:

```bash
Enter the name of the admin user: 
Enter the email address of the admin user:
Configure the password for the admin user:
```

- **Without SSH Access:**

    1. Run `composer install` locally on your machine.
    2. Upload the `vendor` directory to your hosting account via FTP.
    3. Update the `.env` file with your database and application details.

#### 7. Access the Application

Open your browser and visit the application URL (e.g., `http://yourdomain.com/`).

Now your application will be available in your browser.

## Docker Installation

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.

With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

#### Application Data and Database Volume Persistence

It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.
This compose configuration file mounts the application directory **`app`** and database volume **`dbvolume`** from the host to running Docker containers at the time of containers' launch.

### Docker Setup for Krayin

You can configure Krayin using Docker in two different ways:

1. [**Docker Image from Docker Hub**](https://hub.docker.com/r/webkul/krayin)
2. **Docker Compose (for Method 2)**

Both approaches allow you to set up the application quickly, managing all system requirements like Nginx, MySQL, and PHPMyAdmin within isolated containers. Below is a detailed guide for each method.

### 1. **Docker Image from Docker Hub**

Follow the steps below to set up Krayin using Docker Hub. This approach provides a pre-configured Docker image of Krayin, allowing for a quick and easy installation.

#### Step 1: Pull Krayin Docker Image

To pull the Krayin Docker image from Docker Hub, use the following command:

```bash
docker pull webkul/krayin:latest
```

#### Step 2: Run a New Container

Once the image is pulled, you can run a new Docker container using the command below. This will bind your local port 80 to the container’s port 80, so Krayin can be accessed via the browser.

```bash
docker run -d -p 80:80 --name krayin-container webkul/krayin:latest
```

> **Note:**
> If port 80 is already in use, you can try using a different port. For example, you can map port 8082 on your local machine to port 80 in the container by running the following command:
>
> ```bash
> docker run -it -d -p 8082:80 webkul/krayin:latest
> ```
> After this, you can access the application at `http://localhost:8082/` instead of `http://localhost:80`

#### Step 3: Access Krayin in Your Browser

After the container is up and running, open your browser and navigate to `http://localhost`. This will load the Krayin setup.

#### Step 4: Admin Login Credentials

Use the following credentials to log in to the Krayin admin panel:

- **Admin Username**: `admin@example.com`
- **Admin Password**: `admin123`

### 2. **Using Krayin GitHub Docker Repository**

#### System Requirements

The Krayin GitHub Docker repository automatically handles the system requirements for running Krayin, including the necessary Apache and MySQL configurations. Before proceeding, ensure that you have the latest version of **Docker** and **Docker Compose** installed. You can find installation instructions for your operating system at the following links:
- [Docker Installation Guide](https://docs.docker.com/install/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

#### Docker Configuration

1. **Adjust Ports and Paths**  
   Open the `docker-compose.yml` file and configure the ports for Apache, MySQL, and PHPMyAdmin. You can also specify the volumes and MySQL credentials. Here's an example configuration:

   ```yaml
   version: '3.1'

    services:
        krayin-php-apache:
            build:
                args:
                    container_project_path: /var/www/html/
                    uid: 1000 # add your uid here
                    user: $USER
                context: .
                dockerfile: ./Dockerfile
            image: krayin-php-apache
            ports:
                - 80:80 # adjust your port here, if you want to change
            volumes:
                - ./workspace/:/var/www/html/

        krayin-mysql:
            image: mysql:8.0
            command: --default-authentication-plugin=mysql_native_password
            restart: always
            environment:
                MYSQL_ROOT_HOST: '%'
                MYSQL_ROOT_PASSWORD: root
            ports:
                - 3306:3306 # adjust your port here, if you want to change
            volumes:
                - ./.configs/mysql-data:/var/lib/mysql/

        krayin-phpmyadmin:
            image: phpmyadmin:latest
            restart: always
            environment:
                PMA_HOST: krayin-mysql
                PMA_USER: root
                PMA_PASSWORD: root
            ports:
                - 8080:80 # adjust your port here, if you want to change

    volumes:
        mysql-data:
   ```

2. **Running the Setup**  
   After adjusting the configurations, execute the following command to start the Docker containers:
   ```bash
   sh setup.sh
   ```

#### Accessing Krayin

- **Admin Panel**  
  Access the admin panel at:  
  `http(s)://your_server_endpoint/admin/login`  
  Use the default credentials:
  - **Email**: `admin@example.com`
  - **Password**: `admin123`

- **Customer Registration**  
  Register and log in as a customer at:  
  `http(s)://your_server_endpoint/customer/register`

