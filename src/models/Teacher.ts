import { User } from "../interfaces/User";
import { Person } from "./abstract/Person";
import { Material } from "./Material";
import { Subject } from "./Subject";


export class Teacher extends Person implements User {

    private subjects: Subject[] = [];
        constructor(id: number, name: string, email: string) {
        super(id, name, email);
    }
    public getName(): string {
        return this.name;
    }
    public getSubjects(): Subject[] {
        return this.subjects;
    }

    public getRole(): string {
        return "Teacher";
    }

    public login(): void {
        console.log(`${this.name} logged in.`);
    }

    public logout(): void {
        console.log(`${this.name} logged out.`);
    }

    /**
     * Uploads material to a subject
     * @param subject - The Subject to upload material to
     * @param material - The Material to upload
     */
    public uploadMaterial(subject: Subject, material: Material): void {
        subject.addMaterial(material);
    }

    /**
     * Adds a subject to the teacher's list of subjects
     * @param subject - The Subject to add
     */
    setSubjects(subjects: Subject[]): void {
        this.subjects = subjects;
    }

    /**
     * Authenticates the teacher's credentials
     * @param inputUsername - The username to authenticate
     * @param inputPassword - The password to authenticate
     * @returns True if authentication is successful, false otherwise
     */
    authenticate(inputUsername: string, inputPassword: string): boolean {
        return inputUsername === "teacher" && inputPassword === "password";
    }
}