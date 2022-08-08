import { Injectable } from '@angular/core';
import { Student } from '../models/Stud';

@Injectable({
  providedIn: 'root'
})
export class StudentformService {

  constructor() { }
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  private student: Student[] = [
    {
      
      firstName: 'Durgesh',
      Address: 'Delhi',
      Phoneno: 7676869585,
      course: 'Language'
    },
    { 
      firstName: 'Ravi',
      Address: 'Mumbai',
      Phoneno: 7676869585,
      course: 'B.Tech'
    },
    {
      firstName: 'Durgesh',
      Address: 'Bhopal',
      Phoneno: 7676869585,
      course: 'ItI'
    },
    {
      firstName: 'Durgesh',
      Address: 'Kerela',
      Phoneno: 7676869585,
      course: 'It'
    }
    ];
 

  getCourseData(){
    return this.student;
  }


 
 addUser(user: Student) {
  
    this.student.push(user);
  }
  updateUser(user: Student) {
    const index = this.student.findIndex(u => user.firstName === u.firstName);
    this.student[index] = user;
  }
  deleteUser(user: Student): void {
    this.student.splice(this.student.indexOf(user), 1);
  }
}


