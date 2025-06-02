import { User } from "../interfaces/User";
import { Person } from "./abstract/Person";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class Admin extends Person implements User {
    constructor(id: number, name: string, email: string) {
        super(id, name, email); 
    }
    public getName(): string {
        return this.name;
    }
    public getRole(): string {
        return "Admin";
    }

    public login(): void {
        console.log(`${this.name} logged in.`);
    }

    public logout(): void {
        console.log(`${this.name} logged out.`);
    }

    public assignSubjectToStudent(student: Student, subject: Subject): void {
        student.getSubjects().push(subject);
    }

    public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
        teacher.getSubjects().push(subject);
    }
}