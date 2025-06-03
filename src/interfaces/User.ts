// Interface representing a User with authentication capabilities
export interface User {
    /**
     * Gets the user's name
     * @returns The user's name
     */
    getName(): string;

    /**
     * Authenticates the user
     * @param inputUsername - The username to check
     * @param inputPassword - The password to check
     * @returns True if authentication succeeds, false otherwise
     */
    authenticate(inputUsername: string, inputPassword: string): boolean;
}