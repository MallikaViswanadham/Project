import { Component, EventEmitter } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { EventService, ISession } from '../events';
@Component({

    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles:[`
    .nav.navbar-nav{font-size:15px}
    #searhForm{margin-right:100px}
    @media (max-width:1200px){#searchForm {display:none}}
    li>a.active{color:#F97924; }
    `]
})
export class NavBarComponent{
    searchTerm:string="";
    foundSessions: ISession[] | undefined;
constructor(public auth:AuthService, private eventService:EventService){}
searchSessions(searchTerm: any){
this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[] | undefined)=>{
    this.foundSessions=sessions;
    console.log(this.foundSessions);
})
}
}