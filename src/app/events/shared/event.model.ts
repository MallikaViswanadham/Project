<<<<<<< HEAD
export interface IEvent{
   // find(arg0: (event: { id: number }) => boolean): unknown
    id:number
    name:string
    date:Date
    time:String
    price: number
    imageUrl:string
    location?:{
        address:string
        city:string
        country:string
    },
    onlineUrl?:string
    sessions:ISession[]

    

}
export interface ISession{
id:number
name:string
presenter:string
duration:number
level:string
abstract: string
voters:string[]
=======
export interface IEvent{
   // find(arg0: (event: { id: number }) => boolean): unknown
    id:number
    name:string
    date:Date
    time:String
    price: number
    imageUrl:string
    location?:{
        address:string
        city:string
        country:string
    },
    onlineUrl?:string
    sessions:ISession[]

    

}
export interface ISession{
id:number
name:string
presenter:string
duration:number
level:string
abstract: string
voters:string[]
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
}