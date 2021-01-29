function maxRotation(number) {
  let str = String(number);
  let sliceStartIndex = 1;
  let movedItem = 0;
  let rotatedString;

  while (sliceStartIndex <= str.length) {
    rotatedString = str.slice(sliceStartIndex) + str[movedItem];
    sliceStartIndex++;
    movedItem++;
    str = rotatedString;
  }
  return Number(str);
}


console.log(maxRotation(735291));