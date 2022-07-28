import { getRepository } from "typeorm";
import { Department } from "./department";
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
export interface IDepartmentPayload {
  Name: string;
  lastname: string;
  employeeId: number;
}

@Injectable()
export class DepartmentRepository {
  constructor(private readonly connection: Connection) {}
  public createDepartment = async (
    payload: IDepartmentPayload
  ): Promise<Department> => {
    const departmentRepository = getRepository(Department); //instance
    const department = new Department();
    return departmentRepository.save({
      ...department,
      ...payload,
    });
  };

  public getDepartments = async (): Promise<Array<Department>> => {
    const departmentRepository = getRepository(Department);
    return departmentRepository.find();
  };

  public getDepartment = async (id: number): Promise<Department | null> => {
    const departmentRepository = getRepository(Department);
    const department = await departmentRepository.findOne({ id: id });
    if (!department) return null;
    return department;
  };
}
