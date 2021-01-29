function multiplyAllPairs(array1, array2) {
  return array1.map(x, array2 => x * array2[index]).sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));