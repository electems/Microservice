import { cars } from "./mapping.js";


export class maps{
    veh:cars[]=[]
    constructor(veh:cars[]=[]){
        this.veh=veh
    }
    learnFilter(): cars[] 
    {
    const vehicle=this.veh.map(function(automoblie:{ model: string, price:number}):any
{
    return automoblie.model
})
return vehicle;
}
}