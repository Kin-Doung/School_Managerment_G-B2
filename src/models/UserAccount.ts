export class UserAccount {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    /**
     * Authenticates the user with the provided username and password
     * @param inputUsername - The username to check
     * @param inputPassword - The password to check
     * @returns True if authentication succeeds, false otherwise
     */
    public authenticate(inputUsername: string, inputPassword: string): boolean {
        return this.username === inputUsername && this.password === inputPassword;
    }

    public logout(): void {
        console.log(`${this.username} has logged out.`);
    }
    public getUsername(): string {
        return this.username;
    }
}