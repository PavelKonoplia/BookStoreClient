import { BaseModel } from ".";
import { User } from "./user.model";

export class Order {
    constructor(
        public Id: number,
        public User: User,
        public Goods: BaseModel[]) {
    }
}