function getFactorial(n, type) {
  let result = 1n;

  while (n > 0) {
    result *= BigInt(n);
     n -= type;
  }

  return result;
}

module.exports = function zeros(expression) {
  let result = 1n;
  let count = 0;

  const values = expression.split('*');

  values.forEach((value) => {
    value.slice(value.length - 2) === '!!'
      ? result *= getFactorial(parseInt(value), 2)
      : result *= getFactorial(parseInt(value), 1);
  });

  result = result + '';
  
  while (result.length) {
    if (result[result.length - (count + 1)] === '0') {
      ++count;
    } else {
      break;
    }
  }

  return count;
}
