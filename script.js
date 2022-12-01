// The following script defines  a game of Rock, Paper, Scissors in JavaScript. It is written for a project in The Odin Project foundations course. 

// The script is called and run from the rock-paper-scissors.html file, with output displayed in the browser console. 

// Define Variables
const min = 1;
const max = 3;
let roundCount = 0
let playerScore = 0;
let cpuScore = 0;

let roundWinner;
let userPick;
let cpuVal;
let cpuPick; 


// DECLARE FUNCTIONS
// Prompt player for a choice of R/P/S, then check spelling. Re-prompt until valid selection is provided.
function playerPick() {
    userPick = prompt("Choose Rock, Paper or Scissors")
    userPick = userPick.toUpperCase();
    while ((userPick != 'ROCK') && (userPick != 'PAPER') && (userPick != 'SCISSORS')) {
        console.log("Invalid input. Be careful of spelling mistakes. Please select Rock, Paper, or Scissors")
        userPick = prompt("Choose Rock, Paper or Scissors")
        userPick = userPick.toUpperCase();
    }
    return userPick;
}

// Use the random number gernerator from JS Math object to randomly assign cpu selection between min and max of 1-3, THEN convert random number to string for comparison with player choice.
function cpuAssign(min, max) {
    min = Math.ceil(min);
    max - Math.floor(max);
    cpuVal = Math.floor(Math.random() * (max - min + 1)) + 1;
    if (cpuVal === 1) {
        cpuPick = 'rock';
    } else if (cpuVal === 2) {
        cpuPick = 'paper';
    } else {
        cpuPick = 'scissors';
    }
    return cpuPick.toUpperCase();
}

// Compare player and cpu picks, provide feedback log and increment score. 
function comparePicks(userPick, cpuPick) {
    if (userPick === cpuPick) {
        console.log(`It's a draw! You both chose ${userPick}`)

    } else if ((userPick == 'rock' && cpuPick == 'scissors') || (userPick == 'paper' && cpuPick == 'rock') ||
        (userPick == 'scissors' && cpuPick == 'paper')) {
        console.log(`Player wins! ${userPick} beats ${cpuPick}`);
        return playerScore += 1;

    } else {
        console.log(`CPU wins! ${cpuPick} beats ${playerPick}`);
        return cpuScore += 1;
    }
}

// Game function to call to run game logic. Increments rounds and keeps score until user quits or first to 10 points.
function GameOn() {
    roundCount += 1;
    console.log(`Round ${roundCount}: `);
    playerPick();
    cpuAssign();
    comparePicks(userPick, cpuPick);
    console.log(`Player Score: ${playerScore}      CPU score: ${cpuScore}`)
    
}





// Create game logic