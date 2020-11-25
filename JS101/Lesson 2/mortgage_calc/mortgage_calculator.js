const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

function prompt(message) {
  console.log(`** ${message}`);
}

function isValidNumber(num) {
  return num === '' || Number.isNaN(Number(num)) || num <= 0;
}

function aprValidNumber(num) {
  return num === '' || Number.isNaN(Number(num)) || num < 0;
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['loanAmount']);
  let loanAmount = readline.question();
  loanAmount = Number(loanAmount.replace(/,/g, ''));
  isValidNumber(loanAmount);

  while (isValidNumber(loanAmount)) {
    prompt(MESSAGES['validNum']);
    loanAmount = readline.question();
    loanAmount = Number(loanAmount.replace(/,/g, ''));
  }

  prompt(MESSAGES['apr']);
  let apr = parseFloat(readline.question());

  while (aprValidNumber(apr)) {
    prompt(MESSAGES['validNum']);
    apr = readline.question();
  }

  prompt(MESSAGES['loanDuration']);
  let loanDurationYears = readline.question();

  while (isValidNumber(loanDurationYears)) {
    prompt(MESSAGES['validNum']);
    loanDurationYears = readline.question();
  }

  let loanDurationMonths = Number(loanDurationYears * 12);

  let monthlyInterestRate = (apr * .01) / 12;

  let monthlyPayment;
  if (apr === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  } else if (apr > 0) {
    // eslint-disable-next-line max-len
    monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  }

  let roundedMonthlyPayment = monthlyPayment.toFixed(2);

  console.log(`Your monthly payment amount is: $${roundedMonthlyPayment}`);

  prompt(MESSAGES['again']);
  let again = readline.question();

  if (again && again[0].toLowerCase() !== 'y') {
    break;
  }

  console.clear();
}

console.clear();