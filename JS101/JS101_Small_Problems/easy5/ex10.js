function average(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return Math.floor(sum / arr.length);

}

console.log(average([9, 47, 23, 95, 16, 52]));