import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Stud';
import { StudentService } from '../services/student.service';
import { StudentformService } from '../services/studentform.service';
@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor(private studentFormService:StudentformService) { }

 // requiredForm: FormGroup;
  user: Student[] = [];
  firstname:any;
  userForm: boolean = false;
  isNewUser: boolean = false;
  newUser: any = { };
  editUserForm: boolean = false;
  editedUser: any = {};
  searchText!: string;
  filterUser: Student[] = [];
  StudentService: any;

  get searchTerm(): string {
    return this.searchText;
  }

  set searchTerm(value: string) {
    this.searchText = value;
    if (this.searchText == "") {
      this.filterUser = this.user;
    } else {
      this.filterUser = this.getFilteredList(value);
     }
  }

  getFilteredList(searchText: string) {
    return this.filterUser.filter((user) => {
      return user.firstName.toLowerCase().includes(searchText);
    });
  }
 

  ngOnInit() {
    this.user = this.getStudents();
    this.filterUser = this.user;
  }

  Removeuser(user: Student) {
    this.studentFormService.deleteUser(user);
  }
 

  getStudents(): Student[] {
    return this.studentFormService.getCourseData();
  }

  showEditUserForm(user: Student) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.user.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: Student) {
    if (this.isNewUser) {
      // add a new user
      this.StudentService.addUser(user)
    }
    this.userForm = false;
  }

  updateUser() {
    this.StudentService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: Student) {
    this.StudentService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}



