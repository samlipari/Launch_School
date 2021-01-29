let numbers = [1, 2, 3, 4, 5];
let newArr = numbers.slice().reverse();
console.log(newArr);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let numbers2 = [...numbers];
numbers2.sort((num1, num2) => num2 - num1);
console.log(numbers2);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray);
console.log(numbers);
