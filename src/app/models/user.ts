export class User {
    id: number;
    firstName: string;
    lastName: string;
    role: boolean;

    constructor(id: number, firstName: string, lastName: string, role: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}