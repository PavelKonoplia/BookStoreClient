import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookListComponent } from "./components/book/book-list/book-list.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "book-list",
                component: BookListComponent                
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
