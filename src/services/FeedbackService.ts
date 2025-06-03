import { Student } from "../models/Student";
import { Subject } from "../models/Subject";

export class FeedbackService {
    giveFeedback(student: Student, subject: Subject, rating: number, comment: string): void {
        student.giveFeedback(subject, rating, comment);
    }
}
