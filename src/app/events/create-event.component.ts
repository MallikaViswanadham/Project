<<<<<<< HEAD
import { Component } from  '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'
@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background-color:#E3C3C5}
  .error::-webkit-input-placeholder{color:#999;}
  .error::-moz-placeholder{color:#999;}
  .error:-moz-placeholder{ color:#999;}
  .error:ms-input-placeholder{ color:#999; }
  `]
    
})
export class CreateEventComponent{
    newEvent: any
    isDirty:boolean=true
   //event:any
    //eventService: any
    constructor(private router:Router,private eventService:EventService){

    }

    
    saveEvent(formValues: any){
        this.eventService.saveEvent(formValues)
        this.isDirty=false
        this.router.navigate(['/events'])
    }
cancel(){
this.router.navigate(['/events'])
}
=======
import { Component } from  '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'
@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background-color:#E3C3C5}
  .error::-webkit-input-placeholder{color:#999;}
  .error::-moz-placeholder{color:#999;}
  .error:-moz-placeholder{ color:#999;}
  .error:ms-input-placeholder{ color:#999; }
  `]
    
})
export class CreateEventComponent{
    newEvent: any
    isDirty:boolean=true
   //event:any
    //eventService: any
    constructor(private router:Router,private eventService:EventService){

    }

    
    saveEvent(formValues: any){
        this.eventService.saveEvent(formValues)
        this.isDirty=false
        this.router.navigate(['/events'])
    }
cancel(){
this.router.navigate(['/events'])
}
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}