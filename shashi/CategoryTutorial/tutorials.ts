import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Category } from "./category";
@Entity()
export class Tutorial {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name?: string;

  @Column()
  description?: string;


  @ManyToMany((_type) => Category, (category) => category.tutorials)
  categorys!: Category[]; 
}
