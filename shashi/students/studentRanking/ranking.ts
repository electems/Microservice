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
}


