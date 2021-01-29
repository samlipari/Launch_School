function halvsies(arr) {
  let str = arr.join('');
  let center = Math.ceil(str.length / 2);
  let leftSide = str.substring(0, center).split('');
  let rightSide = str.substring(center).split('');
  let finalArr = [leftSide, rightSide];

  return finalArr;
}

console.log(halvsies([]));