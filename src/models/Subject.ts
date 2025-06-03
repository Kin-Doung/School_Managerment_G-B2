// src/models/Subject.ts
import { Classroom } from './Classroom';
import { Timetable } from './Timetable';
import { Material } from './Material';
import { Assignment } from './Assignment';
import { Quiz } from './Quiz';

export class Subject {
    name: string;
    code: string;
    classroom: Classroom;
    private timetable: Timetable[] = [];
    private materials: Material[] = [];
    private assignments: Assignment[] = [];
    private quizzes: Quiz[] = [];

    constructor(name: string, code: string, classroom: Classroom) {
        this.name = name;
        this.code = code;
        this.classroom = classroom;
    }

    addMaterial(material: Material): void {
        this.materials.push(material);
    }

    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }

    addTimetable(timetable: Timetable): void {
        this.timetable.push(timetable);
    }

    addQuiz(quiz: Quiz): void {
        this.quizzes.push(quiz);
    }

    getName(): string {
        return this.name;
    }
}