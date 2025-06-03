// src/models/UserAccount.ts
export class UserAccount {
    username: string;
    password: string;
    isActive: boolean;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

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