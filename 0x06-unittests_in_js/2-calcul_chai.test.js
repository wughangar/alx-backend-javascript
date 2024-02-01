const chai = require('chai');
const calculateNumber = require('./1-calcul');

const { expect } = chai;

describe('calculateNumber function', () => {
	it('should add two rounded numbers when type is SUM', () => {
		expect(calculateNumber('SUM', 1.1, 2.2)).to.equal(3);
	});

	it('should subtract two rounded numbers when type is SUBTRACT', () => {
		expect(calculateNumber('SUBTRACT', 5.5, 2.2)).to.equal(3.3);
	});

	it('should divide two rounded numbers when case is DIVIDE', () => {
		expect(calculateNumber('DIVIDE', 6.6, 2.2)).to.equal(3);
	});

	it('should return Error when trying to divide by 0', () => {
		expect(calculateNumber('DIVIDE', 6.6, 0)).to.equal('Error');
	});

	it('should throw an error for an invalid type', () => {
		expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(/Invalid type. Use SUM, SUBTRACT, or DIVIDE./);
	});
});
