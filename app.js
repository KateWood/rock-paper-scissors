function getComputerMove() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerMove(move) {
    var move = prompt('Please choose either "rock", "paper", or "scissors".');
    return move;
}

function getWinner() {
    var playerMove = getPlayerMove();
    console.log(playerMove);
    var computerMove = getComputerMove();
    console.log(computerMove);
    if (((playerMove == 'rock') && (computerMove == 'scissors')) || 
        ((playerMove == 'paper') && (computerMove == 'rock')) || 
        ((playerMove == 'scissors') && (computerMove == 'paper'))) {
        console.log('you win!')
        } else if (((computerMove == 'rock') && (playerMove == 'scissors')) || 
        ((computerMove == 'paper') && (playerMove == 'rock')) || 
        ((computerMove == 'scissors') && (playerMove == 'paper'))) {
        console.log('Computer beat you!')
        } else {
        console.log('You tied. Play again?');
    }
}


/* next step
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
/*    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        getWinner();
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === ' computer') {
            computerWins += 1;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

window.addEventListener("load", function(){
    var playerName = prompt("Hi, I'm Computer. What is your name?");
    document.getElementById('playerHeader').innerHTML = playerName;
});

*/

