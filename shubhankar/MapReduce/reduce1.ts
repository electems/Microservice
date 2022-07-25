import { Student } from "./reducee";
export class ReduceOp{
    ReduceMethod:Student[]=[];
    Student: any;

    constructor(ReduceMethod:Student[]){
        this.ReduceMethod=ReduceMethod;
     }

     getStudent(b:any){
        var f=this.Student.reduce(function(){
            if(b.age>25){
                return 0;
            }
        })
}
}
