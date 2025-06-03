import { Student } from "../models/Student";
import { Assignment } from "../models/Assignment";

/**
 * Service class for handling assignment-related operations
 * Provides methods for students to submit assignments
 */
export class AssignmentService {
    /**
     * Submits an assignment for a student
     * @param student - The Student who is submitting the assignment
     * @param assignment - The Assignment to submit
     * @param content - The content of the submission
     */
    submitAssignment(student: Student, assignment: Assignment, content: string): void {
        student.submitAssignment(assignment, content);
    }
}
