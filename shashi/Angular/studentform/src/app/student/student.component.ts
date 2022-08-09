import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  CourseList:any;
  studentForm: boolean = false;
  editStudentForm: boolean = false;
  editedStudent: any = {};
  newStudent: any={};
  isNewStudent: boolean = false;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.CourseList=this.getCourses
  }
  onSubmit() {
    alert(
      "Form Submitted succesfully!!!\n Check the values in browser console."
    );

  }
  getCourses() {
    return this.studentService.getCoursesFromData();
  }
  getStudents(): Student[] {
    return this.studentService.getStudentsFromData();
  }
  showEditStudentForm(student: Student) {
    this.studentForm = false;
    if (!student) {
      this.studentForm = false;
      return;
    }
    this.editStudentForm = true;
    this.editedStudent = student;
  }
  showAddStudentForm() {
    // resets form if edited student
    this.editStudentForm = false;
    if (this.students.length) {
      this.newStudent = {};
    }
    this.studentForm = true;
    this.isNewStudent = true;
  }
  saveStudentForm(student: Student) {
    if (this.isNewStudent) {
      // add a new student
      this.studentService.addStudent(student);
    } 
    
  }

  updateStudent() {
    this.studentService.updateStudent(this.editedStudent);
    this.editStudentForm = false;
    this.editedStudent = {};
  }

  removeStudent(student: Student) {
    this.studentService.deleteStudent(student);
  }

  cancelEdits() {
    this.editedStudent = {};
    this.editStudentForm = false;
  }

  cancelNewStudent() {
    this.newStudent = {};
    this.studentForm = false;
  }
}

