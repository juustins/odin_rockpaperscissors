function getComputerChoice(){
    let choices = ["rock","paper","scissor"]

    return choices[Math.floor(Math.random()*choices.length)];
}



function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    let winner

    let rockSection = playerSelection === "rock" && (computerSelection === "paper" || computerSelection === "cisor")
    let paperSection = playerSelection === "paper" && computerSelection === "rock"
    let scissorSection = playerSelection === "cisor" && computerSelection === "paper"

    if (playerSelection === computerSelection){
        winner = "draw"
        console.log("In the draw")
    }
    else if (rockSection){
        winner = "player"
        console.log("--------")
        console.log("in the player rock section")
        console.log("--------")
    }
    else if (paperSection){
        winner = "player"
    }
    else if(scissorSection) {
        winner = "player"
    }
    else{
        winner = "computer"
    }
    return winner;
    
    
}

function winnerMsg(winner,playerSelection,computerSelection){
    let msg;
    if (winner === "player"){
        msg = `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if(winner === "computer"){
        msg = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else{
        msg = "Draw!"
    }


    return msg;
}

function gameWinner(playerScore,computerScore){
    let msg;
    if(playerScore > computerScore){
        msg = `Player won with score: ${playerScore} over ${computerScore}`
    }
    else if(computerScore > playerScore){
        msg = `Computer win with score: ${computerScore} over ${playerScore}`
    }

    return msg
}



function game(){

    let computerScore = 0;
    let playerScore = 0;
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection,computerSelection);

    if (winner === "player"){
        playerScore++;
    }
    else if(winner === "computer"){
        computerScore++;
    }
    console.log(winnerMsg(winner,playerSelection,computerSelection));

    console.log(gameWinner(playerScore,computerScore))

}

