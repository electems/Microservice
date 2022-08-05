import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
 requiredForm: FormGroup;
  users: User[];
  state:any;
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = { };
  editUserForm: boolean;
  editedUser: any = {};
  searchText :string;
  filterUser :  User[];

  get searchTerm(): string {
    return this.searchText;
  }

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
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.users = this.getUsers();
    this.state = this.getState();
    this.filterUser = this.users;
  }

  getState(){
    return this.userService.getStateData();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user),[
        Validators.required,
        Validators.minLength(4)];
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
