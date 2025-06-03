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

    public getName(): string {
        return this.assignment.title; 
    }

    public getRole(): string {
        return "Grade"; 
    }
    evaluate(): number {
        if (this.isMissing) {
            return 0; // If the assignment is missing, return a score of 0
        }
        return this.score; // Otherwise, return the score
    }
}