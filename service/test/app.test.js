let chai = require('chai');
var expect = require('chai').expect;
const chaiHttp = require('chai-http');

const { app } = require('../app');
chai.use(chaiHttp);
describe('/GET trading', () => {
  it('it should GET json with proper format', (done) => {
    chai.request(app)
      .get('/trading')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(6);
        expect(res.body[0]).to.have.property('buy');
        expect(res.body[0]).to.have.property('sell');
        expect(res.body[0]).to.have.property('pair');
        done();
      });
  });
});