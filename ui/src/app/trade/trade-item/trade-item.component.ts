import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TradeObject } from '../trade.model';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeItemComponent {
  private _tradeItem: TradeObject;

  @Input()
  set tradeItem(tradeItem: TradeObject) {
    this._tradeItem = tradeItem;
  }

  get tradeItem(): TradeObject { return this._tradeItem; }

  constructor() { }

}
