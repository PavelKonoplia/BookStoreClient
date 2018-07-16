import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from '../../services/book.service';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BookListComponent, AddBookComponent, UpdateBookComponent],
  exports: [BookListComponent, AddBookComponent, UpdateBookComponent],
  providers: [BookService],
})
export class BookModule { }
