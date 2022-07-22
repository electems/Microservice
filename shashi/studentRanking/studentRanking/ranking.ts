import { students } from "../models/student";
import { Mark } from "../models/mark";

export class StudentRank {
  studentlist: students[] = [];

  constructor(studentlist: students[]) {
    this.studentlist = studentlist;
  }

  AvgMarksCalculation(): void {
    for (const student of this.studentlist) {
      const subject = student.subject;
      let TotalMark = 0;
      for (const subjects of subject) {
        TotalMark += subjects.marks.scoredMarks;
      }
      student.Avg_marks = TotalMark / student.subject.length;
    }
  }
  sortByAverage() {       
    return this.studentlist.sort(this.sortStudents)
  }
  
  sortStudents(a:students , b: students)  {
    if (a.Avg_marks < b.Avg_marks) {
       return 1;
    }
    if (a.Avg_marks > b.Avg_marks) {
       return -1;
    }
    return 0;
  }
  
}




