import { Employee } from "./filclass1";
export class Filteroperation{
     FilterMethod:Employee[]=[];
    Employee: any;

     constructor(FilterMethod:Employee[]){
        this.FilterMethod=FilterMethod;
     }

     getEmployeelist(b:any){
        var f=this.Employee.filter(function(){
            if(b.age>25){
                return 0;
            }
        })
}
}