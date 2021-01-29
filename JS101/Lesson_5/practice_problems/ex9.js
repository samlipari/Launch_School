let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(subarr => {
  if (typeof subarr[0] === 'number') {
    return subarr.slice().sort((a, b) => a - b);
  } else {
    return subarr.slice().sort();
  }
}));