export class studentsList{
    name: string;
    semester: string
    marks: number
    scoredMarks: number
    maxMarks: number

    constructor(name: string,  semester: string, marks: number, scoredMarks: number, maxMarks: number){
        this.name = name;
        this.semester=semester;
        this.marks=marks;
        this.scoredMarks=scoredMarks;
        this.maxMarks=maxMarks
    }
}