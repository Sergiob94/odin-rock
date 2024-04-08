const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {          //gets random input for computer
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } 
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        return 'It is a Tie!'
    }
    else if (result == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {            //gets input from player
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization does not matter.');
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {           //plays the game, plays five rounds, console based
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome!');
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('----------');
        if(checkWinner(playerSelection, computerSelection) == 'Player') {
            playerScore++;
        }
        else if(checkWinner(playerSelection, computerSelection) == 'Computer') {
            computerScore++;
        }
    }
    console.log('Game Over')
    if(playerScore > computerScore) {
        console.log('Player wins!');
    }
    else if(playerScore < computerScore) {
        console.log('Computer wins!');
    }
    else {
        console.log('It is a tie!');
    }
}

game();