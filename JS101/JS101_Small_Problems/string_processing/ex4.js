function wordCap(string) {
  let array = string.split(' ');
  let capFirstLetter = [];
  for (let index = 0; index < array.length; index++) {
    capFirstLetter.push(array[index].slice(0, 1).toUpperCase() +
    array[index].slice(1).toLowerCase());
  }
  return capFirstLetter.join(' ');
}

console.log(wordCap('the javaScript language'));