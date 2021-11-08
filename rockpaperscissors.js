let computerMove = [];
let scoring = { cpuScore : 0, playerScore : 0, totalRounds = 0 };
let roundLength = 5;





function cpuMove() { 

    let rng = Math.random() * Math.floor(3);
    if (rng < 1) {    
        computerMove = "Rock";
    }   else if (rng < 2) {
        computerMove = "Paper";
    }   else {
        computerMove = "Scissors";
    } return computerMove;

}


function rockPaperScissors(playerInput) {
    if (playerInput == undefined) return;
    console.log({playerInput});

    cpuMove(); 

    if (playerInput == computerMove) {
        console.log(playerInput + " against " + computerMove + ". It's a tie!");
    } else if (playerInput == 'Rock' && computerMove == 'Paper') {
        ++scoring.totalRounds;
        console.log(playerInput + ' loses to ' + computerMove);
        return score('cpu')
    } else if (playerInput == 'Paper' && computerMove == 'Scissors') {
        ++scoring.totalRounds;
        console.log(playerInput + ' loses to ' + computerMove);
        return score('cpu');
    } else if (playerInput == 'Scissors' && computerMove == 'Rock') {
        ++scoring.totalRounds;
        console.log(playerInput + ' loses to ' + computerMove);
        return score('cpu');
    } else {
        ++scoring.totalRounds;
        console.log(playerInput + ' beats ' + computerMove + '. You win!');
        return score('player');
    }
}


function gameStart() {
    roundLength = parseInt(prompt('How many rounds would you like to play for?'));
    if (Number.isInteger(roundLength)) {
        return roundLength;
    } else {
        alert('Invalid input. Setting to default (3 rounds).')
        return roundLength = 3;
    }
    
}

function score(winner) {
    if (winner == 'player') {
        ++scoring.playerScore;
        console.table({ scoring });
    } else {
        ++scoring.cpuScore;
        console.table({ scoring });
    }

    if ((scoring.cpuScore + scoring.playerScore >= roundLength)) {
        console.log('game over');
        resetScore();
        gameStart();
    }

}

function resetScore() {
    return scoring = { cpuScore : 0, playerScore : 0, totalRounds : 0};
}


gameStart();


const rockInput = document.querySelector('.rock');
let rockPushCount = 0;
rockInput.addEventListener('click', () => {
    rockInput.textContent = 'Rock ' + ++rockPushCount;
    rockPaperScissors('Rock');
});

const paperInput = document.querySelector('.paper');
let paperPushCount = 0;
paperInput.addEventListener('click', () => {
    paperInput.textContent = 'Paper ' + ++paperPushCount;
    rockPaperScissors('Paper');
});

const scissorsInput = document.querySelector('.scissors');
let scissorsPushCount = 0;
scissorsInput.addEventListener('click', () => {
    scissorsInput.textContent = 'Scissors ' + ++scissorsPushCount;
    rockPaperScissors('Scissors');
});
