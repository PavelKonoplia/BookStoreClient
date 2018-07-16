import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { Book } from '../../../common/models';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  products: Book[];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.chart.subscribe((products: Book[]) => this.products = products);  
  }

  deleteItem(item: Book){
    this.chartService.deleteFromChart(item);
  }

  order(){
    this.chartService.order();
  }  
}
