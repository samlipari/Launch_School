/*
input: 6 numbers
output: string

rules:
- ask user for 6 numbers
- check if last number was included in the first 5

algorithm:
- readline sync
- store 5 numbers from user
- loop over previous numbers to see if they match last number
*/

const RLSYNC = require('readline-sync');

let num1 = RLSYNC.question('Enter the 1st number: ');
let num2 = RLSYNC.question('Enter the 2nd number: ');
let num3 = RLSYNC.question('Enter the 3rd number: ');
let num4 = RLSYNC.question('Enter the 4th number: ');
let num5 = RLSYNC.question('Enter the 5th number: ');
let lastNum = RLSYNC.question('Enter the last number: ');

let arrayOfNums = [num1, num2, num3, num4, num5];

function matchNums() {
  for (let index = 0; index < arrayOfNums.length; index++) {
    if (lastNum === arrayOfNums[index]) {
      return `The number ${lastNum} appears in ${arrayOfNums.join(',')}.`;
    }
  }
  return `The number ${lastNum} does not appear in ${arrayOfNums.join(',')}.`;

}

console.log(matchNums());