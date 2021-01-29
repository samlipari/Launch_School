let alphaNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'];

function sortAlphaNums(array) {
  return array.sort(compareAlphaNums);
}

function compareAlphaNums(num1, num2) {
  if (alphaNums[num1] > alphaNums[num2]) {
    return 1;
  } else if (alphaNums[num1] < alphaNums[num2]) {
    return -1;
  } else {
    return 0;
  }
}

console.log(sortAlphaNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));