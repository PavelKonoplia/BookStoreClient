import { Component, OnInit } from '@angular/core';
import { Book } from '../../../common/models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((bookList: Book[]) => this.bookList = bookList);
  }
}
