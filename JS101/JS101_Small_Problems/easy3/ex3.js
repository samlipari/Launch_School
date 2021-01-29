// take a number
// return '10' repeating the same length as the num

function stringy(num) {
  let str = [];
  let counter = 0;

  while (counter < num) {
    str.push('1');
    counter++;
    if (counter < num) {
      str.push('0');
      counter++;
    }
  }
  return str.join('');
}

console.log(stringy(9));