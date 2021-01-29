function multiplyList(arr1, arr2) {
  let productArray = [];
  let product;

  for (let index = 0; index < arr1.length; index++) {
    product = arr1[index] * arr2[index];
    productArray.push(product);
    product = 1;
  }
  return productArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));