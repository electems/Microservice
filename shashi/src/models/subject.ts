import { Student } from './student';


import {  Entity,  PrimaryGeneratedColumn,  Column,  ManyToOne,  JoinColumn,  OneToOne,} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  
  semester!: string;

  @ManyToOne(_type=> Student, (student: Student) => student.subject)
  Students!: Array<Student>;
}
