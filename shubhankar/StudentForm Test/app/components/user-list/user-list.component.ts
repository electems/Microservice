import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  currentUsers = {
    id: '',
    product: '',
    quality: '',
    published: 'Pending',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  private async fetchAllUsers() {
    const data = await this.userService.fetchAllUsers().toPromise();
    this.users = data;
  }

  setActiveuser(user: any) {
    this.currentUsers = user;
  }
}
