import { Subject } from "./Subject";
export class Feedback{
    private subject: Subject;
    private rating: number;
    private comment: string;

    constructor(subject: Subject, rating: number, comment: string){
        this.subject = subject;
        this.rating = rating;
        this.comment = comment;
    }
}