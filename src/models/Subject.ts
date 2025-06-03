import { Classroom } from "./Classroom";
import { Timetable } from "./Timetable";
import { Material } from "./Material";
import { Assignment } from "./Assignment";
import { Exam } from "./Exam";
import { Quiz } from "./Quiz";
export class Subject {
    private name: string;
    private code: string;
    private classroom: Classroom;
    public timetable: Timetable;
    private materials: Material[];
    private assignments: Assignment[];
    private exam: Exam[];
    private quizzes: Quiz[];
    constructor(name: string, code: string, classroom: Classroom, timetable: Timetable, materials: Material[], assignments: Assignment[], exam: Exam) {
        this.name = name;
        this.code = code;
        this.classroom = classroom;
        this.materials = materials;
        this.assignments = assignments;
        this.timetable = timetable;
        this.exam = [];
        this.quizzes = [];
    }
    addMaterial(material: Material): void {
        this.materials.push(material);
    }

    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }
}