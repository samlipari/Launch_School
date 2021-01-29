const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

let number1 = Number(rlSync.question(prompt('Enter the first number: ')));
let number2 = Number(rlSync.question(prompt('Enter the second number: ')));

if (number2 === 0) {
  prompt('Please enter a number above 0');
  number2 = rlSync.question();
}

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${number1 / number2}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${Math.pow(number1, number2)}`);