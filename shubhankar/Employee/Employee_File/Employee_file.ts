import { Employee } from '../Employee_File/Employee';
export class Employeeinfo{
Employeelist:Employee[]=[]
constructor( Employeelist:Employee[]){
this.Employeelist=Employeelist;
}
SortSalary1(){
return this.Employeelist.sort(this.SortSalarydesc);
}
 SortSalarydesc(a: Employee ,b:Employee){
    if(a.Salary< b.Salary){
     return 1;
    }
    if(a.Salary > b.Salary){
    return -1;
    }
    return 0;
   }
  SortSalary2(){
   return this.Employeelist.sort(this.Sortquantityasc);
  }
  Sortquantityasc(a: Employee ,b:Employee){
       if(a.Salary> b.Salary){
       return 1;
      }
      if(a.Salary < b.Salary){
      return -1;
     }
     return 0;
    }
  }