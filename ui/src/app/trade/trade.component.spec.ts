import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeComponent } from './trade.component';
import { TradeItemComponent } from './trade-item/trade-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('TradeComponent', () => {
  let component: TradeComponent;
  let fixture: ComponentFixture<TradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeComponent, TradeItemComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
