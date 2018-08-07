import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../common/models';
import { Role } from 'src/app/common/enums/role.enum';

@Component({
    selector: 'manage-books',
    templateUrl: './manage-books.component.html',
    styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent {

    products: Book[];

    constructor(private userService: UserService, private bookService: BookService) {
    }

    ngOnInit() {
        if (this.userService.role == "Seller") {
            this.bookService.getBooks()
                .subscribe((bookList: Book[]) =>
                    this.products = bookList.filter(b => b.UserId == this.userService.userId)
                );
        }
        else {
            this.bookService.getBooks()
                .subscribe((bookList: Book[]) => this.products = bookList);
        }
    }

    update() {

    }

    delete(book: Book) {
        this.bookService.deleteBook(book.Id);
        this.products.splice(this.products.indexOf(book), 1);
    }

}
