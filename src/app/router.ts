//import { EventDetailsComponent } from "./events/event-details/event-details.component";
//import { EventListComponent } from "./events/events-list.component";
//import { CreateEventComponent } from "./events/create-event.component";
import { Routes} from '@angular/router'
import{
EventListComponent,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver,
CreateSessionComponent
}from './events/index'
import { Error404Component } from "./errors/404.component";
//import { EventRouteActivator } from "./events/event-details/event-router-activator.component";
//import { EventListResolver } from "./events/event-list-resolve.service";
//import { EventRouteActivator } from "./events/event-details/event-router-activator.component";
export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventListComponent,resolve:{events:EventListResolver}},
    {path:'events/:id', component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'events/session/new', component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    { path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',
    loadChildren: ()=>import('./user/user.module')
    .then(m=>m.UserModule)}
]