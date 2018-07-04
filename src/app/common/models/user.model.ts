import { BaseProductModel } from ".";
import { Role } from "../enums/role.enum";

export class User {
    constructor(
        public Id: number,
        public UserName: string,
        public Email: string,
        public Role:Role,
        public PasswordHash?: string,
        public Selling?: BaseProductModel[]
    ) {
    }
}