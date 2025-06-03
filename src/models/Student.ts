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

    viewTimetable(): Timetable[] {
        return this.enrolledSubjects
            .map(subject => subject.timetable)
            .filter((timetable): timetable is Timetable => timetable !== null);
    }

    submitAssignment(assignment: Assignment, content: string): void {
        assignment.addSubmission(this, content);
    }

    addGrade(grade: Grade): void {
        this.grades.push(grade);
    }

    viewGrades(): Grade[] {
        return this.grades;
    }

    giveFeedback(subject: Subject, rating: number, comment: string): void {
        const feedback = new Feedback(subject, rating, comment);
        this.feedbacks.push(feedback);
    }

    enrollSubject(subject: Subject): void {
        if (!this.enrolledSubjects.includes(subject)) {
            this.enrolledSubjects.push(subject);
        }
    }

    public getSubjects(): Subject[] {
        return this.enrolledSubjects;
    }
}
