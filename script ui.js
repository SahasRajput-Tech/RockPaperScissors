let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id.split('-')[0];
        playRound(playerSelection);
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    resultsDiv.textContent = result;
    scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

    if (playerScore === 5) {
        resultsDiv.textContent = "Congratulations! You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Sorry, you lose the game!";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}
