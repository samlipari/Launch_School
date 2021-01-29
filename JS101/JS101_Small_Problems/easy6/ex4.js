function centerOf(str) {
  let center = (str.length - 1) / 2;

  if (str.length % 2 === 0) {
    return str.charAt(center) + str.charAt(center + 1);
  } else {
    return str.charAt(center);
  }
}

console.log(centerOf('I Love JavaScript'));