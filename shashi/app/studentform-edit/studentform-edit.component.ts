import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/studentform';
import { StudentService } from 'src/app/services/studentform.service'

@Component({
  selector: 'app-edit-student-form',
  templateUrl: './studentform-edit.component.html',
  styleUrls: ['./studentform-edit.component.css']
})
export class EditStudentFormComponent implements OnInit {
  currentStudent: Student = {
    firstname: '',
    addres: '',
    phoneNo: 0,
    course: '',
    id: 0
  }
  studentForm: boolean = false;
  editStudentForm: boolean = false;
  editedStudent: any = {};
  Courses: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router)
   { }

  ngOnInit(): void {
    this.Courses=this.getCourses()
  }

  getCourses() {
    return this.studentService.getCoursesFromData();
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

  updateStudent() {
    this.studentService.updateStudent(this.editedStudent);
    this.editStudentForm = false;
    this.editedStudent = {};
  }
  cancelEdits() {
    this.editedStudent = {};
    this.editStudentForm = false;
  }
}