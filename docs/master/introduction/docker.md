# Docker

[[toc]]

## Introduction

[Docker](https://www.docker.com/) is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.

With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in [YAML](https://en.wikipedia.org/wiki/YAML) format.

#### Application Data and Database Volume Persistence

It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.
This compose configuration file mounts the application directory **`app`** and database volume **`dbvolume`** from the host to running Docker containers at the time of containers' launch.

### Docker Setup for Krayin

You can configure Krayin using Docker in two different ways:

1. **Using Krayin Docker Image from Docker Hub**
2. **Using Krayin GitHub Docker Repository**

Both approaches allow you to set up the application quickly, managing all system requirements like Apache, MySQL, and PHPMyAdmin within isolated containers. Below is a detailed guide for each method.

### 1. **Using Krayin Docker Image from Docker Hub**

Follow the steps below to set up Krayin using Docker Hub. This approach provides a pre-configured Docker image of Krayin, allowing for a quick and easy installation.

#### Step 1: Pull Krayin Docker Image

To pull the Krayin Docker image from Docker Hub, use the following command:

```bash
docker pull webkul/krayin:2.0.1
```

#### Step 2: Run a New Container

Once the image is pulled, you can run a new Docker container using the command below. This will bind your local port 80 to the container’s port 80, so Krayin can be accessed via the browser.

```bash
docker run -it -d -p 80:80 webkul/krayin:2.0.1
```

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
