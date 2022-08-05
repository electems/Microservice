import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './models/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[]=[];
  states: any;
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};
  registerForm: FormGroup;
  filterUser :  User[];
  searchText: string;

  constructor(private userService: UserService) { 
  }

  set searchTerm(value: string) {
    this.searchText = value;
    if (this.searchText == "") {
      this.filterUser = this.users;
    } else {
      this.filterUser = this.getFilteredList(value);
      console.log("");
    }
  }

  getFilteredList(searchText: string) {
    return this.filterUser.filter((user) => {
      return user.firstName.toLowerCase().includes(searchText);
    });
  }
  
  ngOnInit() {
    this.users = this.getUsers();
    this.states = this.getStates();
    this.filterUser = this.users;

  }

  getStates() {
    return this.userService.getStatesFromData();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    this.userForm = false;
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    this.editUserForm = false;
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
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
