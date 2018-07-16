import { Component, OnInit } from '@angular/core';
import { Book } from '../../../common/models';
import { BookService } from 'src/app/services/book.service';
import { ChartService } from '../../../services/chart.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[];
  chartList: Book[];
  logged: boolean;

  constructor(private bookService: BookService, private chartService: ChartService, private userService: UserService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((bookList: Book[]) => this.bookList = bookList.filter(b => b.UserId != this.userService.userId));
    this.chartService.chart.subscribe((chartList: Book[]) => this.chartList = chartList);
  }

  addToChart(book: Book) {
    this.chartService.addToChart(book);
    console.log(this.chartList);
  }
}
