
import { Student } from '../models/student';

export class RankAllotment {
   
studentList: Student[] = [];

constructor(studentsList: Student[]) {
   this.studentList = studentsList;
 }
 
   calculateAvgOfAllTheStudents(): void{
      
      for (const student of this.studentList) {
        const subjects = student.subjects
         let totalMark = 0;
         for(const subject of subjects){
            totalMark += subject.mark.scoredmarks         
         }
    student.avgMarks = totalMark/student.subjects.length
       
      }

   }
    sortByAverage()  {
      const student = this.studentList
     const studentSort =  student.sort((a, b) => a.avgMarks > b.avgMarks ? 1 : -1)
     console.log(studentSort)
    }

   // displayByAverage(sorted[]: []): []{
        
   // }

}      

