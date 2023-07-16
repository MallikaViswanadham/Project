<<<<<<< HEAD
import { Component,OnInit , Inject} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { ImplicitReceiver } from '@angular/compiler'
import { TOASTER_TOKEN, Toastr } from '../common/toastr.service'
@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background-color:#E3C3C5}
  .error::-webkit-input-placeholder{color:#999;}
  .error::-moz-placeholder{color:#999;}
  .error:-moz-placeholder{ color:#999;}
  .error:ms-input-placeholder{ color:#999; }
  `]
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup
  //lastName: any
  //private firstName!: FormControl 
  //private lastName!: FormControl 
  constructor(private router:Router,
    private authService:AuthService,
    @Inject(TOASTER_TOKEN) private toastr:Toastr){

  }
       ngOnInit(){
        //debugger;/*
      //  this.firstName=new FormControl(this.authService.currentUser.firstName)
        //this.lastName=new FormControl(this.authService.currentUser.lastName)
    //    this.profileForm=new FormGroup({
      //    firstName:this.firstName,
        //  lastName:this.lastName
     //  })
       console.log(this.authService.currentUser)
        this.profileForm = new FormGroup({
         firstName:new FormControl(this.authService.currentUser.firstName, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
          lastName:new FormControl(this.authService.currentUser.lastName, Validators.required)
      });
       }
       saveProfile(formValues: { firstName: string; lastName: string }){
        if(this.profileForm.valid){
        this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
        this.toastr.success('Profile Saved');
       }
      }

      validateFirstName(){
        return this.profileForm.controls['firstName'].valid || this.profileForm.controls['firstName'].touched
      }
      validateLastName(){
        return this.profileForm.controls['lastName'].valid || this.profileForm.controls['lastName'].touched
       // return this.lastName.valid || this.lastName.touched
      }
       cancel(){
        this.router.navigate(['events'])
       }
}
=======
import { Component,OnInit , Inject} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { ImplicitReceiver } from '@angular/compiler'
import { TOASTER_TOKEN, Toastr } from '../common/toastr.service'
@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background-color:#E3C3C5}
  .error::-webkit-input-placeholder{color:#999;}
  .error::-moz-placeholder{color:#999;}
  .error:-moz-placeholder{ color:#999;}
  .error:ms-input-placeholder{ color:#999; }
  `]
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup
  //lastName: any
  //private firstName!: FormControl 
  //private lastName!: FormControl 
  constructor(private router:Router,
    private authService:AuthService,
    @Inject(TOASTER_TOKEN) private toastr:Toastr){

  }
       ngOnInit(){
        //debugger;/*
      //  this.firstName=new FormControl(this.authService.currentUser.firstName)
        //this.lastName=new FormControl(this.authService.currentUser.lastName)
    //    this.profileForm=new FormGroup({
      //    firstName:this.firstName,
        //  lastName:this.lastName
     //  })
       console.log(this.authService.currentUser)
        this.profileForm = new FormGroup({
         firstName:new FormControl(this.authService.currentUser.firstName, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
          lastName:new FormControl(this.authService.currentUser.lastName, Validators.required)
      });
       }
       saveProfile(formValues: { firstName: string; lastName: string }){
        if(this.profileForm.valid){
        this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
        this.toastr.success('Profile Saved');
       }
      }

      validateFirstName(){
        return this.profileForm.controls['firstName'].valid || this.profileForm.controls['firstName'].touched
      }
      validateLastName(){
        return this.profileForm.controls['lastName'].valid || this.profileForm.controls['lastName'].touched
       // return this.lastName.valid || this.lastName.touched
      }
       cancel(){
        this.router.navigate(['events'])
       }
}
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
