const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");

// Logic for the game
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let newWinner;

// Tie Declaration
function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    roundWinner = "Tie";
  }

  //   Win Declaration
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    // roundWinner = "Player";
    newWinner = document.getElementById("winMsg").innerHTML = "Player";
  }

  //   Loss Declaration
  if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    newWinner = document.getElementById("winMsg").innerHTML = "Computer";
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

function gameplay() {
  if (playerScore === 5) {
    return "Player Won";
  } else {
    return "Computer Won";
  }
}

rock.addEventListener("click", console.log(rock));
