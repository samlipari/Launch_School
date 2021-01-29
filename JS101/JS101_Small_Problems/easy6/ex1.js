function repeater(str) {
  let doubleStr = '';

  for (let index = 0; index < str.length; index++) {
    doubleStr += str[index] + str[index];
  }

  return doubleStr;
}