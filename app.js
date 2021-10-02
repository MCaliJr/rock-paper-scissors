// create score count variables for player and computer
let playerScore = 0;
let computerScore = 0;

// Get computer's hand
function computerSelection() {
  const computersPossibilities = ["rock", "paper", "scissors"];
  let computersHand = computersPossibilities[Math.floor(Math.random() * 3)];
  return computersHand;
}

// Select elements to change contents of the web as user plays
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");

const content = document.createElement("div");

// Display current score on the page and announce winner
function scoreboard() {
  content.textContent = `Your score: ${playerScore}, computer's score: ${computerScore}`;

  if (playerScore >= 5 && computerScore < 5) {
    content.textContent =
      "Congratulations, You've succesfully beat the machine!";
  } else if (computerScore >= 5 && playerScore < 5) {
    content.textContent = "Unfortunately, Computer won...";
  } else if (computerScore >= 5 && playerScore >= 5) {
    content.textContent = "Dude, it's over... STOP PLAYING!!!";
  }
  results.appendChild(content);
}

playerSelection();

// play round of rock paper scissors with function which takes playerSelection and computerSelection as two parameters and return the winner (thus updating the score count)
function play(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return console.log("Same hand - it's a tie");
  }

  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      return console.log("Nice, rock beats scissors - You win");
    } else {
      computerScore++;
      return console.log("Unfortunately, paper beats rock - computer wins");
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      return console.log("Nice, paper beats rock - You win");
    } else {
      computerScore++;
      return console.log("Unfortunately, scissors beat paper - computer wins");
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      ++playerScore;
      return console.log("Nice, scissors beat paper - You win");
    } else {
      ++computerScore;
      return console.log("Unfortunately, rock beats scissors - computer wins");
    }
  }
}

// Get player's hand from button
function playerSelection() {
  rock.addEventListener("click", () => {
    let computersHand = computerSelection();
    let usersHand = "rock";
    play(computersHand, usersHand);
    scoreboard();
  });
  paper.addEventListener("click", () => {
    let computersHand = computerSelection();
    let usersHand = "paper";
    play(computersHand, usersHand);
    scoreboard();
  });
  scissors.addEventListener("click", () => {
    let computersHand = computerSelection();
    let usersHand = "scissors";
    play(computersHand, usersHand);
    scoreboard();
  });
}
