import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Tutorial } from "./tutorials";
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title?: string;

  @ManyToMany(() => Tutorial, (tutorial) => tutorial.categorys)
  @JoinTable()
  tutorials!: Tutorial[];
}
