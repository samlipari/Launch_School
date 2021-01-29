function findFibonacciIndexByLength(length) {
  let num1 = 1;
  let num2 = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = num1 + num2;
    index++;
    num1 = num2;
    num2 = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(16));