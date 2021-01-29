function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) {
    return [];
  }

  return string.split(' ').map(word => {
    return word + ' ' + word.length;
  });
}

console.log(wordLengths(''));