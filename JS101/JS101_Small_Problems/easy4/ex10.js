function swap(str) {
  let arr = str.split(' ');
  let switchedArr = [];

  for (let index = 0; index < arr.length; index++) {
    switchedArr.push(lastToFirst(arr[index]));
  }

  return switchedArr.join(' ');
}

function lastToFirst(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));