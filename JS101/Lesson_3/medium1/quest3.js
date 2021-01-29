function factors(number) {
  let factors = [];

  if (number < 1) {
    return `Please enter a number greater than 1`;
  }

  for (let divisor = 1; divisor <= number; divisor++) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
  }
  return factors;
}

console.log(factors(5));