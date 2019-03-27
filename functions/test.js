const expect = require('expect.js');
const { fib } = require('./tasks');

describe('task 1 fibonacciSimple', () => {
  it('should compute fibonacci number', () => {
    expect(fib(1)).to.be(1);
    expect(fib(3)).to.be(2);
    expect(fib(10)).to.be(55);
    expect(fib(15)).to.be(610);
  });
});
