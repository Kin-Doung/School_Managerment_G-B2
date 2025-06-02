import { Assignment } from './Assignment';

export class Grade {
    assignment: Assignment;
    score: number;
    isMissing: boolean;

    constructor(assignment: Assignment, score: number, isMissing: boolean) {
        this.assignment = assignment;
        this.score = score;
        this.isMissing = isMissing;
    }
}