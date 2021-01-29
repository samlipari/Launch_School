function multiplicativeAverage(arr) {
  let product = 1;

  for (let index = 0; index < arr.length; index++) {
    product *= arr[index];
  }

  return String((product / arr.length).toFixed(3));
}

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));