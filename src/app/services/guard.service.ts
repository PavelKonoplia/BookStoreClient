import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { UserService } from "./user.service";

export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class Guard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.userService.token) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }        
    }

    canDeactivate(component: ComponentCanDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
