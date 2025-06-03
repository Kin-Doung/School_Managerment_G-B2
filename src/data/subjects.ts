import { Subject } from "../models/Subject";
import { Timetable } from "../models/Timetable";
import { Classroom } from "../models/Classroom";
import { Material } from "../models/Material";
import { Assignment } from "../models/Assignment";
import { Exam } from "../models/Exam";
import { Quiz } from "../models/Quiz";

// Sample classrooms
const classroomA = new Classroom("Room A", "First Floor");
const classroomB = new Classroom("Room B", "Second Floor");

// Sample timetables
const timetableMath = new Timetable("Monday", "09:00", "10:30", "Room A");
const timetablePhysics = new Timetable("Tuesday", "11:00", "12:30", "Room B");

// Sample materials
const material1 = new Material("HTML/CSS", "http://W3Schools.com");
const material2 = new Material("Algorithms", "http://W3Schools.com");

// Sample assignments
const assignment1 = new Assignment(1, "Math Assignment 1", "2024-12-31", false, []);
const assignment2 = new Assignment(2, "Physics Assignment 1", "2024-12-31", false, []);

// Sample exams
const exam1 = new Exam(1, "2024-12-15", "Room A");
const exam2 = new Exam(2, "2024-12-16", "Room B");

// Sample quizzes
const quiz1 = new Quiz(1, "2024-11-01", "Room A");
const quiz2 = new Quiz(2, "2024-11-02", "Room B");

// Subjects with full data and explicit arrays
export const subjects: Subject[] = [
    new Subject(1, "Mathematics", "MATH101", classroomA, timetableMath, [material1], [assignment1], [exam1], [quiz1]),
    new Subject(2, "Physics", "PHYS101", classroomB, timetablePhysics, [material2], [assignment2], [exam2], [quiz2]),
];
