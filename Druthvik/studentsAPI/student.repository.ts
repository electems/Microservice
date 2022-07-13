import {
  createQueryBuilder,
  Connection,
  getManager,
  Repository,
} from 'typeorm';
import { Student } from './model/student';
import { Injectable } from '@nestjs/common';

export interface IStudentPayload {
  name: string;
  avgMarks?: number;
}
@Injectable()
export class SudentRepository {

  constructor(private readonly connection: Connection) {}


  public async findOne(id: number) {
    console.log('student id is ', id);
    const entityManager = getManager();
    const student = await entityManager
      .createQueryBuilder()
      .select('student')
      .from(Student, 'student')
      .where('student.id = :id', { id: id })
      .getOne();
    console.log('student id is ', student);
    return student;
  }
  // public async findMany() {
  //   const entityManager = getManager();
  //   const student = await entityManager
  //     .createQueryBuilder()
  //     .select('student')
  //     .from(Student, 'student')
  //     .getMany();
  //   console.log('student is ', student);
  //   return student;
  // }

  //This code of block is used to get the associated sudent , subject and marks entaties.
  public findMany  = async () :Promise<Array<Student>> => {
    const entityManager = getManager();
    let stud = [];
    const query = entityManager.createQueryBuilder(Student,'student');
    stud = await query.leftJoinAndSelect('subject', 'sub', 'student.id  = sub.studentId').
    leftJoinAndSelect('mark', 'mar', 'sub.id  = mar.subjectId').getRawMany();
   return stud;
}

// export const createStudent = async (
//     payload: IStudentPayload,
//   ): Promise<Student> => {
//     const StudentRepository = getRepository(Student);
//     const student = new Student();
//     return StudentRepository.save({
//       ...student,
//       ...payload,
//     });
//   };

//Query Code fro the selecrt product
}