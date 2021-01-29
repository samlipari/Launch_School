/*
input: string
output: string
rules:
  - loop over each character in string
  - if char === char next to it, remove character
algorithm:
  loop over each character
  if current char === last char, remove char
  return new str
*/

function crunch(str) {
  let newArr = str.split('');
  let emptyArr = [];
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] !== emptyArr[emptyArr.length - 1]) {
      emptyArr.push(newArr[index]);
    }
  }
  return emptyArr.join('');
}


console.log(crunch(''));