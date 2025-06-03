import { UserAccount } from "./UserAccount";

export class Registration {
    private status: string;
    private userAccount: UserAccount;

    constructor(userAccount: UserAccount) {
        this.userAccount = userAccount;
        this.status = "Pending";
    }

    // Approves the registration
    public approveRegistration(): void {
        this.status = "Approved";
    }

    /**
     * Gets the registration status
     * @returns The current status
     */
    public getStatus(): string {
        return this.status;
    }
}