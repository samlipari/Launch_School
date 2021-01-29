/*function fibonacci(number) {
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
*/

function fibonacciRecursive(num, count = 2, x = 1, y = 1, fib = 0) {
  if (num <= 2) {
    return 1;
  }

  fib = x + y;
  x = y;
  y = fib;
  return fibonacciRecursive(num, count + 1, x, y, fib);
}

console.log(fibonacciRecursive(20));