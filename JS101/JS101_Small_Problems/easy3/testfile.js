function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return centuryNumber + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (isElevenTwelveOrThirteen(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function isElevenTwelveOrThirteen(lastTwoDigits) {
  return lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13;
}

console.log(century(11201));