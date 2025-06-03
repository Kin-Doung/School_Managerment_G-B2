import { User } from "../interfaces/User";
import { Person } from "./abstract/Person";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

/**
 * Class representing an Admin user with management capabilities
 */
export class Admin extends Person implements User {
    /**
     * Creates an Admin instance
     * @param id - The admin's unique identifier
     * @param name - The admin's name
     * @param email - The admin's email address
     */
    constructor(id: number, name: string, email: string) {
        super(id, name, email); 
    }

    /**
     * Gets the admin's name
     * @returns The admin's name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Gets the admin's role
     * @returns The admin's role
     */
    public getRole(): string {
        return "Admin";
    }

    /**
     * Logs in the admin
     */
    public login(): void {
        console.log(`${this.name} logged in.`);
    }

    /**
     * Logs out the admin
     */
    public logout(): void {
        console.log(`${this.name} logged out.`);
    }

    /**
     * Assigns a subject to a student
     * @param student - The student to whom the subject will be assigned
     * @param subject - The subject to assign
     */
    public assignSubjectToStudent(student: Student, subject: Subject): void {
        student.getSubjects().push(subject);
    }

    /**
     * Assigns a teacher to a subject
     * @param teacher - The teacher to whom the subject will be assigned
     * @param subject - The subject to assign
     */
    public assignTeacherToSubject(teacher: any, subject: Subject): void {
        if (typeof teacher.getSubjects === "function") {
            teacher.getSubjects().push(subject);
        } else if (Array.isArray(teacher.subjects)) {
            teacher.subjects.push(subject);
        } else {
            throw new Error("Teacher object does not have a subjects property.");
        }
    }

    /**
     * Authenticates the admin with a username and password
     * @param inputUsername - The username to authenticate
     * @param inputPassword - The password to authenticate
     * @returns True if authentication is successful, false otherwise
     */
    authenticate(inputUsername: string, inputPassword: string): boolean {
        return inputUsername === "admin" && inputPassword === "password";
    }
}