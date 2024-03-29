// The following script defines  a game of Rock, Paper, Scissors in JavaScript. It is written for a project in The Odin Project foundations course.

// The script is called and run from the rock-paper-scissors.html file, with output displayed in the browser console.

// Define Variables

const min = Math.ceil(1);
const max = Math.floor(3);
let playerScore = 0;
let cpuScore = 0;

let roundResult;
let userPick;
let cpuVal;
let cpuPick;

// Set DOM variables for manipulation
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
const playerTally = document.getElementById("player-tally");
const cpuTally = document.getElementById("cpu-tally");
const buttons = Array.from(document.querySelectorAll(".btn"));

// Create Event listener for buttons
buttons.forEach((b) => b.addEventListener("click", playRound));
restartBtn.addEventListener("click", restartGame);

// DECLARE FUNCTIONS

function playRound(e) {
  // function is called when a player input button is clicked. Player selection starts round
  //Assign player pick from button input and update display image
  userPick = e.currentTarget.id;
  updateImage(userPick, "player");

  //Assign CPU pick from random generator function and update display image
  cpuAssign(min, max);
  updateImage(cpuPick, "cpu");

  // Compare picks, assign results and update scores
  comparePicks(userPick, cpuPick);
  playerTally.textContent = `${playerScore}`;
  cpuTally.textContent = `${cpuScore}`;

  // Check scores for endgame
  if (isGameOver()) {
    setFinalMessage();
    openEndgameModal();
  }
}

// Use the random number gernerator from JS Math object to randomly assign cpu selection between min and max of 1-3, THEN convert random number to string for comparison with player choice.
function cpuAssign(min, max) {
  cpuVal = Math.floor(Math.random() * (max - min + 1) + min);
  if (cpuVal >= 1 && cpuVal <= 3) {
    cpuVal === 1
      ? (cpuPick = "ROCK")
      : cpuVal === 2
      ? (cpuPick = "PAPER")
      : (cpuPick = "SCISSORS");
    return cpuPick;
  } else console.log("Error in function: cpuAssign");
}

// Compare player and cpu picks, provide feedback log and increment score.
function comparePicks(userPick, cpuPick) {
  if (userPick === cpuPick) {
    const round = document.getElementById("round-result");
    round.textContent = `It's a draw!`;
  } else if (
    (userPick == "ROCK" && cpuPick == "SCISSORS") ||
    (userPick == "PAPER" && cpuPick == "ROCK") ||
    (userPick == "SCISSORS" && cpuPick == "PAPER")
  ) {
    const round = document.getElementById("round-result");
    round.textContent = "Player WINS!";
    return (playerScore += 1);
  } else {
    const round = document.getElementById("round-result");
    round.textContent = "CPU Wins . . .";
    return (cpuScore += 1);
  }
}

// Update main image with selection
function updateImage(pick, option) {
  if (pick == "ROCK") {
    document.getElementById(`${option}-main`).firstChild.src =
      "./images/rps-logos-rock.png";
  } else if (pick == "PAPER") {
    document.getElementById(`${option}-main`).firstChild.src =
      "./images/rps-logos-paper.png";
  } else if (pick == "SCISSORS") {
    document.getElementById(`${option}-main`).firstChild.src =
      "./images/rps-logos-scissors.png";
  }
}

// Check score if a player has > 5 points
function isGameOver() {
  return playerScore === 5 || cpuScore === 5;
}

// Functions to set endgame modals to active, and then close when selected
function openEndgameModal() {
  endgameModal.classList.add("active");
  endgameMsg.classList.add("active");
  overlay.classList.add("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  endgameMsg.classList.remove("active");
  overlay.classList.remove("active");
}

function setFinalMessage() {
  return playerScore > cpuScore
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent = "You lost...");
}

// Reset all counters and refresh to starting conditions
function restartGame() {
  playerScore = 0;
  cpuScore = 0;
  playerTally.textContent = `${playerScore}`;
  cpuTally.textContent = `${cpuScore}`;
  document.getElementById("round-result").textContent = "";
  document.getElementById(`cpu-main`).firstChild.src =
    "./images/question-mark.png";
  document.getElementById(`player-main`).firstChild.src =
    "./images/question-mark.png";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
