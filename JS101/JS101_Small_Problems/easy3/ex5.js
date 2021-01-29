function triangle(num) {
  let starNum = 1;
  let spaceNum = num;
  let str = '*';

  while (starNum <= num) {
    console.log(' '.repeat(spaceNum) + str.repeat(starNum));
    starNum++;
    spaceNum--;
  }
}

triangle(9);