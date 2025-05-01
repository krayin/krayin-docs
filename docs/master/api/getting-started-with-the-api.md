# Krayin APIs

[[toc]]

## REST API

Krayin REST API is a medium to use the features of the core Krayin System. By using Krayin REST API, you can integrate your application to serve the default content of Krayin.

## Explore REST API Demo

Welcome to our API demo! Dive into the interactive showcase of our API functionalities to get a hands-on experience of how our platform works. Click the Link below to access the demo:

[Access API Demo](https://apidoc.krayincrm.com/api/documentation)

#### Click the Link below to access Admin API documentation 

[Admin](https://apidoc.krayincrm.com/admin/login)

#### Installation of REST API

To install Krayin REST API, you need to follow some steps.

- To install Krayin REST API from your console:

~~~
composer require krayin/rest-api
~~~

- Add below options in the .env file (i.e. http://localhost/public your domain):

~~~
SANCTUM_STATEFUL_DOMAINS=http://localhost/public
~~~

- To configure the REST API L5-Swagger Documentation run below command:

~~~
php artisan krayin-rest-api:install
~~~

- To check the Admin end API documentation:

~~~
http://localhost/public/api/admin/documentation
~~~

* You can check the <a href="https://github.com/DarkaOnLine/L5-Swagger"> L5-Swagger </a> guidelines too regarding the configuration the API documentation.
