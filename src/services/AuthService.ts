/**
 * Service class for handling authentication operations
 * Provides role-based authentication for different user types
 */
export class AuthService {
    /**
     * Authenticates a user based on their role and password
     * @param role - The role of the user (e.g., "admin", "teacher", "student")
     * @param password - The password for the user
     * @returns True if authentication succeeds, false otherwise
     */
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
