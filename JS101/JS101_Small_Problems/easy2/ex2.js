const rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}