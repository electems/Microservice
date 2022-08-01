import { Student } from './student.js';

export class CollectionTraining {
    students:Student[] = [];

    constructor(students:Student[]) {
        this.students = students;
    }
    
    learnFilter(): Student[] {
        const topic=this.students.filter(function(student:{ name: string, subject:string}):boolean
        {
            return student.subject == 'computer'
        })
        return topic;
    }
}

