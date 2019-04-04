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

  private oldTradeList: TradeObject[];

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.oldTradeList = [];
    this.interval = setInterval(() => {
      this.tradeService.getTradingList().subscribe(res => {
        res.data.forEach((element, index) => {
          if (this.oldTradeList[index]) {
            if (this.oldTradeList[index].buy < element.buy) {
              element.isBuyIncreased = true;
            } else {
              element.isBuyIncreased = false;
            }
          } else {
            element.isBuyIncreased = false;
            this.oldTradeList[index] = element;
          }
        });
        this.tradeList = res.data;
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
