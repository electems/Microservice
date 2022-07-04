import { Column, Entity, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { Student } from './student';
import { Marks } from './marks';



@Entity()
export class Subject{
  
    @Column()
    name!: string

    @Column()
    semester!: string

    @Column({ nullable: true })
    @ManyToOne((_type) => Student, (student: Student) => Student.subjects)
    student!: Student

    @OneToOne((_type) =>Marks, (mark: Marks)=> mark.subject )
    mark!: Marks


}