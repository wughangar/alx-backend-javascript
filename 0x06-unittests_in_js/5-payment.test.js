const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount=100 and totalShipping=20', function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct message for totalAmount=10 and totalShipping=10', function () {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
