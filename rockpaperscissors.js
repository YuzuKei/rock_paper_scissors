let playerInput = []
let computerMove = [];
let scoring = { cpuScore : 0, playerScore : 0, totalRounds : 0};

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}


function playerMoveCheck() {

    playerInput = prompt('Enter "rock", "paper", or "scissors"').toLowerCase();
    if (playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors') {
        return playerInput;
    } else {
        console.log('Invalid input from playerMoveCheck');
        playerMoveCheck();
    }
}


function cpuMove() { 

    let rng = Math.random() * Math.floor(3);
    if (rng < 1) {    
        computerMove = "rock";
    }   else if (rng < 2) {
        computerMove = "paper";
    }   else {
        computerMove = "scissors";
    } return computerMove;
}


function rockPaperScissors() {
    
    playerMoveCheck(); 
    cpuMove(); 

    if (playerInput == computerMove) {
        console.log(capitalize(playerInput) + " against " + capitalize(computerMove) + ". It's a tie!");
    } else if (playerInput == 'rock' && computerMove == 'paper') {
        ++scoring.totalRounds;
        console.log(capitalize(playerInput) + ' loses to ' + capitalize(computerMove));
        return scoring.cpuScore++
    } else if (playerInput == 'paper' && computerMove == 'scissors') {
        ++scoring.totalRounds;
        console.log(capitalize(playerInput) + ' loses to ' + capitalize(computerMove));
        return scoring.cpuScore++;
    } else if (playerInput == 'scissors' && computerMove == 'rock') {
        ++scoring.totalRounds;
        console.log(capitalize(playerInput) + ' loses to ' + capitalize(computerMove));
        return scoring.cpuScore++;
    } else {
        ++scoring.totalRounds;
        console.log(capitalize(playerInput) + ' beats ' + capitalize(computerMove) + '. You win!');
        return scoring.playerScore++;
    }
}

function referee(roundLength) {
    
    while (scoring.playerScore < roundLength && scoring.cpuScore < roundLength) {
        rockPaperScissors();
        console.table(scoring);
    } 
}

referee(5);


