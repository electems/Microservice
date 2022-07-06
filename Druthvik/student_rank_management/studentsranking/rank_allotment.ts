
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

   sortByAverage() {       
      return this.studentList.sort(this.sortStudents)
   }

   sortStudents(a:Student , b: Student)  {
      if (a.avgMarks < b.avgMarks) {
         return 1;
      }
      if (a.avgMarks > b.avgMarks) {
         return -1;
      }
      return 0;
   }
}