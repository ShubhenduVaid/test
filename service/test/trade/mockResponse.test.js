const assert = require('assert');
const { makeResponse } = require('../../trade/mockResponse');

describe('check Mock Response', function () {
  it('should return same length of array', function () {
    assert.equal(makeResponse().length, 6);
  });
  describe('check increment/decrement buy and sell by 10% for 50 iterations', function () {
    for (let index = 0; index < 50; index++) {
      const mockResponse = makeResponse();
      const response = makeResponse();
      mockResponse.forEach((data, index) => {
        const buyStart = +data.buy - +data.buy / 10;
        const buyEnd = +data.buy + +data.buy / 10;
        const sellStart = +data.sell - +data.sell / 10;
        const sellEnd = +data.sell + +data.sell / 10;
      //   console.log(`
      // BUY :::
      // start => ${buyStart}
      // value => ${+response[index].buy}
      // end   => ${buyEnd}
      // SELL :::
      // start => ${sellStart}
      // value => ${+response[index].sell}
      // end   => ${sellEnd}
      // `);
        const buyInLimit = (+response[index].buy <= buyEnd && +response[index].buy >= buyStart) ? true : false;
        const sellInLimit = (+response[index].sell <= sellEnd && +response[index].sell >= sellStart) ? true : false;
        const buyMoreThanSell = (+response[index].buy > +response[index].sell) ? true : false;
        it('should increment/decrement buy by 10%', function () {
          assert.equal(buyInLimit, true);
        });
        it('should increment/decrement sell by 10%', function () {
          assert.equal(sellInLimit, true);
        });
        it('buy amount should be more then sell', function () {
          assert.equal(buyMoreThanSell, true);
        });
      });
    }
  });
});