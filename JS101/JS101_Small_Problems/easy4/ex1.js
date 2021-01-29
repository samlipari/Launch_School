/*
Output: number
Rules: generate random age between 20-120 (Math.random, Math.floor)
*/

function age(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Teddy is ${age} years old!`);
}

age(20, 120);