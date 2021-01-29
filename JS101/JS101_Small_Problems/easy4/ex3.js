const RLSYNC = require('readline-sync');

let age = Number(RLSYNC.question('What is your age? '));
let retireAge = Number(RLSYNC.question('At what age would you like to retire? '));
let difference = retireAge - age;
let today = new Date();

let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + difference}`);
console.log(`You have only ${difference} years of work to go!`);