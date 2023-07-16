<<<<<<< HEAD
import { FormControl } from "@angular/forms"

export function restrictedWords(words: any[]){
    return(control:FormControl):{[key:string]:any}=>
{
    if(!words) return() => {}
    var invalidWords=words
    .map(w=>control.value.includes(w)?w:null)
    .filter(w=>w!=null)
    return invalidWords && invalidWords.length>0
    ?{'restrictedWords': invalidWords.join(',')}
    :() => {}
    
}
=======
import { FormControl } from "@angular/forms"

export function restrictedWords(words: any[]){
    return(control:FormControl):{[key:string]:any}=>
{
    if(!words) return() => {}
    var invalidWords=words
    .map(w=>control.value.includes(w)?w:null)
    .filter(w=>w!=null)
    return invalidWords && invalidWords.length>0
    ?{'restrictedWords': invalidWords.join(',')}
    :() => {}
    
}
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}