let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(subarr => {
  return subarr.filter(num => num % 3 === 0);
}));