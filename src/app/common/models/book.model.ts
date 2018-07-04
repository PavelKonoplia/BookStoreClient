import { BaseProductModel, Tag } from ".";

export class Book extends BaseProductModel {
    constructor(
        public Id: number,
        public Price: number,
        public Title: string,
        public Description: string,
        public ISO: string,
        public Genre: string,
        public Author: string,
        public UserId: number,
        public Tags?: Tag[]) {
            super(Id, Price, UserId)
    }
}