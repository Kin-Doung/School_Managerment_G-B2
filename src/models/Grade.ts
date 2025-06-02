import { Assignment } from './Assignment';

export class Grade {
    private assignment: Assignment;
    private score: number;
    private isMissing: boolean;

    constructor(assignment: Assignment, score: number, isMissing: boolean) {
        this.assignment = assignment;
        this.score = score;
        this.isMissing = isMissing;
    }

    // Get the name (assuming it relates to the assignment's title or subject)
    public getName(): string {
        return this.assignment.title; // Assuming Assignment has a 'title' property
    }

    // Get the role (could be a placeholder or related to the context, e.g., "Student" or "Grade")
    public getRole(): string {
        return "Grade"; // Default role, can be adjusted based on context
    }
}