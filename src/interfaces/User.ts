export interface User {
    getName(): string;
    authenticate(inputUsername: string, inputPassword: string): boolean;
}