import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Guard } from "../../services/guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "login",
                component:     
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
    ],S
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
