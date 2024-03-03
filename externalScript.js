function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3)
    return randomChoice;
}

for (let i=0; i<= 5; i++){
    console.log(getComputerChoice())
}