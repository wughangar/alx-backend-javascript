// 0-console.test.js

const assert = require('assert');
const displayMessage = require('./0-console');

describe('displayMessage function', function () {
  it('should print the string argument to STDOUT', function () {
    // Capture the console output
    const logSpy = console.log = jest.fn();

    // Call the function
    displayMessage("Hello NodeJS!");

    // Check if the console.log was called with the correct argument
    assert.strictEqual(logSpy.mock.calls.length, 1);
    assert.strictEqual(logSpy.mock.calls[0][0], "Hello NodeJS!");

    // Clean up the spy
    logSpy.mockRestore();
  });
});
