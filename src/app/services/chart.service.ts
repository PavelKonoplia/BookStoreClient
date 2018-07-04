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

    private array: BaseProductModel[] = [];
    chart: Observable<Array<BaseProductModel>>;
    private observer;

    constructor(private orderService: OrderService) {
        this.chart = new Observable(observer => {
            this.observer = observer;
            observer.next(this.array);
        });
    }

    addToChart(product: BaseProductModel) {
        this.array.push(product);
        this.observer.next(this.array);
    }

    order() {
        this.orderService.sendOrder(this.array);
    }
}
