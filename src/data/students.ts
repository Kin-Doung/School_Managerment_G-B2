import { Student } from "../models/Student";
import { subjects } from "./subjects";

// Sample students enrolled in subjects with full data
export const students: Student[] = [
    new Student(1, "Student One", "student1@example.com", [subjects[0]], [], []),
    new Student(2, "Student Two", "student2@example.com", [subjects[1]], [], []),
];
