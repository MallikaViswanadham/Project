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
}