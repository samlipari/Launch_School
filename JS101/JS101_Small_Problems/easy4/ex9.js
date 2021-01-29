function wordSizes(str) {
  let arrOfWords = str.split(' ');
  let count = {};

  for (let index = 0; index < arrOfWords.length; index++) {
    let wordSize = removeNonLetters(arrOfWords[index].toLowerCase()).length;

    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }
  return count;
}

function removeNonLetters(str) {
  let cleanStr = '';

  for (let index = 0; index < str.length; index++) {
    if (isLetter(str[index])) {
      cleanStr += str[index];
    }
  }
  return cleanStr;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(wordSizes("What's up doc?"));