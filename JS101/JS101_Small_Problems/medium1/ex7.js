function fibonacci(number) {
  let x = 1;
  let y = 1;
  let fib;
  let count = 2;

  if (number <= 2) {
    return 1;
  }

  while (count < number) {
    fib = x + y;
    x = y;
    y = fib;
    count++;
  }

  return fib;
}

console.log(fibonacci(20));