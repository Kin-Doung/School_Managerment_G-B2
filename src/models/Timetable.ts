export class Timetable{
    private day : string;
    private startTime: string;
    private endTime: string;
    private location: string;

    constructor (day:string, startTime: string, endTime: string, location: string){
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
    }

}