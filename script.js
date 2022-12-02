// The following script defines  a game of Rock, Paper, Scissors in JavaScript. It is written for a project in The Odin Project foundations course. 

// The script is called and run from the rock-paper-scissors.html file, with output displayed in the browser console. 

// Define Variables

const min = Math.ceil(1);
const max = Math.floor(3);
let playerScore = 0;
let cpuScore = 0;

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
    cpuVal = Math.floor(Math.random() * (max - min + 1) + min);
    if(cpuVal >= 1 && cpuVal <= 3) {
        (cpuVal === 1) ? cpuPick = "ROCK" : (cpuVal === 2) ? cpuPick = 'PAPER' : (cpuPick = "SCISSORS");
        return cpuPick;
    } else console.log("Error in function: cpuAssign")
}

// Compare player and cpu picks, provide feedback log and increment score. 
function comparePicks(userPick, cpuPick) {
    if (userPick === cpuPick) {
        console.log(`It's a draw!`);

    } else if ((userPick == 'ROCK' && cpuPick == 'SCISSORS') || (userPick == 'PAPER' && cpuPick == 'ROCK') ||
        (userPick == 'SCISSORS' && cpuPick == 'PAPER')) {
        console.log(`Player wins this round!`);
        return playerScore += 1;

    } else {
        console.log(`CPU wins this round!`);
        return cpuScore += 1;
    }
}

// Game function to call to run game logic. Increments rounds and keeps score until user quits or first to 10 points.
function gameOn() {
    let roundCount = 0;
    while (roundCount < 8) {
        roundCount += 1;
        console.log(`Round ${roundCount}: `);
        playerPick();
        console.log(`Player chose ${userPick}`);
        cpuAssign();
        console.log(`CPU chose ${cpuPick}`);
        comparePicks(userPick, cpuPick);
        console.log(`Player Score: ${playerScore}      CPU score: ${cpuScore}`);
    
        if (playerScore == 4) {
            console.log('PLAYER WINS THE GAME! Congratulations!!');
            gameStatus = false;
        } else if (cpuScore == 4) {
            console.log('CPU WINS. Please play again.');
        }
    }
}