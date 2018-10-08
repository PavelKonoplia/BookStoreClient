import { Injectable } from '@angular/core';
import { User } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Role } from '../common/enums/role.enum';

const API_URL = environment.apiUrl;

const USER_API = '/user';
const TOKEN_API = '/token';

@Injectable({
    providedIn: 'root'
})
export class RegistrateService {



    constructor(private http: HttpClient, private router: Router) { }

    public login(username: string, password: string) {
        let request = `grant_type=password&username=${username}&password=${password}`;        
        return this.http.post(API_URL + TOKEN_API, request);            
    }

    public registrateUser(user: User) {
        return this.http
            .post(API_URL + USER_API, user).subscribe((userResponse: User) => {
                this.login(userResponse.UserName, userResponse.PasswordHash)
                this.router.navigate(["/login"]);
            });
    }
}