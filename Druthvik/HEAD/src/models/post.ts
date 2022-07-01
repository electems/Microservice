import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  AfterLoad,
} from 'typeorm'
import { Comment } from './comment'
import { User } from './user'
import { Tag } from './tags'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column({
    type: 'text',
  })
  content!: string

  @Column({ nullable: true })
  userId!: number
  @ManyToOne((_type) => User, (user: User) => user.posts)
  @JoinColumn()
  user!: User

  @OneToMany((_type) => Comment, (comment: Comment) => comment.post)
  comments!: Array<Comment>

  @OneToMany((_type) => Tag, (tag: Tag) => tag.post)
  tags!: Array<Tag>

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
