<<<<<<< HEAD
import { Component } from '@angular/core'
import { AuthService } from './auth.service'
@Component({
templateUrl:'./login.component.html',
styles:[`
em{ float:right;color:red;padding-left:10px}
`]
})
export class LoginComponent{
    mouseoverLogin: any
userName: any
password: any
constructor(private authService:AuthService){}
login(formValues: any){
    this.authService.loginUser(formValues.userName,formValues.password)
}
=======
import { Component } from '@angular/core'
import { AuthService } from './auth.service'
@Component({
templateUrl:'./login.component.html',
styles:[`
em{ float:right;color:red;padding-left:10px}
`]
})
export class LoginComponent{
    mouseoverLogin: any
userName: any
password: any
constructor(private authService:AuthService){}
login(formValues: any){
    this.authService.loginUser(formValues.userName,formValues.password)
}
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}