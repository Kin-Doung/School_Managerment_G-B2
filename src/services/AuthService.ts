export class AuthService {
    authenticate(role: string, password: string): boolean {
        if (role === "admin" && password === "password") {
            return true;
        }
        if (role === "teacher" && password === "password") {
            return true;
        }
        if (role === "student" && password === "password") {
            return true;
        }
        return false;
    }
}
