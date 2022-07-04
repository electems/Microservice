import { Student } from '../models/student';



export class RankAllotment {

  studentsList: RankAllotment[] = []

   constructor(student: RankAllotment[]){
   this.studentsList = student
   }

  calculateAvgOfAllTheStudents(studentMarks: []): void{
     var total = 0;
     for(var i=0;i<studentMarks.length;i++){
        total = total+studentMarks[i]
     }
     var avgScore = total/studentMarks.length;
  }
  sortByRank(averageScore: []): void{
    let rankArray =[]
    for(var i=0,rank = 0;i<averageScore.length;i++){
        if(i>0&& averageScore[i]<averageScore[i+1]){
          rank++;
        }
        rankArray.push(rank)
    }
      var tempArray
      for(var i=0;i<rankArray.length;i++){
        for(var j=i;i<rankArray.length;j++){
          if (rankArray[i] < rankArray[j]) {
           tempArray = rankArray[i];
            rankArray[i] = rankArray[j];
            rankArray[j] = tempArray;
          }
      }
  }
}

  printAndReturnCalculatedRank(student: Student[], rank: number){
      for(let i = 0; i<rank;i++){                                //still have to do return and print
          return rank
      }
  }
}
    

