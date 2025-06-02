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

    public getName(): string {
        return this.assignment.title; 
    }

    public getRole(): string {
        return "Grade"; 
    }
}