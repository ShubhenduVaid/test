const { makeResponse } = require('./mockResponse');
/**
 * PUBLIC API
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function trading(request, response, next) {
  if (request.method === 'GET') {
    response.setHeader('Content-Type', 'application/json');
    const res = { status: 200, data: makeResponse() };
    response.end(JSON.stringify(res));
  }
}

module.exports.trading = trading;