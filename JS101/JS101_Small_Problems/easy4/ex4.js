/*
input: string
output: true/false
rules: string reads the same backwards and forwards
- case and chars matter
algorithm:
- split into arr
- create var of .reverse() array
- do arr === reverse array
*/

function isPalindrome(str) {
  let arr = str.split('');
  let revArr = str.split('').reverse();
  return arr.join() === revArr.join();
}

console.log(isPalindrome('356653'));