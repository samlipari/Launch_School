let sentence = 'The Flintstones Rock!';

function repeatString(str) {
  let spaceCount = 0;
  while (spaceCount < 10) {
    console.log(' '.repeat(spaceCount) + str);
    spaceCount++;
  }
}

repeatString(sentence);