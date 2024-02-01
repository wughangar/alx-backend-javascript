const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other cases', (done) => {
    done();
  });
});
