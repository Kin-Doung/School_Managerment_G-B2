// src/models/UserAccount.ts
export class UserAccount {
    username: string;
    password: string;
    isActive: boolean;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.isActive = true;
    }
}