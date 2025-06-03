import { Subject } from "./Subject";
import { Grade } from "./Grade";
import { Feedback } from "./Feedback";
import { Timetable } from "./Timetable";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";

import { Person } from "./abstract/Person";

export class Student extends Person {
    private enrolledSubjects: Subject[];
    private grades: Grade[];
    private feedbacks: Feedback[];

    constructor(
        id: number,
        name: string,
        email: string,
        enrolledSubjects: Subject[] = [],
        grades: Grade[] = [],
        feedbacks: Feedback[] = []
    ) {
        super(id, name, email);
        this.enrolledSubjects = enrolledSubjects;
        this.grades = grades;
        this.feedbacks = feedbacks;
    }

    getRole(): string {
        return "Student";
    }

    getName(): string {
        return this.name;
    }

    /**
     * Views the student's timetable
     * @returns Array of Timetable objects for enrolled subjects
     */
    viewTimetable(): Timetable[] {
        return this.enrolledSubjects
            .map(subject => subject.timetable)
            .filter((timetable): timetable is Timetable => timetable !== null);
    }

    /**
     * Submits an assignment for a subject
     * @param assignment - The assignment to submit
     * @param content - The content of the submission
     */
    submitAssignment(assignment: Assignment, content: string): void {
        assignment.addSubmission(this, content);
    }

    /**
     * Adds a grade to the student's record
     * @param grade - The grade to add
     */
    addGrade(grade: Grade): void {
        this.grades.push(grade);
    }

    /**
     * Views the student's grades
     * @returns Array of Grade objects
     */
    viewGrades(): Grade[] {
        return this.grades;
    }

    /**
     * Provides feedback for a subject
     * @param subject - The subject for which feedback is given
     * @param rating - The rating given (1-5)
     * @param comment - The comment for the feedback
     */
    giveFeedback(subject: Subject, rating: number, comment: string): void {
        const feedback = new Feedback(subject, rating, comment);
        this.feedbacks.push(feedback);
    }

    /**
     * Enrolls the student in a subject
     * @param subject - The subject to enroll in
     */
    enrollSubject(subject: Subject): void {
        if (!this.enrolledSubjects.includes(subject)) {
            this.enrolledSubjects.push(subject);
        }
    }

    /**
     * Unenrolls the student from a subject
     * @param subject - The subject to unenroll from
     */
    public getSubjects(): Subject[] {
        return this.enrolledSubjects;
    }

    //Gets all feedbacks
    public getFeedbacks(): Feedback[] {
        return this.feedbacks;
    }

    // Gets all grades
    public getGrades(): Grade[] {
        return this.grades;
    }


}
