import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../common/models';
import { BookService } from '../../../services/book.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  saved: boolean = false;
  addBookForm: FormGroup;
  book: Book;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let bookId;
    
    this.route.queryParams.subscribe(params => {
      bookId = params['id'];
    }).add(this.bookService.getBookById(bookId).subscribe((book: Book) => this.book = book));

    this.createForm();
  }

  submit() {
    let book = new Book(null,
      this.addBookForm.get("price").value,
      this.addBookForm.get("title").value,
      this.addBookForm.get("description").value,
      this.addBookForm.get("iso").value,
      this.addBookForm.get("genre").value,
      this.addBookForm.get("author").value,
      this.userService.userId)
    this.bookService.createBook(book);
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved && this.checkForm()) {
      return confirm("You have unsaved changes, do you want to leave and discard them?");
    }
    else {
      return true;
    }
  }

  createForm() {
    this.book ?
      this.addBookForm = this.formBuilder.group({
        title: new FormControl(this.book.Title, Validators.required),
        price: new FormControl(this.book.Price, Validators.required),
        iso: new FormControl(this.book.ISO, [
          Validators.required,
          Validators.pattern("[0-9]{8}")
        ]),
        author: new FormControl(this.book.Author, Validators.required),
        genre: new FormControl(this.book.Genre, Validators.required),
        description: new FormControl(this.book.Description, Validators.required),
      })
      : this.addBookForm = this.formBuilder.group({
        title: new FormControl("", Validators.required),
        price: new FormControl("", Validators.required),
        iso: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]{8}")
        ]),
        author: new FormControl("", Validators.required),
        genre: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
      })
      ;
  }

  checkForm() {
    for (let control in this.addBookForm.controls) {
      if (this.addBookForm.get(control).value.length) {
        return true;
      }
    }
    return false;
  }
}
