function isPalindrome(str) {
  let arr = str.toLowerCase().split('');
  let arrRemoveChars = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== ' ' && (isLowerCaseLetter(arr[index]) || isNumber(arr[index]))) {
      arrRemoveChars.push(arr[index]);
    }
  }

  let revArr = arrRemoveChars.slice().reverse();

  return revArr.join('') === arrRemoveChars.join('');
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= 0 && char <= 9;
}

console.log(isPalindrome("123ab321"));