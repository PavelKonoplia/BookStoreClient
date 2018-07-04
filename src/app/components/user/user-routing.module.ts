import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Guard } from "../../services/guard.service";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { PersonalPageComponent } from "./personal-page/personal-page.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "login",
                component: LoginComponent                
            },
            {
                path: "registration",
                component: RegistrationComponent ,
                canDeactivate: [Guard]     
            },            {
                path: "personal-page",
                component: PersonalPageComponent ,
                canActivate: [Guard]     
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
