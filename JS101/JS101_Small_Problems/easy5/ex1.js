function union(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let finalArr = [];

  for (let index = 0; index < arr3.length; index++) {
    if (!finalArr.includes(arr3[index])) {
      finalArr.push(arr3[index]);
    }
  }
  return finalArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));