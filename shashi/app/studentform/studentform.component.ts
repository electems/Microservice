import { Component, OnInit } from '@angular/core';
import { Student } from '../models/studentform';
import { StudentService } from '../services/studentform.service';

@Component({
  selector: 'app-student',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css'],
})
export class StudentformComponent implements OnInit {
  students: Student[] = [];
  Courses: any;
  studentForm: boolean = false;
  editStudentForm: boolean = false;
  editedStudent: any = {};
  newStudent: any = {};
  isNewStudent: boolean = false;
  filterStudent!: Student[];
  searchText!: string;

  set searchTerm(value: string) {
    this.searchText = value;
    if (this.searchText == '') {
      this.filterStudent = this.students;
    } else {
      this.filterStudent = this.getFilteredList(value);
    }
  }

  getFilteredList(searchText: string) {
    return this.filterStudent.filter((student) => {
      return student.firstname.toLowerCase().includes(searchText);
    });
  }

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.Courses = this.getCourses();
    this.students = this.getStudents();
    this.filterStudent = this.students;
  }
  onSubmit() {
    alert(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
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
    } else {
      this.isNewStudent = false;
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
