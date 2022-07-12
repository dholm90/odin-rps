let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let playerSelection;


const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const gameOver = document.querySelector('.gameOver');

results.textContent = 'Lets Play!';
score.innerHTML = "Player: " + playerScore + "</br>Computer: " + computerScore + "</br>Rounds Played: " + roundsPlayed;



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (roundsPlayed < 5) {
            playerSelection = button.id;
            let computerSelection = computerPlay();
            results.textContent = playRound(playerSelection, computerSelection);
            score.innerHTML = "Player: " + playerScore + "</br>Computer: " + computerScore + "</br>Rounds Played: " + roundsPlayed;
            playerSelection = "";
            if (roundsPlayed == 5) {
                if (playerScore == computerScore) {
                    gameOver.textContent = "Tie Game!";
                }
                else if (playerScore > computerScore) {
                    gameOver.textContent = "You Win The Game!"
                }
                else {
                    gameOver.textContent = "You Lose The Game!"
                }
            }
        } else {
            button.disabled;
        }

    });
});


function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        roundsPlayed++;
        return "Round Tied!"

    }
    else if (player == "rock") {
        if (computer == "scissors") {
            playerScore++;
            roundsPlayed++;
            return "You Win! Rock Beats Scissors!"
        }
        else {
            computerScore++;
            roundsPlayed++;
            return "You Lose! Paper Beats Rock!"
        }
    }
    else if (player == "scissors") {
        if (computer == "paper") {
            playerScore++;
            roundsPlayed++;
            return "You Win! Scissors Beats Paper!"
        }
        else {
            computerScore++;
            roundsPlayed++;
            return "You Lose! Rock Beats Scissors!"
        }
    }
    else if (player == "paper") {
        if (computer == "rock") {
            playerScore++;
            roundsPlayed++;
            return "You Win! Paper Beats Rock!"
        }
        else {
            computerScore++;
            roundsPlayed++;
            return "You Lose! Scissors Beats Paper!"
        }
    }
    else {
        return "Error!";
    }
}

//console.log(Game());



