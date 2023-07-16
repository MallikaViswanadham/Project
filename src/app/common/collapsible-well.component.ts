<<<<<<< HEAD
import { Component,Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    template:`
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
    `
})
export class CollapsibleWellComponent{
    //@Input() title:string | undefined;
visible: boolean=true;
    toggleContent(){
        this.visible=!this.visible;
    }
=======
import { Component,Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    template:`
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
    `
})
export class CollapsibleWellComponent{
    //@Input() title:string | undefined;
visible: boolean=true;
    toggleContent(){
        this.visible=!this.visible;
    }
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}