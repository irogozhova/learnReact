const fib = (number) => {
  if (number < 0) {
    throw 'Number is less than zero';
  }

  if (number < 2) return number;
  
  return fib(number - 1) + fib(number - 2);
}

module.exports = {
  fib,
};
