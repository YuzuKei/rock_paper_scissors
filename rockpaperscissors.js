let computerMove = [];
let scoring = { cpuScore : 0, playerScore : 0, totalRounds : 0 };
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

    cpuMove(); 
    let displayMessage = '';

    if (playerInput == computerMove) {
        displayMessage = playerInput + " against " + computerMove + ". It's a tie!";
        updateDisplayAnnouncements(displayMessage);
        addToMatchHistory(displayMessage);
        console.log(playerInput + " against " + computerMove + ". It's a tie!");
        return;
    } else if (playerInput == 'Rock' && computerMove == 'Paper') {
        displayMessage = playerInput + ' loses to ' + computerMove;
        updateDisplayAnnouncements(displayMessage);
        addToMatchHistory(displayMessage);
        return score('cpu')
    } else if (playerInput == 'Paper' && computerMove == 'Scissors') {
        displayMessage = playerInput + ' loses to ' + computerMove;
        updateDisplayAnnouncements(displayMessage);
        addToMatchHistory(displayMessage);
        return score('cpu');
    } else if (playerInput == 'Scissors' && computerMove == 'Rock') {
        displayMessage = playerInput + ' loses to ' + computerMove;
        updateDisplayAnnouncements(displayMessage);
        addToMatchHistory(displayMessage);
        return score('cpu');
    } else {
        displayMessage = playerInput + ' beats ' + computerMove + '. You win!';
        updateDisplayAnnouncements(displayMessage);
        addToMatchHistory(displayMessage);
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

    let message = '';

    updateDisplayScores();
    if (scoring.cpuScore >= Math.ceil((roundLength / 2)) && scoring.cpuScore > scoring.playerScore) {
        message = 'Game over. CPU wins ' + scoring.cpuScore + ' to ' +scoring.playerScore
        updateDisplayAnnouncements(message);
        addToMatchHistory(message);
        resetScore();
        gameStart();
    } else if (scoring.playerScore >= Math.ceil((roundLength / 2)) && scoring.cpuScore < scoring.playerScore){
        message = 'Game over. You win ' + scoring.playerScore + ' to ' +scoring.cpuScore
        updateDisplayAnnouncements(message);
        addToMatchHistory(message);
        resetScore();
        gameStart();
    } return;
}

function resetScore() {
    return scoring = { cpuScore : 0, playerScore : 0, totalRounds : 0};
}


gameStart();


const rockInput = document.querySelector('.rock');
rockInput.addEventListener('click', () => {
    rockPaperScissors('Rock');
    updateDisplayScores();
});

const paperInput = document.querySelector('.paper');
paperInput.addEventListener('click', () => {
    rockPaperScissors('Paper');
    updateDisplayScores();
});

const scissorsInput = document.querySelector('.scissors');
scissorsInput.addEventListener('click', () => {
    rockPaperScissors('Scissors');
    updateDisplayScores();
});

const display = document.querySelector('.display');

const displayScores = document.querySelector('.displayScores');
function updateDisplayScores() {
    displayScores.textContent = 'Player: ' + scoring.playerScore + ' vs ' + 'CPU: ' + scoring.cpuScore;
}

const displayAnnouncements = document.querySelector('.displayAnnouncements')
function updateDisplayAnnouncements(string) {
    displayAnnouncements.textContent = string;
}

const matchHistory = document.querySelector('.matchHistory');

function addToMatchHistory(message) {
    const div = document.createElement('div');
    div.classList.add('matchHistory');
    div.classList.add('results');
    div.textContent = message;
    matchHistory.append(div);
}

