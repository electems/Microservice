//import { request } from 'http';
import { Body, Get, Path, Post, Route, Tags } from 'tsoa';
//import { Student } from './model/student';
//import {createSubject, ISubjectPayload} from '../studentsranking/subject.repository'
//import { Subject } from './model/subject';
//import { createMark, IMarkPayload } from './mark.repository';
import { SudentRepository } from './student.repository';
import { Inject } from 'typescript-ioc';

@Route('students')
@Tags('Student')
export class RankAllotmentController {
  @Inject
  private sudentRepository!: SudentRepository;
  service: any;

  @Get('/:id')
  async getProdProfile(@Path() id: any) {
    return await this.sudentRepository.findOne(Number(id));
  }
  @Get()
  async getMany() {
    return await this.sudentRepository.findMany();
  }
}
//   // @Post()
//   // public calculateAvg(@Body() body: Student[]): Student[] {
//   //   const rankAllotment = new RankAllotment(body)
//   //   rankAllotment.calculateAvgOfAllTheStudents()
//   //   return (body)

//   // }
//   @Post()
//   public async createStudent(@Body() body: IStudentPayload): Promise<Student> {
//     return createStudent(body);
//   }
//   @Post('/')
//   public async createSubject(@Body() body: ISubjectPayload): Promise<Subject> {
//     return createSubject(body);
//   }

//   @Post('/')
//   public async createMark(@Body() body: IMarkPayload): Promise<Mark> {
//     return createMark(body);
//   }

// }
