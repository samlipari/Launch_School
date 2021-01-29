function century(year) {
  let centuryNum = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNum -= 1;
  }

  return String(centuryNum) + centurySuffix(centuryNum);
}

function centurySuffix(centuryNum) {
  if (catchWithTh(centuryNum % 100)) {
    return 'th';
  }

  let lastDigit = centuryNum % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwoDigits) {
  return lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13;
}

console.log(century(11201));