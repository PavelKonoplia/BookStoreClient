import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Guard } from "../../services/guard.service";
import { UpdateBookComponent } from "./update-book/update-book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { AddBookComponent } from "./add-book/add-book.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "add-book",
                component: AddBookComponent,
                canDeactivate: [Guard]
            },
            {
                path: "book-list",
                component: BookListComponent,
            },
            {
                path: "update-book/:id",
                component: UpdateBookComponent,
                canActivate: [Guard]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
