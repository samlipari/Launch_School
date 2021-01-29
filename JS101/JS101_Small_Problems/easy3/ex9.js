function cleanUp(str) {
  let cleanStr = '';

  for (let index = 0; index < str.length; index++) {
    if (isLowerCaseLetter(str[index]) || isUpperCaseLetter(str[index])) {
      cleanStr += str[index];
    } else if (cleanStr[cleanStr.length - 1] !== ' ') {
      cleanStr += ' ';
    }
  }
  return cleanStr;
}

function isLowerCaseLetter(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUpperCaseLetter(letter) {
  return letter >= 'A' && letter <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));