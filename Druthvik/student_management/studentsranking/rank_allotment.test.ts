import { Student } from '../models/student';
import { RankAllotment } from '../studentsranking/rank_allotment';



describe('calculate average of students', () => {
    test('should return averge of marks', async() => {
     const student: Student[] = [
			{	
				"name": "John",
                "subjects": [
					{
						"name":"Maths",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :67,
							"maxmarks" :125,
                        }
			         },
                     {
						"name":"science",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :68,
							"maxmarks" :127
                        }
			         }
                ]
            },
            {	
				"name": "kennedy",
                "subjects": [
					{
						"name":"social",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :90,
							"maxmarks" :125,
                        }
			         },
                     {
						"name":"english",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :80,
							"maxmarks" :127
                        }
			         }
                ]
            }
            
        ]
	 
     const rankAllotment = new RankAllotment(student)
     rankAllotment.calculateAvgOfAllTheStudents()
    })

    

}
)
describe('calculate average of students', () => {
    test('should return averge of marks', async() => {
        const student: Student[] = [
			{	
				"name": "John",
                "subjects": [
					{
						"name":"Maths",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :67,
							"maxmarks" :125,
                        }
			         },
                     {
						"name":"science",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :68,
							"maxmarks" :127
                        }
			         }
                ],
            },
            {	
				"name": "kennedy",
                "subjects": [
					{
						"name":"social",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :90,
							"maxmarks" :125,
                        }
			         },
                     {
						"name":"english",
						"semester":"2",
                        "mark":{
                            "scoredmarks" :80,
							"maxmarks" :127
                        }
			         }
                ]
            }
        ]
          const rankAllotment = new RankAllotment(student)
          const sortByAvg = rankAllotment.sortByAverage
        
    })

   

}
)