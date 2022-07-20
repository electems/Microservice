import { Subject } from './subject';
import {  Entity,  PrimaryGeneratedColumn,  Column,  OneToMany,  OneToOne,  JoinColumn,} from 'typeorm';

@Entity('student')
export class Student {
 
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'text'
})
  name!: string;


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  @OneToMany((_type) => Subject, (subject: Subject) => subject.Students)
  @JoinColumn()
  subject!: Subject;

}
