const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

chai.use(chaiAsPromised);

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct object when success is true', function () {
    const promise = getPaymentTokenFromAPI(true);

    return chai.expect(promise).to.eventually.deep.equal({ data: 'Successful response from the API' });
  });

  it('should resolve with undefined when success is false', function () {
    const promise = getPaymentTokenFromAPI(false);

    return chai.expect(promise).to.eventually.be.undefined;
  });
});
