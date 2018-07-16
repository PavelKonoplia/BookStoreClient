import { BaseProductModel } from ".";
import { Role } from "../enums/role.enum";

export class User {
    constructor(
        public Id: number,
        public UserName: string,
        public Email: string,
        public PasswordHash?: string,
        public Role?:Role,
        public Selling?: BaseProductModel[]
    ) {
    }
}