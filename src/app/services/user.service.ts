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

interface IToken {
    access_token: string,
    userID: number,
    role: Role
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public token: string;
    public userId: number;
    public role: Role;
    public header: HttpHeaders;

    constructor(private http: HttpClient, private router: Router) { }

    public login(username: string, password: string) {
        let request = `grant_type=password&username=${username}&password=${password}`;
        this.http.post(API_URL + TOKEN_API, request)
            .subscribe((token: IToken) => {
                this.token = token.access_token.toString();
                this.userId = token.userID,
                    this.role = token.role,
                    this.header = new HttpHeaders({
                        'Content-Type': 'application/json', 'Authorization':
                            `Bearer ${token.access_token.toString()}`
                    });
            });
    }

    logout() {
        this.token = undefined;
        this.role = undefined;
        this.header = undefined;
        this.userId = undefined;
    }

    registrateUser(user: User) {
        return this.http
            .post(API_URL + USER_API, user).subscribe((userResponse: User) => {
                this.login(userResponse.UserName, userResponse.PasswordHash)
                this.router.navigate(["/login"]);
            });
    }

    getUserByName(userName: string) {
        return this.http
            .get(API_URL + USER_API + '/' + userName, { headers: this.header });
    }

    getUsers() {
        return this.http
            .get(API_URL + USER_API, { headers: this.header });
    }

    deleteUser(userId: number) {
        this.http.delete(API_URL + USER_API + `/${userId}`, { headers: this.header }).subscribe();
    }

    changeRole(userId: number, role: string) {
        console.log(userId + " " + role)
        return this.http
            .put(API_URL + USER_API + `?id=${userId}&role=${role}`, null, { headers: this.header }).subscribe();
    }
}