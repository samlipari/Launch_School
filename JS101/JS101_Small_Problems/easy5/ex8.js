/*function digitList(num) {
  let numToStrToArr = String(num).split('');
  let numArray = [];

  for (let index = 0; index < numToStrToArr.length; index++) {
    numArray.push(numToStrToArr[index] * 1);
  }
  return numArray;
}
*/

function digitList2(num) {
  let numToStrToArr = String(num).split('');
  let numArray = numToStrToArr.map(num => num * 1);
  return numArray;
}

console.log(digitList2(444));
