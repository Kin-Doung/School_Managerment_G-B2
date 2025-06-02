import { Student } from './Student';
import { Grade } from './Grade';

export class ReportCard {
    student: Student;
    grades: { [key: string]: Grade };

    constructor(student: Student, grades: { [key: string]: Grade }) {
        this.student = student;
        this.grades = grades;
    }
}