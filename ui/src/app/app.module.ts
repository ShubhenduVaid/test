import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TradeComponent } from './trade/trade.component';
import { TradeItemComponent } from './trade/trade-item/trade-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    TradeItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
