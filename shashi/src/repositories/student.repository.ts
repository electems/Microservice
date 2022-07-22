import {getRepository} from "typeorm";
import {Student} from '../models'
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
export interface IStudentPayload {  id: number;  name: string; }

@Injectable()
export class StudentRepository {
constructor(private readonly connection: Connection) {}

//repositoty to get all students list without their subjects.

// public getStudents  = async () :Promise<Array<Student>> => {
//   const studentRepository = getRepository(Student);
//   return studentRepository.find()
// }

public createStudent  = async (payload: IStudentPayload) :Promise<Student> => {
  const studentRepository = getRepository(Student);
  const student = new Student()
  return studentRepository.save({
    ...student,
    ...payload
  })
}

//Working code for the get student using repository.


// public getStudent  = async (id: number) :Promise<Student | null> => {
//   const studentRepository = getRepository(Student);
//   const student = await studentRepository.findOne({id: id})
//   if (!student) return null
//   return student
// }

//Working code for the get student ORM Query builders.


// public getStudent(id: number){
//     console. log("student id is ", id);
//     const entityManager = getManager();
//     const student = entityManager
//       .createQueryBuilder()
//       .select("student")
//       .from(Student, "student")
//       .where("student.id = :id", { id: id })
//       .getOne();
//     return student;
//   }
  

//working code to get all the subjects of one student oneToMany relation 


  public getStudent(id: number){
    const entityManager = getManager();
    const stud = entityManager.createQueryBuilder(Student,'student')
    .leftJoinAndSelect("student.subject", "subject")
    .where("student.id = :id", { id: id}).getMany();
    return stud;
  }

//Find all students whose are associated with subject using query builder

  public getStudents =  async() : Promise<Array<Student>> =>{
    let studentList=[];
    const entityManager = getManager();
     studentList = await entityManager.createQueryBuilder(Student,'student')
    .leftJoinAndSelect("student.subject", "subject").getMany();
    return studentList;
    
  }


}



