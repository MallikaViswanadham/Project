<<<<<<< HEAD
import { Injectable } from '@angular/core'
import { IUser } from './user.model'
@Injectable()
export class AuthService{
    currentUser!: IUser;
    loginUser(userName:string,password :string){
this.currentUser={
    id:1,
    userName:userName,
    firstName:'Mallika',
lastName:'Viswanadham'
}
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
=======
import { Injectable } from '@angular/core'
import { IUser } from './user.model'
@Injectable()
export class AuthService{
    currentUser!: IUser;
    loginUser(userName:string,password :string){
this.currentUser={
    id:1,
    userName:userName,
    firstName:'Mallika',
lastName:'Viswanadham'
}
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}