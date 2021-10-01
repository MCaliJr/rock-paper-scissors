// create score count variables for player and computer
let playerScore = 0;
let computerScore = 0;

// Get computer's hand
function computerSelection() {
  const computersPossibilities = ["rock", "paper", "scissors"];
  let computersHand = computersPossibilities[Math.floor(Math.random() * 3)];
  return computersHand;
}

// Get player's hand (and make player's input case insensitive)
function playerSelection() {
  let usersHand = prompt(
    "What do You choose: rock, paper or scissors?"
  ).toLowerCase();
  return usersHand;
}

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

// wrap the whole code in one function called game()
function game() {
  // repeat the game till score of one side is 5
  while (playerScore < 5 && computerScore < 5) {
    let computersHand = computerSelection();
    let usersHand = playerSelection();
    play(computersHand, usersHand);
    // return a string with scoreboard
    console.log(
      `Your score: ${playerScore}, computer's score: ${computerScore}`
    );
  }
  if (playerScore == 5) {
    console.log("Congratulations, You've succesfully beat the machine!");
  } else if (computerScore == 5) {
    console.log("Unfortunately, Computer won...");
  }
}

// invoke game() function
game();

let output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }
  output.appendChild(para);
  i--;
}

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for (let i = 0; i < people.length; i++) {
  if (people[i] == "Phil" || people[i] == "Lola") {
    refused.textContent += people[i] + ", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }
}
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 1) + ".";
refused.slice(0, -1);

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let userNumber;
do {
  userNumber = prompt("Gimme a number higher than 100");
} while (userNumber < 100 && userNumber);

let n = prompt(
  "Give me a number and we'll check out whether it is a prime number"
);

nextPrime: for (let i = 2; i < n; j++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert(i);
}

// branch test -real test
console.log("hello");
