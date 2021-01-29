function removeVowels(array) {
  return array.map(word => {
    return word.replace(/[aeiou]/gi, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));