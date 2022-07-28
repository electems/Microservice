import { getRepository } from "typeorm";
import { Employee } from "./employee";
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Company } from "./company";
export interface IEmployeePayload {
  name: string;
  companyId: number;
}

@Injectable()
export class EmployeeRepository {
  constructor(private readonly connection: Connection) {}
  public createEmployee = async (
    payload: IEmployeePayload
  ): Promise<Employee> => {
    const employeeRepository = getRepository(Employee); //instance
    const employee = new Employee();
    return employeeRepository.save({
      ...employee,
      ...payload,
    });
  };

  public getEmployees = async (): Promise<Array<Employee>> => {
    const employeeRepository = getRepository(Employee);
    return employeeRepository.find();
  };

  public getEmployee = async (id: number): Promise<Employee | null> => {
    const employeeRepository = getRepository(Employee);
    const employee = await employeeRepository.findOne({ id: id });
    if (!employee) return null;
    return employee;
  };

  //changes

  // public getEmployee(id: number) {
  //   const entityManager = getManager();
  //   const prod = entityManager
  //     .createQueryBuilder(Employee, "employee")
  //     .leftJoinAndSelect("employee.department", "department")
  //     .where("employee.id = :id", { id: id })
  //     .getMany();
  //   return prod;
  // }
}
