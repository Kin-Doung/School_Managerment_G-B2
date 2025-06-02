import { Classroom } from "./Classroom";
import { Timetable } from "./Timetable";
import { Material } from "./Material";
import { Assignment } from "./Assignment";
import { Exam } from "./Exam";
export class Subject {
    private name : string;
    private code : string;
    private classroom : Classroom;
    public timetable: Timetable
    private materials: Material[];
    private assignments: Assignment[];
    private quizzes: Exam;
    constructor (name:string, code : string, classroom : Classroom, timetable: Timetable, materials: Material[], assignments: Assignment[], quizzes: Exam){
        this.name = name;
        this.code = code;
        this.classroom = classroom;
        this.timetable = timetable;
        this.materials = materials;
        this.assignments = assignments;
        this.quizzes = quizzes;
    }
    addMaterial(material: Material): void {
        this.materials.push(material);
    }

    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }
}