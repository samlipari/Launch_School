function staggeredCase(string) {
  let array = string.split('');
  let changeCase = [];
  let upperSwitch = true;

  for (let index = 0; index < array.length; index++) {
    if (upperSwitch === true && isLetter(array[index])) {
      changeCase.push(array[index].toUpperCase());
      upperSwitch = false;
    } else if (upperSwitch === false && isLetter(array[index])) {
      changeCase.push(array[index].toLowerCase());
      upperSwitch = true;
    } else {
      changeCase.push(array[index]);
    }
  }
  return changeCase.join('');
}

function isLetter(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

console.log(staggeredCase("ALL CAPS"));