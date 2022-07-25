import { Workers } from "./map1";
export class Mapoperation{
     MapMethod:Workers[]=[];
    Workers: any;

     constructor(MapMethod:Workers[]){
        this.MapMethod=MapMethod;
     }

     getWorkerlist(r:any){
        var r=this.Workers.map(function(){
            if(r.salary>25000){
                return 0;
            }
        })
}
}