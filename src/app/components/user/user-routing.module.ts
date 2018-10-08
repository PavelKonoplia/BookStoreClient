import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Guard } from "../../services/guard.service";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { PersonalPageComponent } from "./personal-page/personal-page.component";
import { ChartComponent } from "./chart/chart.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { AddBookComponent } from "../book/add-book/add-book.component";
import { ManageBooksComponent } from "./manage-books/manage-books.component";
import { UpdateBookComponent } from "../book/update-book/update-book.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "registration",
                component: RegistrationComponent,
                canDeactivate: [Guard]
            }, {
                path: "personal-page",
                component: PersonalPageComponent,
                canActivate: [Guard],
                children: [
                     { path: '', component: ChartComponent },
                    { path: 'chart', component: ChartComponent },
                    { path: 'manage-users', component: ManageUsersComponent },
                    { path: 'add-book', component: AddBookComponent },
                    { path: 'manage-books', component: ManageBooksComponent},
                    { path: 'update-book/{id}', component: UpdateBookComponent}
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
