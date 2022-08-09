import { Injectable } from '@angular/core';
import { StudentForm } from '../models/student-form.model';

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  private courses = [
    { name: 'Select One' },
    { name: 'BE' },
    { name: 'MBA' },
    { name: 'BBA' },
  ];
  private upersons: StudentForm[] = [
    {
      id: 1,
      firstname: 'Durgesh',
      phone: '7755886456',
      addres: 'haveri',
      course: 'BA',
    },
    {
      id: 2,
      firstname: 'Ankur',
      phone: '7755886456',
      addres: 'bengalore',
      course: 'BCA',
    },
  ];

  constructor() {}
  getStudentFromData(): StudentForm[] {
    return this.upersons;
  }
  getStudentCourse() {
    return this.courses;
  }

  addStudent(student: StudentForm) {
    student.id = this.upersons.length + 1;
    this.upersons.push(student);
  }
  updateStudent(student: StudentForm) {
    const index = this.upersons.findIndex((u) => student.id === u.id);
    this.upersons[index] = student;
  }
  deleteStudent(student: StudentForm) {
    this.upersons.splice(this.upersons.indexOf(student), 1);
  }
}
