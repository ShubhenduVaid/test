const { makeResponse } = require('./mockResponse');
/**
 * PUBLIC API
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function trading(request, response, next) {
  if (request.method === 'GET') {
    response.writeHead(200);
    response.end(makeResponse());
  }
}

module.exports.trading = trading;