const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
	it('should add two rounded numbers when type is SUM', () => {
		assert.strictEqual(calculateNumber('SUM', 1.1, 2.2), 3);
	});

	it('should subtract two rounded numbers when type is SUBTRACT', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.2), 4);
	});

	it('should divide two rounded numbers when case is DIVIDE', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 6.6, 2.2), 3.5);
	});

	it('should return Error when trying to divide by 0', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 6.6, 0), 'Error');
	});

	it('should throw an error for an invalid type', () => {
		assert.throws(() => {
			calculateNumber('INVALID_TYPE', 1, 2);
		}, /Invalid type. Use SUM, SUBTRACT, or DIVIDE./);
	});
});
