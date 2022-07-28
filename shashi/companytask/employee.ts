import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Company } from "./company";
import { Department } from "./department";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  // @Column()
  // phone_no!:number

  // @Column()
  // dept_id!: number; //change

  // @ManyToOne((_type: any) => Company, (company: Company) => company.employee)
  // Company!: Array<Company>;

  // @OneToOne(
  //   (_type: any) => Department,
  //   (department: Department) => department.Employee
  // )
  // Department!: Department;

  // @JoinColumn()
  // department!: Department;

  @ManyToOne((_type) => Company, (company: Company) => company.employee)
  @JoinColumn()
  company!: Company;

  @OneToOne((_type) => Department, (department) => department.employee)
  department!: Department;
}
