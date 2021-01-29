function staggeredCase(string) {
  let array = string.split('');
  let staggeredArray = [];
  for (let index = 0; index < array.length; index++) {
    if (index % 2 === 0) {
      staggeredArray.push(array[index].toUpperCase());
    } else {
      staggeredArray.push(array[index].toLowerCase());
    }
  }
  return staggeredArray.join('');
}

console.log(staggeredCase('ignore 77 the 4444 numbers'));