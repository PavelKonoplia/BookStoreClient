import { RegistrateService } from './registrate.service';
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
    role: string
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    token: IToken;

    public userId: number;
    public role: string;
    public header: HttpHeaders;

    constructor(private http: HttpClient,
        private router: Router,
        private registrateService: RegistrateService) {
    }

    logout() {
        localStorage.clear();
    }

    getUserByName(userName: string) {
        this.getToken();
        return this.http
            .get(API_URL + USER_API + '/' + userName, { headers: this.header });
    }

    getUsers() {
        this.getToken();
        return this.http
            .get(API_URL + USER_API, { headers: this.header });
    }

    deleteUser(userId: number) {
        this.getToken();
        this.http.delete(API_URL + USER_API + `/${userId}`, { headers: this.header }).subscribe();
    }

    changeRole(userId: number, role: string) {
        this.getToken();
        console.log(userId + " " + role)
        return this.http
            .put(API_URL + USER_API + `?id=${userId}&role=${role}`, null, { headers: this.header }).subscribe();
    }

    private getToken() {
        this.token = JSON.parse(localStorage.getItem('token'));
        if (this.token) {
            this.userId = this.token.userID,
                this.role = this.token.role,
                this.header = new HttpHeaders({
                    'Content-Type': 'application/json', 'Authorization':
                        `Bearer ${this.token.access_token.toString()}`
                });
        }
    }
}