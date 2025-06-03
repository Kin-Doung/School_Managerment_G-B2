import { Student } from "../models/Student";
import { Assignment } from "../models/Assignment";

export class AssignmentService {
    submitAssignment(student: Student, assignment: Assignment, content: string): void {
        student.submitAssignment(assignment, content);
    }
}
