const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
	it('should round and return the the sum of two numbers', () => {
		assert.strictEqual(calculateNumber(1.1, 2.2), 3); // 1 + 2 = 3
		assert.strictEqual(calculateNumber(2.5, 2.5), 6); // 3 + 3 = 6
		assert.strictEqual(calculateNumber(1.5, 1.4), 3); // 2 + 1 = 3
		assert.strictEqual(calculateNumber(0.1, 0.2), 0); // 0 + 0 = 0
	});
});
