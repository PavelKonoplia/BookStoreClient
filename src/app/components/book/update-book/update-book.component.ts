import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../common/models';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'update-book',
    templateUrl: './update-book.component.html',
    styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

    book: Book;
    saved: boolean = false;
    updateBookForm: FormGroup;

    constructor(private bookService: BookService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id;
        this.createForm();
        this.route.params.subscribe(params => {
            id = params['id'];
            console.log(params) //log the entire params object
            console.log(params['id']) //log the value of id

        }).add(this.bookService.getBookById(id).subscribe((book: Book) => this.book = book));

    }

    submit() {
        let book = new Book(null,
            this.updateBookForm.get("price").value,
            this.updateBookForm.get("title").value,
            this.updateBookForm.get("description").value,
            this.updateBookForm.get("iso").value,
            this.updateBookForm.get("genre").value,
            this.updateBookForm.get("author").value,
            this.userService.userId)
        this.bookService.updateBook(book);
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
        this.updateBookForm = this.formBuilder.group({
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
    }

    checkForm() {
        for (let control in this.updateBookForm.controls) {
            if (this.updateBookForm.get(control).value.length) {
                return true;
            }
        }
        return false;
    }
}
