import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../common/models';

@Component({
  selector: 'display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent {

  @Input()
  book: Book;
}
