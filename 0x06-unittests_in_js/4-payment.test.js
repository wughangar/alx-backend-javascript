const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and log the correct message', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
