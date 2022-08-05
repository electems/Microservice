import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { User } from "./models/user";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};
  State: any;
  title = "Template driven forms";
  contactForm: any;
  filterUser: User[];
  searchText: string;

  set searchTerm(value: string) {
    this.searchText = value;
    if (this.searchText == "") {
      this.filterUser = this.users;
    } else {
      this.filterUser = this.getFilteredList(value);
    }
  }

  getFilteredList(searchText: string) {
    return this.filterUser.filter((user) => {
      return user.firstName.toLowerCase().includes(searchText);
    });
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.getUsers();
    this.State = this.getStates();
    this.filterUser = this.users;
  }
  onSubmit() {
    alert(
      "Form Submitted succesfully!!!\n Check the values in browser console."
    );
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
    } else {
      this.userForm = false;
    }
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
