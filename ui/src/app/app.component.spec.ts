import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TradeComponent } from './trade/trade.component';
import { TradeItemComponent } from './trade/trade-item/trade-item.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TradeComponent,
        TradeItemComponent,
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
