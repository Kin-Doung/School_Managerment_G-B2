export class Quiz{
    private subjectId: number;
    private date: string;
    private room: string;
    constructor(subjectId: number, date: string, room: string){
        this.subjectId = subjectId;
        this.date = date;
        this.room = room;
    }
}