import { Student } from './student';

export class RankAllotment {
  studentList: Student[] = [];

  constructor(studentsList: Student[]) {
    this.studentList = studentsList;
  }



  calculateAvgMarks(): void {
    for (const student of this.studentList) {
      const subject = student.subjects;
      let totalMarks = 0;
      for (const subjects of subject) {
        totalMarks += subjects.marks.scoredMarks;
      }
      student.ScoreAvg = totalMarks / student.subjects.length;
    }
  }

  sortByAverage() {
    return this.studentList.sort(this.sortStudents);
  }

  sortStudents(a: Student, b: Student) {
    if (a.ScoreAvg< b.ScoreAvg) {
      return 1;
    }
    if (a.ScoreAvg > b.ScoreAvg) {
      return -1;
    }
    return 0;
  }
}

