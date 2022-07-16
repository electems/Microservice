import { students } from "../models/student";
import{StudentRank} from"../studentRanking/ranking";
const student: students[] = [
  {
    "name": "John",
    "subject": [
      {
        "name": "Maths",

        "semester":"2",

        "marks": {
          "scoredMarks": 50,

          "maxMarks": 125,
        },
      },

      {
        "name": "science",

        "semester": "2",

        "marks": {
            "scoredMarks": 50,

            "maxMarks": 127,
        },
      },
    ],
  
  },

  {
    "name": "kennedy", //loaded student array

    "subject": [
      {
        "name": "social",

        "semester":"2",

        "marks": {
            "scoredMarks": 68,

            "maxMarks": 127,
        },
      },

      {
        "name": "english",

        "semester":"2",

        "marks": {
        "scoredMarks": 80,
        "maxMarks": 100
        },
      },
    ],

  },
];
describe('calculate average of students', () => {
  test('students with different subject', async () => {
const ranking = new StudentRank(student);
ranking.AvgMarksCalculation();
expect(student[0].Avg_marks).toBe(50);
expect(student[1].Avg_marks).toBe(74);
})
})

describe('sorting of students', () => {
  test('sorting students by Avg_marks', async () => {
  const data = student
  data[0].Avg_marks= 50
  data[1].Avg_marks= 74
const sort = new StudentRank(student);
sort.sortByAverage();
expect(student[0].name).toBe("kennedy");
expect(student[1].name).toBe("john");
})
})