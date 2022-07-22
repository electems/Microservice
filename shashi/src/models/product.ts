import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Resources } from "./resourses";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: String;

  @Column()
  resId!: number;

  @OneToMany(
    (_type: any) => Resources,
    (resource: Resources) => resource.Product
  )
  @JoinColumn()
  resource!: Resources;
}
