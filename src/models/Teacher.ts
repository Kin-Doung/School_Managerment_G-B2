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

    public uploadMaterial(subject: Subject, material: Material): void {
        subject.addMaterial(material);
    }
    setSubjects(subjects: Subject[]): void {
        this.subjects = subjects;
    }

}