import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../common/models';

@Component({
    selector: 'seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.css']
})
export class SellerComponent {

    products: Book[];

    constructor(private userService: UserService, private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks()
            .subscribe((bookList: Book[]) => {
                this.products = bookList.filter(b => b.UserId == this.userService.userId);
            });
    }

}
