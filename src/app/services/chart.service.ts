import { Injectable } from '@angular/core';
import { Book, BaseProductModel } from '../common/models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";
import { OrderService } from './order.service';

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    private array: Book[] = [];
    chart: Observable<Array<Book>>;
    private observer;

    constructor(private orderService: OrderService) {
        this.chart = new Observable(observer => {
            this.observer = observer;
            observer.next(this.array);
        });
    }

    addToChart(product: Book) {
        this.array.push(product);
        this.observer.next(this.array);
    }

    deleteFromChart(product: Book) {
        var index = this.array.indexOf(product);
        if (index > -1) {
            this.array.splice(index, 1);
        }
        this.observer.next(this.array);
    }

    order() {
        this.orderService.sendOrder(this.array);
    }
}
