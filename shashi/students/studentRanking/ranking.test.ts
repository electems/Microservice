import { students } from "../models/student";
import { StudentRank } from "../studentRanking/ranking";
const student: students[] = [
  {
    name: "John",
    subject: [
      {
        name: "Maths",

        semester: "2",

        marks: {
          scoredMarks: 50,

          maxMarks: 125,
        },
      },

      {
        name: "science",

        semester: "2",

        marks: {
          scoredMarks: 50,

          maxMarks: 127,
        },
      },
    ],
  },

  {
    name: "kennedy", //loaded student array

    subject: [
      {
        name: "social",

        semester: "2",

        marks: {
          scoredMarks: 68,

          maxMarks: 127,
        },
      },

      {
        name: "english",

        semester: "2",

        marks: {
          scoredMarks: 80,
          maxMarks: 100,
        },
      },
    ],
  },
];

const ranking = new StudentRank(student);
ranking.AvgMarksCalculation();
expect(student[0].Avg_marks).toBe(50);
expect(student[1].Avg_marks).toBe(74);
