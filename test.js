const expect = require('expect.js');
const { fib } = require('./tasks');

test(fibonacci, () => {
  expect(fib(1)).toBe(1);
  expect(fib(5)).toBe(5);
  expect(fib(7)).toBe(13);
  expect(fib(10)).toBe(55);
  expect(fib(100)).toBe(354224848179261915075);  
});
