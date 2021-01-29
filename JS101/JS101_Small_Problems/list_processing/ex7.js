function sumOfSums(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    count += array[index] + count;
  }
  return count - array[0];
}

console.log(sumOfSums([3, 5, 2]));