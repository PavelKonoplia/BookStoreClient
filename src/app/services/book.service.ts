import { Injectable } from '@angular/core';
import { Book } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";
import { UserService } from './user.service';

const API_URL = environment.apiUrl;

const BOOK_API = '/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    header: HttpHeaders;

    constructor(private http: HttpClient, private userService: UserService) {
        this.header = this.userService.header;
    }

    getBooks() {
        return this.http
            .get(API_URL + BOOK_API);
    }

    createBook(book: Book) {
        return this.http
            .post(API_URL + BOOK_API, book, { headers: this.header }).subscribe();
    }

    updateBook(book: Book) {
        return this.http
            .put(API_URL + BOOK_API, book, { headers: this.header }).subscribe();
    }

    getBookById(bookId: number) {
        return this.http
            .get(API_URL + BOOK_API + '/' + bookId, { headers: this.header });
    }
}
