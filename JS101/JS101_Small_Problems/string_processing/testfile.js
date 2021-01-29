function staggeredCase(string) {
  let array = string.split('');
  let everyOtherLetter = [];
  for (let index = 0; index < array.length; index++) {
    if (index % 2 === 0) {
      everyOtherLetter.push(array[index].toUpperCase());
    } else if (index % 2 !== 0) {
      everyOtherLetter.push(array[index].toLowerCase());
    } else {
      everyOtherLetter.push(array[index]);
    }
  }
  return everyOtherLetter.join('');
}

console.log(staggeredCase('ALL_CAPS'));