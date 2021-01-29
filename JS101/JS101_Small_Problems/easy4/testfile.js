function twice(num) {
  let str = String(num);
  let center = str.length / 2;
  let leftSide = str.substring(0, center);
  let rightSide = str.substring(center);

  if (leftSide === rightSide) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(7676));