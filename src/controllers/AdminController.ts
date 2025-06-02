import { Admin } from "../models/Admin";
import { Student } from "../models/Student";
import { Subject } from "../models/Subject";
import { Teacher } from "../models/Teacher";

export class AdminController {
  constructor(private admin: Admin) {}

  public assignStudentToSubject(student: Student, subject: Subject): void {
    this.admin.assignSubjectToStudent(student, subject);
  }

  public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
    this.admin.assignTeacherToSubject(teacher, subject);
  }
}