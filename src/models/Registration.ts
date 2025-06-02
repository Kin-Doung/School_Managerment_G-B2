import { UserAccount } from "./UserAccount";

export class Registration {
    private status: string;
    private userAccount: UserAccount;

    constructor(userAccount: UserAccount) {
        this.userAccount = userAccount;
        this.status = "Pending";
    }

    public approveRegistration(): void {
        this.status = "Approved";
    }

    public getStatus(): string {
        return this.status;
    }
}