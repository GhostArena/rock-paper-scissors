// const root = document.getElementById("root");

// // Console to see if it works
// console.log("Hello");

// Logic for the game
let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;

// Tie Declaration
function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    roundWinner = "Tie";
  }

  //   Win Declaration
  if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === SCISSORS && computerChoice === PAPER) ||
    (playerChoice === PAPER && computerChoice === ROCK)
  ) {
    playerScore++;
    roundWinner = "Player";
  }

  //   Loss Declaration
  if (
    (computerChoice === ROCK && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === ROCK)
  ) {
    computerScore++;
    roundWinner = "Computer";
  }
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

//Game Function Declaration
function game() {}
