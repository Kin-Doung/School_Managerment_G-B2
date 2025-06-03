import { Student } from "../models/Student";
import { Subject } from "../models/Subject";

/**
 * Service class for handling feedback-related operations
 * Provides methods for students to give feedback on subjects
 */
export class FeedbackService {
    /**
     * Submits feedback for a student on a subject
     * @param student - The Student who is giving feedback
     * @param subject - The Subject the feedback is for
     * @param rating - The rating given by the student (1-5)
     * @param comment - The comment provided by the student
     */
    giveFeedback(student: Student, subject: Subject, rating: number, comment: string): void {
        student.giveFeedback(subject, rating, comment);
    }
}
