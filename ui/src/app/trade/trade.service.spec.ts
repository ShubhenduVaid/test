import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TradeService } from './trade.service';
import { TradeResponse } from './trade.model';

describe('TradeService', () => {
  let service: TradeService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeService],
      imports: [HttpClientTestingModule]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(TradeService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([TradeService], (serv: TradeService) => {
    expect(serv).toBeTruthy();
  }));

  it('search should return TradeItems in proper format',
    fakeAsync(() => {
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

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.getTradingList().subscribe(res => {
        expect(res.status).toBe(response.status);
        expect(res.data.length).toBe(response.data.length);
        expect(res.data[0].buy).toBe(response.data[0].buy);
      });

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        '/trading'
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with this data when called
      req.flush(response);

      // Call tick which actually processes te response
      tick();
    })
  );
});
