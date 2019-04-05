import { async, ComponentFixture, TestBed, tick, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';

import { TradeComponent } from './trade.component';
import { TradeItemComponent } from './trade-item/trade-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TradeService } from './trade.service';
import { TradeResponse } from './trade.model';
import { of } from 'rxjs';

describe('TradeComponent', () => {
  let component: TradeComponent;
  let fixture: ComponentFixture<TradeComponent>;
  let tradeService;
  let tradeServiceSpy;
  const response: TradeResponse = {
    status: '200',
    data: [
      {
        buy: '1.0090',
        sell: '1.0080',
        pair: 'test'
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeComponent, TradeItemComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    tradeService = TestBed.get(TradeService);
    tradeServiceSpy = spyOn(tradeService, 'getTradingList').and.returnValue(of(response));
    fixture = TestBed.createComponent(TradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnDestroy();
  });

  it('should set TradeList correctly', () => {
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.tradeList.length).toEqual(response.data.length);
      discardPeriodicTasks();
    });
  });
});
