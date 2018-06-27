import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { DisplayBookComponent } from 'src/app/components/book/display-book/display-book.component';
import { BookService } from '../../services/book.service';

@NgModule({
  imports: [
    CommonModule,
    // DataRoutingModule
  ],
  declarations: [BookListComponent, DisplayBookComponent],
  exports: [BookListComponent, DisplayBookComponent],
  providers: [BookService],
})
export class BookModule { }
