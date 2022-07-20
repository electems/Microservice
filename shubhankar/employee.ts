export let age: number =20
export let empid: number =123454
export let empname: string ='Indrasm'

export class Employee{
    empid: number
    empname: string

    constructor(empid:number, empname:string){
        this.empid=empid;
        this.empname=empname;
    }

    DescribeEmployee(){
        console.log(
            'employee having employeeid'+this.empid+'has to submit their names'+this.empname
        )
    
    }
}
let companyName: string='raghawa enterprisessc'
