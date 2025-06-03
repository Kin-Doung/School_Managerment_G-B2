import { Admin } from "../models/Admin";
import { Student } from "../models/Student";
import { Subject } from "../models/Subject";
import { Teacher } from "../models/Teacher";

/**
 * Controller class for admin operations
 * Handles administrative tasks like assigning students/teachers to subjects
 */
export class AdminController {
  /**
   * Creates an AdminController instance
   * @param admin - The Admin instance to perform operations with
   */
  constructor(private admin: Admin) { }

  /**
     * Assigns a student to a subject
     * @param student - The Student to assign
     * @param subject - The Subject to assign the student to
     */
  public assignStudentToSubject(student: Student, subject: Subject): void {
    this.admin.assignSubjectToStudent(student, subject);
  }
  /**
     * Assigns a teacher to a subject
     * @param teacher - The Teacher to assign
     * @param subject - The Subject to assign the teacher to
     */
  public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
    this.admin.assignTeacherToSubject(teacher, subject);
  }
}