let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3)
    switch(randomChoice) { 
        case 0:
            randomChoice="rock";
            break;
        case 1:
            randomChoice="paper";
            break;
        case 2:
            randomChoice="scissors";
            break;

    }
    return randomChoice
}

function singleRound(playerSelection,computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "It's a tie with two rocks!";
        }
        if (computerSelection === "scissors"){
            playerScore += 1;
            return "The user wins with their rock against the computer's scissors!";
        }
        if (computerSelection === "paper"){
            computerScore += 1;
            return "The computer wins with their paper against the user's rock!";
        }

    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerScore += 1;
            return "The computer wins with their rock against the user's scissors!";
        }
        if (computerSelection === "scissors"){
            return "It's a tie!";
        }
        if (computerSelection === "paper"){
            playerScore += 1;
            return "The user wins with their scissors against the computer's paper!";
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore += 1;
            return "The user wins with their paper against the computer's rock!";
        }
        if (computerSelection === "scissors"){
            computerScore += 1;
            return "The computer wins with their scissors against the computer's paper!";
        }
        if (computerSelection === "paper"){
            return "It's a tie!";
        }
    }
}

function playGame(){
    let result;
    let playerSelection;
    let computerSelection;
    for (let i = 1; i<=5; i++){
        playerSelection = prompt("Enter a choice between rock, paper, or scissors: ", "").toLowerCase();
        while (invalidInput(playerSelection)){
            console.log("Your input was invalid. Try again by entering either rock, paper, or scissors");
            playerSelection = prompt("Enter a choice between rock, paper, or scissors: ", "").toLowerCase();
        }
        computerSelection = getComputerChoice();
        result = singleRound(playerSelection,computerSelection);
        console.log(computerScore,playerScore)
        console.log(result);
    }

    if (computerScore > playerScore){
        console.log("The computer won the game!");
    }
    else if (playerScore > computerScore){
        console.log("The user won the game!");
    }
    else{
        console.log("The game was a tie!")
    }
}

function invalidInput(playerSelection){
    if (playerSelection === "scissors" || playerSelection === "rock" || playerSelection === "paper"){
        return false
    }
    return true
}

playGame();
