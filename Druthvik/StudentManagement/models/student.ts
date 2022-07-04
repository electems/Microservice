import { Column, Entity, OneToMany } from "typeorm";
import { Subject } from './subject';



@Entity()
export class Student{
    
    @Column()
    name!: string;

    @Column()
    rank!: string;

    @Column()
    avg!: number;

    @OneToMany((_type) => Subject,(subject: Subject)=>subject.student)
    subjects!: Array<Subject>
    static subjects: any;
}
