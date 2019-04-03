import { Component, OnInit, OnDestroy } from '@angular/core';

import { TradeService } from './trade.service';
import { TradeObject } from './trade.model';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit, OnDestroy {

  tradeList: TradeObject[];
  interval;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.tradeService.getTradingList().subscribe(res => {
        this.tradeList = res.data;
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
