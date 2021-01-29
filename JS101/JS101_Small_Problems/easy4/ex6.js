function isPalindromicNumber(num) {
  let arr = num.toString().split('');
  let reverseArr = num.toString().split('').reverse();
  return Number(arr.join('')) === Number(reverseArr.join(''));
}

console.log(isPalindromicNumber(5));