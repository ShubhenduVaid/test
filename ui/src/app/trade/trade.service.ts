import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { TradeResponse } from './trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }

  getTradingList(): Observable<TradeResponse> {
    const url = '/trading';
    return this.http.get<TradeResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError() {
    return throwError(
      'Something bad happened; please try again later.');
  }
}
