import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
EventListComponent,
EventThumbnailComponent,
EventService,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver,
CreateSessionComponent,
SessionListComponent,
DurationPipe
}from './events/index'
//import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './event-app.component';
//import {  } from './events/events-list.component';
//import {  } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
//import { } from './events/shared/event.service';
//import { TOASTER_TOKEN , Toastr} from './common/toastr.service';
import { JQ_TOKEN, TOASTER_TOKEN, Toastr, CollapsibleWellComponent } from './common/index';
//import {CollapsibleWellComponent } from './common/collapsible-well.component';
//import {  } from './events/event-details/event-details.component';
import { appRoutes } from './router';
//import {  } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
//import {  } from './events/event-details/event-router-activator.component';
//import { EventListResolver } from './events/event-list-resolve.service';
 let toastr:Toastr = window['toastr'];
 let jQuery = window['$'];

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    {provide: TOASTER_TOKEN,useValue:toastr},
    EventRouteActivator,
    EventListResolver,
    AuthService,
  {provide:'canDeactivateCreateEvent',
  useValue:checkDirtyState}
],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm("You must not saved this event, do you really want to cancel?")
  return true
}
