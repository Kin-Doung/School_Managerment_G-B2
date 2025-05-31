import { Student } from "./Student";
export class Assignment{
    private id: number;
    private title: string;
    private dueDate: string;
    private isSubmitted: boolean;
    private submissions: { student: Student, content: string }[];
    constructor (id: number, title: string, dueDate: string, isSubmitted: boolean, submissions: { student: Student, content: string }[]){
        this.id = id;
        this.dueDate = dueDate;
        this.title = title;
        this.isSubmitted = isSubmitted;
        this.submissions = submissions;
    }
    addSubmission(student: Student, content: string): void {
        this.submissions.push({ student, content });
        this.isSubmitted = true;
    }
}