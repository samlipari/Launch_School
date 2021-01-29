function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function middleWord(str) {
  if (str === '') {
    return 'Please enter at least 3 words.';
  }

  let arr = str.split(' ');

  if (arr.length < 3) {
    return 'Please enter at least 3 words';
  }

  let middleNum = Math.ceil((arr.length / 2));
  return arr[arr.length - middleNum];
}

console.log(middleWord('Hi Sam! Did you have a good Thanksgiving?'));