const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber function', () => {
	it('should add two rounded numbers when type is SUM', () => {
		chai.expect(calculateNumber('SUM', 1.1, 2.2)).to.equal(3);
	});

	it('should subtract two rounded numbers when type is SUBTRACT', () => {
		chai.expect(calculateNumber('SUBTRACT', 5.5, 2.2)).to.equal(3.3);
	});

	it('should divide two rounded numbers when case is DIVIDE', () => {
		chai.expect(calculateNumber('DIVIDE', 6.6, 2.2)).to.equal(3);
	});

	it('should return Error when trying to divide by 0', () => {
		chai.expect(calculateNumber('DIVIDE', 6.6, 0)).to.equal('Error');
	});

	it('should throw an error for an invalid type', () => {
		chai.expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(/Invalid type. Use SUM, SUBTRACT, or DIVIDE./);
	});
});
