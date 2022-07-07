let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let playerSelection;

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
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
            return "You Lose! Scussors Beats Paper!"
        }
    }
    else {
        return "Error!";
    }
}



function Game() {
    for (let i = 0; i < 5; i = roundsPlayed) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore + " Computer: " + computerScore + " Rounds Played: " + roundsPlayed);
        playerSelection = "";
    }

    if (playerScore == computerScore) {
        return "Tie Game!"
    }
    else if (playerScore > computerScore) {
        return "You Win The Game!"
    }
    else {
        return "You Lose The Game!"
    }




}


//const computerSelection = computerPlay();
console.log(Game());