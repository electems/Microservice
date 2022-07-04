import { Column, Entity, OneToOne } from "typeorm";




@Entity()
export class Marks{
    @Column()
    scoredmarks!: number

    @Column()
    maxmarks!: number
    subject: any;

}