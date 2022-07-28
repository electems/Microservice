import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Department } from "./department";
import { Employee } from "./employee";
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: String;

  @Column()
  address!: string;

  // @OneToMany((_type: any) => Employee, (employee: Employee) => employee.Company)
  // @JoinColumn()
  // employee!: Employee;
  @OneToMany((_type) => Employee, (employee: Employee) => employee.company)
  employee!: Array<Employee>;
}
