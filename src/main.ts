import { Student } from "./models/Student";
import { Admin } from "./models/Admin";
import { AssignmentService } from "./services/AssignmentService";
import { AuthService } from "./services/AuthService";
import { FeedbackService } from "./services/FeedbackService";
import { RegistrationService } from "./services/RegistrationService";
import { AdminController } from "./controllers/AdminController";
import { Grade } from "./models/Grade";
import { subjects } from "./data/subjects";
import { students } from "./data/students";

function main() {
    const admin = new Admin(1, "AdminUser", "admin@example.com");
    const adminController = new AdminController(admin);
    const assignmentService = new AssignmentService();
    const authService = new AuthService();
    const feedbackService = new FeedbackService();
    const registrationService = new RegistrationService();

    const teacher1 = { id: 1, name: "Alice", email: "alice@example.com", subjects: [subjects[0]] };
    const teacher2 = { id: 2, name: "Bob", email: "bob@example.com", subjects: [subjects[1]] };

    adminController.assignStudentToSubject(students[0], subjects[0]);
    adminController.assignStudentToSubject(students[1], subjects[1]);
    adminController.assignTeacherToSubject(teacher1 as any, subjects[0]);
    adminController.assignTeacherToSubject(teacher2 as any, subjects[1]);

    console.log("Admin authentication (should be true):", authService.authenticate("admin", "password"));
    console.log("Teacher1 authentication (should be true):", authService.authenticate("teacher", "password"));
    console.log("Student1 authentication (should be true):", authService.authenticate("student", "password"));
    console.log("Invalid authentication (should be false):", authService.authenticate("admin", "wrongpassword"));

    const assignment1 = subjects[0].getAssignments()[0];
    const assignment2 = subjects[1].getAssignments()[0];

    assignmentService.submitAssignment(students[0], assignment1, "My math assignment content");
    assignmentService.submitAssignment(students[1], assignment2, "My physics assignment content");

    console.log("Assignment1 submitted (should be true):", assignment1["isSubmitted"]);
    console.log("Assignment2 submitted (should be true):", assignment2["isSubmitted"]);

    students[0].addGrade(new Grade(assignment1, 95, false));
    students[1].addGrade(new Grade(assignment2, 88, false));

    console.log("Student1 grade for assignment1 (should be 95):", students[0].viewGrades()[0].evaluate());
    console.log("Student2 grade for assignment2 (should be 88):", students[1].viewGrades()[0].evaluate());

    feedbackService.giveFeedback(students[0], subjects[0], 5, "Great subject!");
    feedbackService.giveFeedback(students[1], subjects[1], 4, "Interesting but challenging.");

    console.log("Student1 feedbacks:", (students[0] as any)["feedbacks"]);
    console.log("Student2 feedbacks:", (students[1] as any)["feedbacks"]);

    // Additional tests for classroom, timetable, materials, assignments, exams, quizzes
    subjects.forEach(subject => {
        console.log(`Subject: ${subject.getName()}`);
        console.log("Classroom:", subject["classroom"]);
        console.log("Timetable:", subject.timetable);
        console.log("Materials:", subject["materials"]);
        console.log("Assignments:", subject.getAssignments());
        console.log("Exams:", subject["exams"]);
        console.log("Quizzes:", subject["quizzes"]);
    });
}

main();

