// eslint-disable-next-line max-lines-per-function
function minilang(string) {
  let stack = [];
  let register = 0;
  let inputArray = string.split(' ');
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index].match(/\d/)) {
      register = Number(inputArray[index]);
    } else if (inputArray[index].match(/PUSH/)) {
      stack.push(register);
    } else if (inputArray[index].match(/ADD/)) {
      register += stack.pop();
    } else if (inputArray[index].match(/SUB/)) {
      register -= stack.pop();
    } else if (inputArray[index].match(/MULT/)) {
      register *= stack.pop();
    } else if (inputArray[index].match(/DIV/)) {
      register = Math.floor(register / stack.pop());
    } else if (inputArray[index].match(/MOD/)) {
      register %= stack.pop();
    } else if (inputArray[index].match(/POP/)) {
      register = stack.pop();
    } else if (inputArray[index].match(/PRINT/)) {
      console.log(register);
    }
  }
}

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));