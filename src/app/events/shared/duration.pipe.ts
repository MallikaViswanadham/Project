<<<<<<< HEAD
import { Pipe, PipeTransform} from '@angular/core'
@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1:return 'Half Hour'
            case 2:return 'One Hour'
            case 3:return 'Half Day'
            case 4:return 'Full Day'
            default: return value.toString();

        }
        
    }
=======
import { Pipe, PipeTransform} from '@angular/core'
@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1:return 'Half Hour'
            case 2:return 'One Hour'
            case 3:return 'Half Day'
            case 4:return 'Full Day'
            default: return value.toString();

        }
        
    }
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}