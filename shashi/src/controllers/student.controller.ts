import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Student} from '../models'
//import { getStudents, IstudentPayload, createStudent, getStudent, StudentRepository } from "src/repositories/student.repository";
import { StudentRepository, IStudentPayload } from "../repositories/student.repository";
import { Inject } from "typescript-ioc";

@Route("students")
@Tags("student")
export default class StudentController {
  @Inject
  private studentRepository!: StudentRepository;
  service: any;
  @Get("/")
  public async getStudents(): Promise<Array< Student>> {
    return this.studentRepository.getStudents()
  }

  @Post("/")
  public async createStudent(@Body() body: IStudentPayload): Promise<Student> {
    return this.studentRepository.createStudent(body)
  }

  @Get("/:id")
  public async getStudent(@Path() id: any){
    return this.studentRepository.getStudent(Number(id))
  }
}