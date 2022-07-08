import { Body, Get, Post, Route, Tags } from 'tsoa';
import { getRepository } from 'typeorm';
import { Student } from './model/student';
import { Subject } from './model/subject';
import { RankAllotment } from './rank_allotment';

const student: Student[] = [
  {
    name: 'John',
    subjects: [
      {
        name: 'Maths',
        semester: '2',
        mark: {
          scoredmarks: 67,
          maxmarks: 125,
        },
      },
      {
        name: 'science',
        semester: '2',
        mark: {
          scoredmarks: 68,
          maxmarks: 127,
        },
      },
    ],
  },
  {
    name: 'kennedy', //loaded student array
    subjects: [
      {
        name: 'social',
        semester: '2',
        mark: {
          scoredmarks: 90,
          maxmarks: 125,
        },
      },
      {
        name: 'english',
        semester: '2',
        mark: {
          scoredmarks: 80,
          maxmarks: 127,
        },
      },
    ],
  },
];
@Route('students')
@Tags('Student')
export default class RankAllotmentController {
  @Get('/')
  public async getStudents(): Promise<Array<Student>> {
    return student
  }

  @Post('/')
  public async createStudent(@Body() body: Student): Promise<Student> {
   return (body)
  }

  // @Post('/')
  // public async createStudentWithAverage(@Body() body: Student): Promise<Student> {
  //   const getStudent = new RankAllotment(student)
  //   const avg = getStudent.calculateAvgOfAllTheStudents
    
  // }

  // @Get('/')
  // public async getStudentsAverage(): Promise<Array<Student>> {
  //   const getStudent = new RankAllotment(student)
  //   const avg = getStudent.sortByAverage()
  //   return avg
  // }

}




