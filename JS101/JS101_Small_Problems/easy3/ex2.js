function logInBox(str) {
  let boxWidth = str.length;
  console.log('+ ' + '-'.repeat(boxWidth) + ' +');
  console.log('| ' + ' '.repeat(boxWidth) + ' |');
  console.log('| ' + str + ' |');
  console.log('| ' + ' '.repeat(boxWidth) + ' |');
  console.log('+ ' + '-'.repeat(boxWidth) + ' +');
}

logInBox('');

/*
Input: string
Output: string
Rules: create box around string
Algorithm: 
- create '+' + '-' * string.length + '+'
- create '|' + '' repeated for string.length + '|'
*/