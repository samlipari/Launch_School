function sequence(int) {
  let index = 1;
  let integerArray = [];

  while (index <= int) {
    integerArray.push(index);
    index++;
  }

  return integerArray;
}

console.log(sequence(1));

