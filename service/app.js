const connect = require('connect');
const { trading } = require('./trade/trading');

const app = connect();
const port = 3000;

/**
 * Middlewares with universal error handler
 */
app
  .use('/trading', trading)
  .use((error, req, res, next) => {
    console.log(`Error Handled : ${error.message}`);
    res.writeHead(500);
    res.end(`${error.message}`);
  })
  .listen(port);

console.log(`Server listening on port ${port}.`);

module.exports.app = app;