import { Assignment } from './Assignment';
import { Envaluatable } from '../interfaces/Envaluatable';
export class Grade implements Envaluatable {
    private assignment: Assignment;
    private score: number;
    private isMissing: boolean;

    constructor(assignment: Assignment, score: number, isMissing: boolean) {
        this.assignment = assignment;
        this.score = score;
        this.isMissing = isMissing;
    }

    /**
     * Gets the assignment title
     * @returns The assignment title
     */
    public getName(): string {
        return this.assignment.title; 
    }

    /**
     * Gets the assignment ID
     * @returns The assignment ID
     */
    public getRole(): string {
        return "Grade"; 
    }

    /**
     * Gets the score of the grade
     * @returns The score
     */
    evaluate(): number {
        if (this.isMissing) {
            return 0; // If the assignment is missing, return a score of 0
        }
        return this.score; // Otherwise, return the score
    }
}