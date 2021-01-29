let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) {
  let array = string.split('');
  let swappedCaseArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].match(/[A-Z]/)) {
      swappedCaseArray.push(array[index].toLowerCase());
    } else if (array[index].match(/[a-z]/)) {
      swappedCaseArray.push(array[index].toUpperCase());
    } else {
      swappedCaseArray.push(array[index]);
    }
  }
  return swappedCaseArray.join('');
}

console.log(swapCase(munstersDescription));