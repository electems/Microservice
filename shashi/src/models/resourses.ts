import {Entity,    PrimaryGeneratedColumn,    Column, ManyToOne} from "typeorm";
import { Product } from "./product";

@Entity()
export class Resources
{

    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    FirstName!:string

    @Column()
    LastName!:String

    @Column()
    Email!:String

    @ManyToOne((_type: any)=> Product, (product: Product) => product.resource)
    Product!: Array<Product>;
}