import { Classroom } from "./Classroom";
import { Timetable } from "./Timetable";
import { Material } from "./Material";
import { Assignment } from "./Assignment";
import { Exam } from "./Exam";
import { Quiz } from "./Quiz";
export class Subject {
    private id: number;
    private name: string;
    private code: string;
    private classroom: Classroom | null;
    public timetable: Timetable | null;
    private materials: Material[];
    private assignments: Assignment[];
    private exams: Exam[];
    private quizzes: Quiz[];

    constructor(id: number, name: string, code: string = "", classroom: Classroom | null = null, timetable: Timetable | null = null, materials: Material[] = [], assignments: Assignment[] = [], exams: Exam[] = [], quizzes: Quiz[] = []) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.classroom = classroom;
        this.timetable = timetable;
        this.materials = materials;
        this.assignments = assignments;
        this.exams = exams;
        this.quizzes = quizzes;
    }

    /**
     * Adds material to the subject
     * @param material - The Material to add
     */
    addMaterial(material: Material): void {
        this.materials.push(material);
    }

    /**
     * Adds an assignment to the subject
     * @param assignment - The Assignment to add
     */
    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }

    /**
     * Adds an exam to the subject
     * @param exam - The Exam to add
     */
    addExam(exam: Exam): void {
        this.exams.push(exam);
    }

    addQuiz(quiz: Quiz): void {
        this.quizzes.push(quiz);
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getAssignments(): Assignment[] {
        return this.assignments;
    }
    getExams(): Exam[] {
        return this.exams;
    }

    getQuizzes(): Quiz[] {
        return this.quizzes;
    }

    getMaterials(): Material[] {
        return this.materials;
    }

    getClassroom(): Classroom | null {
        return this.classroom;
    }

    getTimetable(): Timetable | null {
        return this.timetable;
    }

    setClassroom(classroom: Classroom): void {
        this.classroom = classroom;
    }
}
