import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm'
import { Post } from './post'
import { Comment } from './comment'
import { Message } from '../models/messages'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  email!: string

  @OneToMany((_type) => Post, (post: Post) => post.user)
  posts!: Array<Post>

  @OneToMany((_type) => Comment, (comment: Comment) => comment.user)
  comments!: Array<Comment>

  @OneToMany((_type) => Message, (message: Message) => message.user)
  messages!: Array<Message>

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
