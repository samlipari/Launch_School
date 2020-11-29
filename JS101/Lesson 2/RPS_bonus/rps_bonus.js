const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const MESSAGES = require('./rps_messages.json');
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};

let computerScore = 0;
let playerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt(MESSAGES['playerWinsGame']);
  } else if (choice === computerChoice) {
    prompt(MESSAGES['tie']);
  } else {
    prompt(MESSAGES['compWinsGame']);
  }
}

function keepScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
  } else if (playerWins(computerChoice, choice)) {
    computerScore += 1;
  }
  prompt(`Computer Score: ${computerScore}, Your Score: ${playerScore}`);
}

while (true) {
  prompt(MESSAGES['choose']);
  let choice = readline.question().toLowerCase();
  switch (choice) {
    case 'r': choice = 'rock';
      break;
    case 'p': choice = 'paper';
      break;
    case 'sc': choice = 'scissors';
      break;
    case 'l': choice = 'lizard';
      break;
    case 'sp': choice = 'spock';
      break;
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt(MESSAGES['invalidChoice']);
    choice = readline.question().toLowerCase();
    switch (choice) {
      case 'r': choice = 'rock';
        break;
      case 'p': choice = 'paper';
        break;
      case 'sc': choice = 'scissors';
        break;
      case 'l': choice = 'lizard';
        break;
      case 'sp': choice = 'spock';
        break;
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  playerWins(choice, computerChoice);
  displayWinner(choice, computerChoice);
  keepScore(choice, computerChoice);

  if (computerScore === 5) {
    prompt(MESSAGES['compGrandWinner']);
    computerScore = 0;
    playerScore = 0;
  } else if (playerScore === 5) {
    prompt(MESSAGES['playerGrandWinner']);
    computerScore = 0;
    playerScore = 0;
  }

  prompt(MESSAGES['playAgain']);
  let answer = readline.question().toLowerCase();
  while (answer !== 'yes' && answer[0] !== 'n' && answer !== 'y') {
    prompt(MESSAGES['playAgainError']);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  console.clear();
}
console.clear();