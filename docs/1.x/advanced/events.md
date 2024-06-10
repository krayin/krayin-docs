# Event Listeners

[[TOC]]

## Introduction

Event Listeners in Krayin are a way to implement the observer pattern, where listeners respond to events that occur in the application. Events can be thought of as announcements made by the application, and listeners are the actions taken in response to those announcements. All event classes in Krayin are stored in the **Providers** folder, and the listeners are stored in the **Listeners** folder.

## Creating an Event Class

If you have the Krayin Package Generator installed, you can use the following command to create a new event class in the **`packages/Webkul/Blog/src/Events`** directory:

```sh
php artisan package:make-event BlogEvent Webkul/Blog
```

If the event class already exists, you can use the **`--force`** option to overwrite it:

```sh
php artisan package:make-event BlogEvent Webkul/Blog --force
```

Alternatively, if you don't have the package generator, you can create the file manually.

## Manually Registering Events

In Krayin, events are manually registered in the **`boot`** method of your **`EventServiceProvider.php`** file. Here is an example of how to register events:

```php
/**
 * Register any other events for your application.
 *
 * @return void
 */
public function boot()
{
    //...

    Event::listen('event.name', 'path-upto-listener@function');
}
```

## Manually Registering Listeners

When registering events, you specify the listener function to be executed when an event is called. Here is an example of how to register a listener:

```php
class EventServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //...

        Event::listen('event.name', 'path-upto-listener@function');
    }
}
```

## Specifying Events

In most CRUD operations, events are fired before and after the execution of a function. This allows listeners to perform additional operations before or after certain actions, such as product creation, update, or deletion.

## Events Fired in Krayin

