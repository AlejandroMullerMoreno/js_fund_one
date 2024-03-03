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

let playerSelection = prompt("Enter a choice between rock, paper, or scissors: ", "").toLowerCase();
let computerSelection = getComputerChoice();


function singleRound(playerSelection,computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            console.log("It's a tie with two rocks!");
            return;
        }
        if (computerSelection === "scissors"){
            console.log("The user wins with their rock against the computer's scissors!");
            return;
        }
        if (computerSelection === "paper"){
            console.log("The computer wins with their paper against the user's rock!");
            return;
        }

    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("The computer wins with their rock against the user's scissors!");
            return;
        }
        if (computerSelection === "scissors"){
            console.log("It's a tie!");
            return;
        }
        if (computerSelection === "paper"){
            console.log("The user wins with their scissors against the computer's paper!");
            return;
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log("The user wins with their paper against the compuoter's rock!");
            return;
        }
        if (computerSelection === "scissors"){
            console.log("The computer wins with their scissors against the computer's paper!");
            return;
        }
        if (computerSelection === "paper"){
            console.log("It's a tie!");
            return;
        }
    }
    else {
        // this means that the user did not enter a correct input
    }
}

singleRound(playerSelection,computerSelection);

