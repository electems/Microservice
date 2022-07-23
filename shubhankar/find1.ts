import { Findclass } from "./finclass";

export class findoperation{
    vehiclelist:Findclass[]=[];

    constructor(vehiclelist:Findclass[]){
        this.vehiclelist = vehiclelist;
    }
    getvehiclelist(a:any) {
        var Find= this.vehiclelist.find(function(_vechi){
            if(a.price>9000){
               return 0;
           }
        })
}
}