import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentForm } from 'src/app/models/student-form.model';
import { StudentFormService } from 'src/app/services/student-form.service';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css'],
})
export class StudentEditFormComponent implements OnInit {
  currentStudent: StudentForm = {
    firstname: '',
    addres: '',
    phone: '',
    course: '',
    id: 0,
  };

  studentForm: boolean = false;
  editStudentForm: boolean = false;
  editedStudent: any = {};
  courses: any;

  constructor(
    private StudentFormService: StudentFormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courses = this.getCourses();
  }
  getCourses() {
    return this.StudentFormService.getStudentCourse();
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
  updateStudent() {
    this.StudentFormService.updateStudent(this.editedStudent);
    this.editStudentForm = false;
    this.editedStudent = {};
  }
  cancelEdits() {
    this.editedStudent = {};
    this.editStudentForm = false;
  }
}
