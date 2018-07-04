import { Injectable } from '@angular/core';
import { Book, BaseProductModel } from '../common/models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

const ORDER_API = '/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private userService: UserService, private http: HttpClient) { }

    sendOrder(products: BaseProductModel[]) {

        var order = {
            Goods: products,
            UserId: this.userService.userId
        };
        return this.http
            .post(API_URL + ORDER_API, order, { headers: this.userService.header }).subscribe();
    }
}
