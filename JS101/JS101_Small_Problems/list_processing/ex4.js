function substrings(string) {
  let array = string.split('');
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (newArray.length === 0) {
      newArray.push(array[index]);
    } else {
      newArray.push(newArray[newArray.length - 1] + array[index]);
    }
  }
  return newArray.sort((a, b) => a.length - b.length);
}

console.log(substrings('abc'));