import { Injectable } from "@angular/core";
import { AbstractControlOptions, FormGroup } from "@angular/forms";
import { Student } from "../models/studentform";

@Injectable({
    providedIn: "root",
  })

  export class StudentService{
    onSubmit() {
        throw new Error("Method not implemented.");
      }
      private Courses = [
        {name:"BSc"},
        {name:"MSc"},
        {name:"BBA"},
        {name:"MBA"},
        {name:"MTECH"}
      ];
      private studentsList: Student[] = [
        {
          id:1,
          firstname: "shashi", 
          addres: "banglore",
          phoneNo:9964278188,
          course:"BSc"
         
        },
        {
            id:2,
            firstname: "kiran", 
            addres: "banglore rural",
            phoneNo:9964278888,
            course:"Msc"
        },
        {
          id:3,
          firstname: "dhru", 
          addres: "banglore rural",
          phoneNo:9964278888,
          course:"Msc"
      },
      {
        id:4,
        firstname: "vik", 
        addres: "banglore rural",
        phoneNo:9964278888,
        course:"Msc"
    },
    {
      id:5,
      firstname: "harsha", 
      addres: "banglore rural",
      phoneNo:9964278888,
      course:"Msc"
  },
      ];
      
      getCoursesFromData() {
        return this.Courses;
      }
      getStudentsFromData(): Student[] {
        return this.studentsList;
      }
    
      addStudent(student: Student) {
        student.id = this.studentsList.length + 1
        this.studentsList.push(student);
      }
      updateStudent(student: Student) {
        const index = this.studentsList.findIndex((u) => student.id === u.id);
        this.studentsList[index] = student;
      }
      deleteStudent(student: Student) {
        this.studentsList.splice(this.studentsList.indexOf(student), 1);
      }
  }
