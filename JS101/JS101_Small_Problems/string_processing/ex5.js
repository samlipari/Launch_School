function swapCase(string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] >= 'a' && string[index] <= 'z') {
      newString += string[index].toUpperCase();
    } else if (string[index] >= 'A' && string[index] <= 'Z') {
      newString += string[index].toLowerCase();
    } else {
      newString += string[index];
    }
  }
  return newString;
}

console.log(swapCase('Tonight on XYZ-TV'));