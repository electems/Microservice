import { Employee } from  '../Employee_File/Employee'
import {Employeeinfo} from './Employee_file'


const EmployeeRec: Employee[] =[
{ "name": "Ravindra", "Salary":40000},
{"name": "Arjun", "Salary":30000},
{ "name": "Shubham", "Salary":25000 },
];
describe('Return the Salary ', () => {
test('should return data', () => {
const Employeework= new Employeeinfo(EmployeeRec);
Employeework.SortSalary1();
expect(EmployeeRec[0].name).toBe("Ravindra"),
expect(EmployeeRec[1].name).toBe("Arjun"),
expect(EmployeeRec[2].name).toBe("Shubham")
});
});
  describe('Return the salary ', () => {
  test('should return data', () => {
const Employeeworks = new Employeeinfo(EmployeeRec);
    Employeeworks.SortSalary2();
     expect(EmployeeRec[0].name).toBe("Shubham")
     expect(EmployeeRec[1].name).toBe("Arjun")
     expect(EmployeeRec[2].name).toBe("Ravindra")
    });
});