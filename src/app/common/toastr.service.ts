<<<<<<< HEAD
import { InjectionToken } from '@angular/core'

export let TOASTER_TOKEN = new InjectionToken<Toastr>('toastr')
export interface Toastr {
    success(msg:string, title?:string):void;
    Info(msg:string,title?:string):void;
    warining(msg:string, title?:string):void;
    error(msg:string,title?:string):void;
=======
import { InjectionToken } from '@angular/core'

export let TOASTER_TOKEN = new InjectionToken<any>('toastr')
export interface Toastr {
    success(msg:string, title?:string):void;
    Info(msg:string,title?:string):void;
    warining(msg:string, title?:string):void;
    error(msg:string,title?:string):void;
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}