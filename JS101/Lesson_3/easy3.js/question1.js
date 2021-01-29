// one
let numbers = [1, 2, 3, 4];

do {
  numbers.shift();
} while (numbers.length > 0);

console.log(numbers);

// two
numbers = [1, 2, 3, 4];

while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);

// three
numbers = [1, 2, 3, 4];

while (numbers.length > 0) {
  numbers.splice(0, 1);
}

console.log(numbers);
