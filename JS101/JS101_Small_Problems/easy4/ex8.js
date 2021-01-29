function wordSizes(str) {
  let arrOfWords = str.split(' ');
  let count = {};

  for (let index = 0; index < arrOfWords.length; index++) {
    let wordSize = arrOfWords[index].length;

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

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));