function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstHalf = numberString.slice(0, numberString.length - count);
  let secondHalf = numberString.slice(numberString.length - count);
  return firstHalf + rotate(secondHalf);
}

function rotate(number) {
  return number.slice(1) + number[0];
}

console.log(rotateRightmostDigits(735291, 5));