const fib = (number) => {
  if (number < 0) {
    throw 'Number is less than zero';
  }

  if (number < 2) return number;
  
  return fib(number - 1) + fib(number - 2);
};

/////*\\//*\\//*\\\\\

const cache = {};

const fibWithCache = (number) => {
  if (number < 0) {
    throw 'Number is less than zero';
  }

  if (number < 2) return number;

  if (number in cache) {
    return cache[number];
  }
  
  const result = fibWithCache(number - 1) + fibWithCache(number - 2);
  cache[number] = result;

  return result;
}

module.exports = {
  fib,
  fibWithCache,
};
