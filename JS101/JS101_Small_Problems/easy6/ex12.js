function isBalanced(str) {
  let parens = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === '(') {
      parens++;
    } else if (str[index] === ')') {
      parens--;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);