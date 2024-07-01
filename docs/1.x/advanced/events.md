# Events

[[TOC]]

## Introduction

Event Listeners in Krayin are a way to implement the observer pattern, where listeners respond to events that occur in the application. Events can be thought of as announcements made by the application, and listeners are the actions taken in response to those announcements. All event classes in Krayin are stored in the `Providers` directory, and the listeners are stored in the `Listeners` directory.

In Krayin, events and listeners are organized in a clear and structured manner:

- Events are typically stored in the Events directory.
- Listeners are stored in the Listeners directory.

This organization makes it easy to manage and locate the event-driven components of your application.

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/events).

## Creating an Event Class

### Using Package Generator

If you have the Krayin Package Generator installed, you can use the following command to create a new event class in the `packages/Webkul/Category/src/Events` directory:

```sh
php artisan package:make-event CategoryEvent Webkul/Category
```

If the event class already exists, you can use the --force option to overwrite it:

```sh
php artisan package:make-event CategoryEvent Webkul/Category --force
```

Alternatively, if you don't have the package generator, you can create the file manually by creating a new class in the `packages/Webkul/Category/src/Events` directory.

### Manually Registering Events

In Krayin, you register events manually in the `boot` method of your `EventServiceProvider.php` file. Here is an example of how to register events:

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

In this example, `event.name` is the name of the event, and `path-upto-listener@function` is the listener method that will handle the event.

### Manually Registering Listeners

When registering events, you specify the listener function to be executed when an event is triggered. Here is an example of how to register a listener:

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

        Event::listen('lead.create.after', 'Webkul\Admin\Listeners\Leads@linkToEmail');
    }
}
```

In this example, the `lead.create.after` event will trigger the `linkToEmail` method of the `Leads` listener in the `Webkul\Admin\Listeners` namespace.

## Specifying Events

In Krayin, events are typically fired before and after the execution of CRUD operations. This allows listeners to perform additional actions, such as logging, notifications, or data manipulation, at specific points in the lifecycle of an operation.

For example, you might have events fired during product creation, updating, or deletion. Here’s an example of firing events before and after saving an order:

```php
namespace Webkul\Sales\Repositories;

use Webkul\Admin\Http\Requests\LeadForm;

class LeadController extends Repository
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        protected LeadRepository $leadRepository,
    ) {
        request()->request->add(['entity_type' => 'leads']);
    }

    /**
     * Store a newly created resource in storage.
     * 
     */
    public function store(LeadForm $request)
    {
       Event::dispatch('lead.create.before');

        $data = request()->all();

        $data['status'] = 1;

        if ($data['lead_pipeline_stage_id']) {
            $stage = $this->stageRepository->findOrFail($data['lead_pipeline_stage_id']);

            $data['lead_pipeline_id'] = $stage->lead_pipeline_id;
        } else {
            $pipeline = $this->pipelineRepository->getDefaultPipeline();

            $stage = $pipeline->stages()->first();

            $data['lead_pipeline_id'] = $pipeline->id;

            $data['lead_pipeline_stage_id'] = $stage->id;
        }

        if (in_array($stage->code, ['won', 'lost'])) {
            $data['closed_at'] = Carbon::now();
        }

        $lead = $this->leadRepository->create($data);

        Event::dispatch('lead.create.after', $lead);

        session()->flash('success', trans('admin::app.leads.create-success'));

        return redirect()->route('admin.leads.index', $data['lead_pipeline_id']);
    }
}
```

## Events Fired in Krayin

In Krayin, there are several events fired throughout its operations, allowing developers to hook into specific points in the application's lifecycle to customize behavior or add functionality. Here's a list of events that are fired in Krayin, which you can listen to and handle as needed by creating event listeners:

| Events name                  | Functionality|
| ------------------------------- | ------------- |
| activity.create.before | This event will be fired before activity gets created. |
| activity.create.after | This event will be fired after activity gets created. |
| activity.update.before | This event will be fired before activity gets updated. |
| activity.update.after | This event will be fired after activity gets updated. |
| activities.file.create.before | This event will be fired before file gets uploaded. |
| activities.file.create.after | This event will be fired after file gets uploaded. |
| activity.delete.before | This event will be fired before activity gets deleted. |
| activity.delete.after | This event will be fired after activity gets deleted. |
| core.configuration.save.before | This event will be fired before configuration gets created. |
| core.configuration.save.after | This event will be fired after configuration gets created. |
| contacts.organization.create.before | This event will be fired before organization created. |
| contacts.organization.create.after | This event will be fired after organization created . |
| contacts.organization.update.before | This event will be fired before organization gets updated. |
| contacts.organization.update.after | This event will be fired after organization gets updated. |
| contact.organization.delete.before | This event will be fired before organization get deleted. |
| contact.organization.delete.after | This event will be fired after organization get deleted. |
| contacts.person.create.before | This events will be fired before contact person gets created. |
| contacts.person.create.after | This events will be fired after contact person gets created. |
| contacts.person.updated.before | This events will be fired before contact person gets updated. |
| contacts.person.updated.after | This events will be fired after contact person gets updated. |
| contacts.person.delete.before | This events will be fired before contact person gets deleted. |
| contacts.person.delete.after | This events will be fired after contact person gets deleted. |
| lead.create.before | This event will be fired before leads gets created. |
| lead.create.after | This event will be fired after leads gets created. |
| lead.update.before | This event will be fired before leads gets updated. |
| lead.update.after | This event will be fired after leads gets updated. |
| lead.delete.before | This event will be fired before leads gets deleted. |
| lead.delete.after | This event will be fired after leads gets deleted. |
| leads.quote.create.before | This event will be fired before quotes leads gets created |
| leads.quote.create.after | This event will be fired after quotes leads gets created |
| leads.quote.delete.before | This event will be fired before quotes leads gets deleted |
| leads.quote.delete.after | This event will be fired after quotes leads gets deleted |
| leads.tag.create.before | This event will be fired before tag leads created |
| leads.tag.create.after | This event will be fired after tag leads created |
| leads.tag.delete.before | This event will be fired before tag leads deleted |
| leads.tag.delete.after | This event will be fired after tag leads deleted |
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

Krayin uses events and listeners to implement the observer pattern, allowing you to respond to various actions and events within the application. You can listen to specific events and execute custom code when those events are triggered.

### Registering a Listener

Open the `EventServiceProvider.php` file located in the `Providers` directory of your Krayin application. This file is where you register event listeners.

Inside the `boot()` method of `EventServiceProvider.php`, use the `Event::listen` method to register your listener. This method takes the event name and a callback function or a class method that will handle the event.

```php
Event::listen('lead.create.before', 'Webkul\Admin\Listeners\Leads@linkToEmail');
```

In the example above, we are listening to the `lead.create.before` event and specifying the `createOrder` function from the `Order` listener class in the `Webkul\Notification\Listeners` namespace.

Replace `'lead.create.before'` with the specific event you want to listen to. In this example, it listens to the event triggered after saving an order during checkout.

By registering the listener, you have associated the **`createOrder`** function with the **`lead.create.before`** event. Whenever this event is triggered, the specified function will be executed.

You can modify the listener function according to your requirements to perform the desired operation.
