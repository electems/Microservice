import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Employee } from "./employee";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  lastName!: string;

  // @OneToOne(
  //   (_type: any) => Employee,
  //   (employee: Employee) => employee.Department
  // )
  // Employee!: Employee;
  @Column()
  employeeId!: number;
  @OneToOne(() => Employee, { nullable: false })
  @JoinColumn()
  employee!: Employee;
}
