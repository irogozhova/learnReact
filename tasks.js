const fib = (number) => {
  if (number < 0) {
    throw 'Number is less than zero';
  }

  if (number <= 1) return 1;
  
  return fib(number - 1) + fib(number - 2);
}
