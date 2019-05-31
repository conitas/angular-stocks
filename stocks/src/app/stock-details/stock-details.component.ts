import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../search/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  result: any;

  constructor(private router: ActivatedRoute, private service: StockService) {
    this.result = null;
  }

  ngOnInit() {
  }

  search(id: string): void {
  }

}
