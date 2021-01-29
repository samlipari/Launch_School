function sum(number) {
  return String(number).split('').map(num => num * 1).reduce(getTotal);
}

function getTotal(total, num) {
  return total + num;
}

console.log(sum(123456789));