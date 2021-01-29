const RLSYNC = require('readline-sync');

let noun = RLSYNC.question('Enter a noun: ');
let verb = RLSYNC.question('Enter a verb: ');
let adj = RLSYNC.question('Enter an adjective: ');
let adv = RLSYNC.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!
The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.
The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);