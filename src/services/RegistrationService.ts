import { Student } from "../models/Student";
import { Subject } from "../models/Subject";

export class RegistrationService {
    registerStudentToSubject(student: Student, subject: Subject): void {
        student.enrollSubject(subject);
    }
}
