import { Student } from './student'
import {RankAllotment} from './Records'

const student: Student[] = [
    {	
        "name": "John",
        "subjects": [
            {
                "name":"Maths",
                "semester":2,
                "marks":{
                    "scoredMarks" :50,
                    "maxMarks" :125,
                }
             },
             {
                "name":"science",
                "semester":2,
                "marks":{
                    "scoredMarks" :50,
                    "maxMarks" :127
                }
             }
        ], 
        "ScoreAvg": 50, 
    },
    {	
        "name": "kennedy",                                 
        "subjects": [
            {
                "name":"social",
                "semester":2,
                "marks":{
                    "scoredMarks" :100,
                    "maxMarks" :125,
                }
             },
             {
                "name":"english",
                "semester":2,
                "marks":{
                    "scoredMarks" :100,
                    "maxMarks" :127
                }
             }
        ],
        "ScoreAvg": 100 ,
    }

]

describe('Return Mock data to test the function', () => {
    test('should return data', () => {
      const studAvg = new RankAllotment(student)
       studAvg.calculateAvgMarks();
      expect(student[0].ScoreAvg).toBe(50)
      expect(student[1].ScoreAvg).toBe(100)
      });
    });



    describe('Return Mock data to test the function', () => {

      
        test('should return data', () => {
            const studentdata: Student[] = [

                {	
                    "name": "kennedy",                                 
                    "subjects": [
                        {
                            "name":"social",
                            "semester":2,
                            "marks":{
                                "scoredMarks" :100,
                                "maxMarks" :125,
                            }
                         },
                         {
                            "name":"english",
                            "semester":2,
                            "marks":{
                                "scoredMarks" :100,
                                "maxMarks" :127
                            }
                         }
                    ],
                    "ScoreAvg": 100 ,
                },
                    {	
                        "name": "john",
                        "subjects": [
                            {
                                "name":"Maths",
                                "semester":2,
                                "marks":{
                                    "scoredMarks" :50,
                                    "maxMarks" :125,
                                }
                             },
                             {
                                "name":"science",
                                "semester":2,
                                "marks":{
                                    "scoredMarks" :50,
                                    "maxMarks" :127
                                }
                             }
                        ], 
                        "ScoreAvg": 50, 
                    },
                ]
                
          const sortAvg = new RankAllotment(studentdata)
          const sortAvg1 =  sortAvg.sortByAverage();
          expect(studentdata[0].name).toBe("kennedy");
          expect(studentdata[1].name).toBe("john");
          });
        });