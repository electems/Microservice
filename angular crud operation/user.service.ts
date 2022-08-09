import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private states = [
    { name: "Select One" },
        {  name: "karanataka" },
        {  name: "Andra" },
        {  name: "goa" } 
  ];

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Durgesh',
      lastName: 'Pal',
      email:'duragesh@gmail.com',
      adress:'haveri',
      state:'karanatak'
    
    },
    {
      id: 2,
      firstName: 'Ankur',
      lastName: 'Pal',
      email:'ankur@gmail.com',
      adress:'bengalore',
      state:'karanatak'
    }
   
  ];
 
  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  
  }

  getUsersStates(){
    return this.states;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);
    this.states;

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
    this.states;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
