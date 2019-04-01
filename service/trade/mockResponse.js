let response = [
  { pair: 'USD CHF', buy: 0.99143, sell: 0.99043 },
  { pair: 'GBP USD', buy: 1.28495, sell: 1.2836 },
  { pair: 'GBP CHF', buy: 1.27378, sell: 1.27147 },
  { pair: 'EUR SEK', buy: 9.632, sell: 9.6055 },
  { pair: 'USD JPY', buy: 110.467, sell: 110.417 },
  { pair: 'EUR JPY', buy: 120.589, sell: 120.491 }
];

function calculateSign() {
  let randomNumber = Math.round(Math.random() * 20);
  if (randomNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calculateValue() {
  return Math.round((Math.random() * 9 + 1));
}

function makeResponse() {
  for (let index = 0; index < response.length; index++) {
    const element = response[index];
    const value = calculateValue();
    if (calculateSign()) {
      element['buy'] = element['buy'] + element['buy'] / value;
      element['sell'] = element['sell'] + element['sell'] / value;
    } else {
      element['buy'] = element['buy'] - element['buy'] / value;
      element['sell'] = element['sell'] - element['sell'] / value;
    }
    element['buy'] = (element['buy'] !== 0) ? element['buy'].toFixed(5) : 1.22;
    element['sell'] = (element['buy'] !== 0) ? element['sell'].toFixed(5) : 1.11;
  }
  return response;
}

module.exports.makeResponse = makeResponse;