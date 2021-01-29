function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length < 1) {
    return [];
  }

  let copy = array.slice();
  let first = copy.shift();
  copy.push(first);
  return copy;
}

console.log(rotateArray([]));