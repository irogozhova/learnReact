const expect = require('expect.js');
const { fib, fibWithCache } = require('./tasks');

describe('task 1 fibonacciSimple', () => {
  it('should compute fibonacci number', () => {
    expect(fib(1)).to.be(1);
    expect(fib(3)).to.be(2);
    expect(fib(10)).to.be(55);
    expect(fib(15)).to.be(610);
    expect(() => fib(-1)).to.throwException(/Number is less than zero/);
  });
});

describe('task 2 fibonacciWithCache', () => {
  it('should compute fibonacci number using memoization', () => {
    expect(fibWithCache(1)).to.be(1);
    expect(fibWithCache(3)).to.be(2);
    expect(fibWithCache(10)).to.be(55);
    expect(fibWithCache(15)).to.be(610);
    expect(fibWithCache(50)).to.be(12586269025);
    expect(() => fibWithCache(-1)).to.throwException(/Number is less than zero/);
  });
});
