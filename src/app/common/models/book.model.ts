import { BaseModel, Tag } from ".";

export class Book extends BaseModel {
    constructor(
        public Id: number,
        public Price: number,
        public Title: string,
        public Description: string,
        public ISO: string,
        public Genre: string,
        public Author: string,
        public Tags?: Tag[])  { super(Id,Price)
    }
}