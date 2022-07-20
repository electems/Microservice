"use strict";
exports.__esModule = true;
exports.Employee = exports.empname = exports.empid = exports.age = void 0;
exports.age = 20;
exports.empid = 123454;
exports.empname = 'Indrasm';
var Employee = /** @class */ (function () {
    function Employee(empid, empname) {
        this.empid = empid;
        this.empname = empname;
    }
    Employee.prototype.DescribeEmployee = function () {
        console.log('employee having employeeid' + this.empid + 'has to submit their names' + this.empname);
        return Employee;
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = 'raghawa enterprisessc';
