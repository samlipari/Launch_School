/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WIN = 5;
const SCORE = { human: 0, computer: 0 };
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChooseSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}): `);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChooseSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = '5';
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function joinOr(array, delimiter = ', ', word = 'or') {
  switch (array.length) {
    case 0: return '';
    case 1: return `${array[0]}`;
    case 2: return array.join(` ${word} `);
    default: return array.slice(0, array.length - 1).join(delimiter) + `${delimiter}${word} ${array[array.length - 1]}`;
  }
}

function changeScore(board) {
  if (someoneWon(board) && detectWinner(board) === 'Player') {
    SCORE['human']++;
  } else if (someoneWon(board) && detectWinner(board) === 'Computer') {
    SCORE['computer']++;
  }
}

function matchWinner() {
  if (SCORE['human'] === MATCH_WIN) {
    prompt('Player wins the match!');
    SCORE['human'] = 0;
    SCORE['computer'] = 0;
  } else if (SCORE['computer'] === MATCH_WIN) {
    prompt('Computer wins the match!');
    SCORE['human'] = 0;
    SCORE['computer'] = 0;
  }
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function playAgain() {
  let answer;

  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer === 'n') {
      prompt('Thanks for playing Tic Tac Toe!');
      break;
    } else if (answer === 'y') {
      break;
    } else {
      prompt('Please enter a valid choice');
    }
  }

  return answer === 'y';
}

function selectFirstPlayer() {
  while (true) {
    prompt("Who goes first? Select 'p' for player or 'c' for computer");
    let first = readline.question().toLowerCase();
    if (first === 'p' || first === 'c') return first;
    prompt('Please enter a valid choice.');
  }
}

let currentPlayer;

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    return playerChooseSquare(board);
  } else if (currentPlayer === 'c') {
    return computerChooseSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'c') {
    currentPlayer = 'p';
  } else if (currentPlayer === 'p') {
    currentPlayer = 'c';
  }
  return currentPlayer;
}

let board = initializeBoard();

while (true) {
  let board = initializeBoard();
  currentPlayer = selectFirstPlayer();

  while (true) {
    displayBoard(board);

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    changeScore(board);
    prompt(`Player Score = ${SCORE['human']} Computer Score = ${SCORE['computer']}`);
    matchWinner();
  } else {
    prompt("It's a tie!");
  }

  if (playAgain() === false) break;
}