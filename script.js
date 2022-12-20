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


// DECLARE FUNCTIONS

function playRound(e) {         // Starts a round by taking the user button click as input for selection, then calls the roundOn function. 
    //Assign player pick from button onput and display
    userPick = e.currentTarget.id;
    const user = document.getElementById('user-pick');
    user.textContent = `Player chooses: ${userPick}`;

    //Assign CPU pick from random generator function
    cpuAssign(min, max);
    const cpu = document.getElementById('cpu-pick');
    cpu.textContent = `CPU chooses: ${cpuPick}`;

    // Compare picks, assign results and update scores
    comparePicks(userPick, cpuPick);
    const score = document.getElementById('tally');
    score.textContent = `Player: ${playerScore}    CPU: ${cpuScore}`;
};


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
        const round = document.getElementById('round-result');
        round.textContent = `It's a draw!`;

    } else if ((userPick == 'ROCK' && cpuPick == 'SCISSORS') || (userPick == 'PAPER' && cpuPick == 'ROCK') ||
        (userPick == 'SCISSORS' && cpuPick == 'PAPER')) {
            const round = document.getElementById('round-result');
            round.textContent = 'Player WINS!';
            return playerScore += 1;

    } else {
        const round = document.getElementById('round-result');
        round.textContent = 'CPU Wins';
        return cpuScore += 1;
}};

const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(b => b.addEventListener('click', playRound));