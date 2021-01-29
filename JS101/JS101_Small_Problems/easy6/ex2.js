function doubleConsonants(str) {
  let doubleStr = '';

  for (let index = 0; index < str.length; index++) {
    if (consonantsOnly(str[index].toLowerCase())) {
      doubleStr += str[index] + str[index];
    } else {
      doubleStr += str[index];
    }
  }

  return doubleStr;
}

function consonantsOnly(char) {
  return (char >= 'b' && char <= 'd') ||
    (char >= 'f' && char <= 'h') ||
    (char >= 'j' && char <= 'n') ||
    (char >= 'p' && char <= 't') ||
    (char >= 'v' && char <= 'z');
}

console.log(doubleConsonants('Hello-World!'));