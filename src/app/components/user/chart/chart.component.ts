import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { BaseProductModel } from '../../../common/models';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  products: BaseProductModel[];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.chart.subscribe((products: BaseProductModel[]) => this.products = products);
  }

  order(){
    this.chartService.order();
  }
}
