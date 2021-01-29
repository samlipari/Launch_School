function reverseWords(str) {
  let arr = str.split(' ');
  let backwardsStr = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length < 5) {
      backwardsStr.push(arr[index]);
    } else {
      backwardsStr.push(reversedWord(arr[index]));
    }
  }
  return backwardsStr.join(' ');
}

function reversedWord(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Walk around the block'));