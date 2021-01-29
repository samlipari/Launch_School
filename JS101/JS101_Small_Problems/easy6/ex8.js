function sequence(count, startingNum) {
  let multiplesArr = [];
  for (let index = 1; index <= count; index++) {
    multiplesArr.push(index * startingNum);
  }
  return multiplesArr;
}

console.log(sequence(4, -7));