function reverseNumber(num) {
  let arr = String(num).split('');
  let reversedArr = arr.slice().reverse();

  return parseInt(reversedArr.join(''), 10);
}

console.log(reverseNumber(456));