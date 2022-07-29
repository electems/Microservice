import { Subject } from './subject';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  avgMarks: number;

  @OneToMany((_type) => Subject, (subject: Subject) => subject.student)
  subject: Array<Subject>;

  // @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  // contactInfo: ContactInfo;

  // @OneToOne(() => S, (profile) => profile.user) // specify inverse side as a second parameter
  // @JoinColumn()
  // profile: Profile
}