- Events fired in krayin but not listened such that if any user wants to perform any action on event fire, then they may create listener file and perform the respective operation.

    | Events name                  | Functionality|
    | ------------------------------- | ------------- |
    | activity.create.before | This event will be fired before activity gets created. |
    | activity.create.after | This event will be fired after activity gets created. |
    | activity.update.before | This event will be fired before activity gets updated. |
    | activity.update.after | This event will be fired after activity gets updated. |
    | activity.update.before | This event will be fired before activity gets deleted. |
    | activity.update.after | This event will be fired after activity gets deleted. |
    | activities.file.create.before | This event will be fired before file gets uploaded. |
    | activities.file.create.after | This event will be fired after file gets uploaded. |
    | activity.delete.before | This event will be fired after activity gets deleted. |
    | activity.delete.after | This event will be fired before activity gets deleted. |
    | core.configuration.save.before | This event will be fired before configuration gets created. |
    | core.configuration.save.after | This event will be fired after configuration gets created. |
    | contacts.organization.create.before | This event will be fired before organization created. |
    | contacts.organization.create.after | This event will be fired after organization created . | 
    | contacts.organization.update.before | This event will be fired before organization gets updated. |
    | contacts.organization.update.after | This event will be fired after organization gets updated. |
    | contact.organization.delete.before | This event will be fired after organization get deleted. |
    | contact.organization.delete.after | This event will be fired before organization get deleted. |
    | contacts.person.create.before | This events will be fired before contact person gets created. |
    | contacts.person.create.after | This events will be fired after contact person gets created. |
    | contacts.person.updated.before | This events will be fired before contact person gets updated. |
    | contacts.person.updated.after | This events will be fired after contact person gets updated. |
    | contacts.person.delete.before | This events will be fired before contact person gets deleted. |
    | contacts.person.delete.after | This events will be fired after contact person gets deleted. |
    | lead.create.before | This event will be fired after leads gets created. |
    | lead.create.after | This event will be fired before leads gets created. |
    | lead.update.before | This event will be fired before leads gets updated. |
    | lead.update.after | This event will be fired before leads gets updated. |
    | lead.delete.before | This event will be fired before leads gets deleted. |
    | lead.delete.after | This event will be fired before leads gets deleted. |
    | leads.quote.create.before | This event will be fired before quotes leads gets created |
    | leads.quote.create.after | This event will be fired after quotes leads gets created |
    | leads.quote.delete.before | This event will be fired before quotes leads gets deleted |
    | leads.quote.delete.after | This event will be fired after quotes leads gets deleted |
    | leads.tag.create.before | This event will be fired before tag leads created |
    | leads.tag.create.before | This event will be fired after tag leads created |
    | leads.tag.delete.before | This event will be fired before tag leads deleted |
    | leads.tag.delete.before | This event will be fired after tag leads deleted |
    | email.create.before | This event will be fired before email gets created |
    | email.create.after | This event will be fired after email gets created |
    | email.update.before | This event will be fired before email gets updated |
    | email.update.after | This event will be fired after email gets updated |
    | email.delete.before | This event will be fired before email gets deleted |
    | email.delete.after | This event will be fired after email gets deleted |
    | product.create.before | This event will be fired before products get created |
    | product.create.after | This event will be fired after products get created |
    | product.update.before | This event will be fired before products get updated |
    | product.update.after | This event will be fired after products get updated |
    | product.delete.before | This event will be fired before products get deleted |
    | product.update.after | This event will be fired after products get deleted |
    | quote.create.before | This event will be fired before quote get created |
    | quote.create.after | This event will be fired after quote get created |
    | quote.update.before | This event will be fired before quote get updated |
    | quote.update.after | This event will be fired after quote get updated |
    | quote.delete.before | This event will be fired before quote get deleted |
    | quote.delete.after | This event will be fired after quote get deleted |
    | settings.attribute.create.before | This event will be fired before attribute get created |
    | settings.attribute.create.after | This event will be fired after attribute get created |
    | settings.attribute.update.before | This event will be fired before attribute get updated |
    | settings.attribute.update.after | This event will be fired after attribute get updated |
    | settings.attribute.delete.before | This event will be fired before attribute get deleted |
    | settings.attribute.delete.after | This event will be fired after attribute get deleted |
    | settings.email_templates.create.before | This event will be fired before email template get created |
    | settings.email_templates.create.after | This event will be fired after email template get created |
    | settings.email_templates.update.before | This event will be fired before email template get updated |
    | settings.email_templates.update.after | This event will be fired after email template get updated |
    | settings.email_templates.delete.before | This event will be fired before email template get deleted |
    | settings.email_templates.delete.after | This event will be fired after email template get deleted |
    | settings.group.create.before | This event will be fired before group get created |
    | settings.group.create.after | This event will be fired after group get created |
    | settings.group.update.before | This event will be fired before group get updated |
    | settings.group.update.after | This event will be fired after group get updated |
    | settings.group.delete.before | This event will be fired before group get deleted |
    | settings.group.delete.after | This event will be fired after group get deleted |
    | settings.pipeline.create.before | This event will be fired before pipeline get created |
    | settings.pipeline.create.after | This event will be fired after pipeline get created |
    | settings.pipeline.update.before | This event will be fired before pipeline get updated |
    | settings.pipeline.update.after | This event will be fired after pipeline get updated |
    | settings.pipeline.delete.before | This event will be fired before pipeline get deleted |
    | settings.pipeline.delete.after | This event will be fired after pipeline get deleted |
    | settings.role.create.before | This event will be fired before role get created |
    | settings.role.create.after | This event will be fired after role get created |
    | settings.role.update.before | This event will be fired before role get updated |
    | settings.role.update.after | This event will be fired after role get updated |
    | settings.role.delete.before | This event will be fired before role get deleted |
    | settings.role.delete.after | This event will be fired after role get deleted |
    | settings.source.create.before | This event will be fired before source get created |
    | settings.source.create.after | This event will be fired after source get created |
    | settings.source.update.before | This event will be fired before source get updated |
    | settings.source.update.after | This event will be fired after source get updated |
    | settings.source.delete.before | This event will be fired before source get deleted |
    | settings.source.delete.after | This event will be fired after source get deleted |
    | settings.source.create.before | This event will be fired before source get created |
    | settings.source.create.after | This event will be fired after source get created |
    | settings.source.update.before | This event will be fired before source get updated |
    | settings.source.update.after | This event will be fired after source get updated |
    | settings.source.delete.before | This event will be fired before source get deleted |
    | settings.source.delete.after | This event will be fired after source get deleted |
    | settings.tag.create.before | This event will be fired before tag get created |
    | settings.tag.create.after | This event will be fired after tag get created |
    | settings.tag.update.before | This event will be fired before tag get updated |
    | settings.tag.update.after | This event will be fired after tag get updated |
    | settings.tag.delete.before | This event will be fired before tag get deleted |
    | settings.tag.delete.after | This event will be fired after tag get deleted |
    | settings.type.create.before | This event will be fired before type get created |
    | settings.type.create.after | This event will be fired after type get created |
    | settings.type.update.before | This event will be fired before type get updated |
    | settings.type.update.after | This event will be fired after type get updated |
    | settings.type.delete.before | This event will be fired before type get deleted |
    | settings.type.delete.after | This event will be fired after type get deleted |
    | settings.user.create.before | This event will be fired before user get created |
    | settings.user.create.after | This event will be fired after user get created |
    | settings.user.update.before | This event will be fired before user get updated |
    | settings.user.update.after | This event will be fired after user get updated |
    | settings.user.delete.before | This event will be fired before user get deleted |
    | settings.user.delete.after | This event will be fired after user get deleted |
    | settings.workflow.create.before | This event will be fired before workflow get created |
    | settings.workflow.create.after | This event will be fired after workflow get created |
    | settings.workflow.update.before | This event will be fired before workflow get updated |
    | settings.workflow.update.after | This event will be fired after workflow get updated |
    | settings.workflow.delete.before | This event will be fired before workflow get deleted |
    | settings.workflow.delete.after | This event will be fired after workflow get deleted |
    | user.account.update-password | This event will be fired after user password gets updated |
    | settings.web_forms.create.before | This event will be fired before web form get created |
    | settings.web_forms.create.after | This event will be fired after web form get created |
    | settings.web_forms.update.before | This event will be fired before web form get updated |
    | settings.web_forms.update.after | This event will be fired after web form get updated |
    | settings.web_forms.delete.before | This event will be fired before web form get deleted |
    | settings.web_forms.delete.after | This event will be fired after web form get deleted |

## Listening to Existing Events

To listen to an existing event in Krayin, you can follow these steps:

1. Open the **`EventServiceProvider.php`** file located in the **`Providers`** folder.

2. Inside the **`boot`** method, you can register your listener by calling the **`Event::listen`** method and providing the event name and the listener function.

   ```php
   Event::listen('settings.source.create.before', 'Webkul\Notification\Listeners\Source@createAfter');
   ```

   In the example above, we are listening to the **`settings.source.create.before`** event and specifying the **`createAfter`** function from the **`Source`** listener class in the **`Webkul\Notification\Listeners`** namespace.

By registering the listener, you have associated the **`createAfter`** function with the **`settings.source.create.before`** event. Whenever this event is triggered, the specified function will be executed.

You can modify the listener function according to your requirements to perform the desired operation.
