import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeItemComponent } from './trade-item.component';
import { TradeObject } from '../trade.model';
import { By } from '@angular/platform-browser';

describe('TradeItemComponent', () => {
  let component: TradeItemComponent;
  let fixture: ComponentFixture<TradeItemComponent>;
  const mockData: TradeObject = {
    buy: '1.0090',
    sell: '1.0087',
    pair: 'test'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeItemComponent);
    component = fixture.componentInstance;
    component.tradeItem = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set tradeItemcomponent correctly', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(component.tradeItem.pair).toEqual(element.querySelector('.header').textContent);
    expect(component.tradeItem.buy).toEqual(element.querySelector('.content-right > .content-data').textContent);
    expect(component.tradeItem.sell).toEqual(element.querySelector('.content-left > .content-data').textContent);
  });
});
