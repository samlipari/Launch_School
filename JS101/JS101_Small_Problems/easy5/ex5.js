function interLeave(arr1, arr2) {
  let comboArr = [];
  for (let index = 0; index < arr1.length; index++) {
    comboArr.push(arr1[index], arr2[index]);
  }
  return comboArr;
}

console.log(interLeave([1, 2, 3], ['a', 'b', 'c']));