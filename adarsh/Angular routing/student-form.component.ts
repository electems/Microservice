import { Component, OnInit } from '@angular/core';
import { StudentFormService } from 'src/app/services/student-form.service';
import { StudentForm } from 'src/app/models/student-form.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { StudentEditFormComponent } from '../student-edit-form/student-edit-form.component';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  title = 'Student';
  students: StudentForm[] = [];
  courses: any;
  studentForm: boolean = false;
  isNewStudent: boolean = false;
  newStudent: any = {};
  editStudentForm: boolean = false;
  editedStudent: any = {};
  filterStudent: StudentForm[] = [];
  private searchText: any;
  EditeStudent!: StudentForm;
  StudentEditFormComponent: any;
  currentStudent: StudentForm = {
    firstname: '',
    addres: '',
    phone: '',
    course: '',
    id: 0,
  };
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
  constructor(private StudentFormService: StudentFormService) {}

  ngOnInit(): void {
    this.students = this.getStudents();
    this.courses = this.getCourses();
    this.filterStudent = this.students;
  }
  showEditStudentForm(student: StudentForm) {
    this.studentForm = false;
    if (!student) {
      this.studentForm = false;
      return;
    }
    this.editStudentForm = true;
    this.editedStudent = student;
  }

  getStudents(): StudentForm[] {
    return this.StudentFormService.getStudentFromData();
  }
  getCourses() {
    return this.StudentFormService.getStudentCourse();
  }

  showAddStudentForm() {
    // resets form if edited user
    this.editStudentForm = false;
    if (this.students.length) {
      this.newStudent = {};
    }
    this.studentForm = true;
    this.isNewStudent = true;
  }

  saveStudentForm(student: StudentForm) {
    if (this.isNewStudent) {
      // add a new user
      this.StudentFormService.addStudent(student);
    }
    this.studentForm = false;
  }

  removeStudent(student: StudentForm) {
    this.StudentFormService.deleteStudent(student);
  }

  cancelNewStudent() {
    this.newStudent = {};
    this.studentForm = false;
  }
}
