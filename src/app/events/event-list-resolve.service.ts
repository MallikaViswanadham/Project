<<<<<<< HEAD
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'
@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:EventService){

    }
    resolve(){
return this.eventService.getEvents().pipe(map(events=>events))
    }
    
=======
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'
@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:EventService){

    }
    resolve(){
return this.eventService.getEvents().pipe(map(events=>events))
    }
    
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}