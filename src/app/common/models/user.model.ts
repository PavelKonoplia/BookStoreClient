import { BaseModel } from ".";

export class User {
    constructor(
        public Id: number,
        public UserName: string,
        public Email: string,
        public PasswordHash: string,
        public Selling?: BaseModel[]
    ) {
    }
}