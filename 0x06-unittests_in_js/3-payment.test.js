// 3-payment.test.js
const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  Utils.calculateNumber('SUM', totalAmount, totalShipping);
}
