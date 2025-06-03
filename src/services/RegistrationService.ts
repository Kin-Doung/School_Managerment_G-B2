import { Student } from "../models/Student";
import { Subject } from "../models/Subject";

/**
 * Service class for handling feedback-related operations
 * Provides methods for students to give feedback on subjects
 */
export class RegistrationService {
    /**
     * Registers a student to a subject
     * @param student - The Student to register
     * @param subject - The Subject to register the student to
     */
    registerStudentToSubject(student: Student, subject: Subject): void {
        student.enrollSubject(subject);
    }
}
