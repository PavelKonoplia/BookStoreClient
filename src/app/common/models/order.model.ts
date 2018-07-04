import { BaseProductModel } from ".";
import { User } from ".";

export class Order {
    constructor(
        public Id: number,
        public User: User,
        public Goods: BaseProductModel[]) {
    }
}