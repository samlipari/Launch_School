function logInBox(string) {
  let length = string.length;
  if (length === 0) {
    length = 2;
  }

  console.log('+' + '-'.repeat(length) + '+');
  console.log('|' + ' '.repeat(length) + '|');
  console.log('|' + (string || ' '.repeat(length)) + '|');
  console.log('|' + ' '.repeat(length) + '|');
  console.log('+' + '-'.repeat(length) + '+');
}

logInBox('To boldly go where no one has gone before.');

/*
input: string
output: string in box
*/