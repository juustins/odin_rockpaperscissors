function getComputerChoice(){
    let choices = ["rock","paper","scissor"]

    return choices[Math.floor(Math.random()*choices.length)];
}



function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    let winner

    let rockSection = playerSelection === "rock" && (computerSelection === "paper" || computerSelection === "scissor")
    let paperSection = playerSelection === "paper" && computerSelection === "rock"
    let scissorSection = playerSelection === "cisor" && computerSelection === "paper"

    if (playerSelection === computerSelection){
        winner = "draw"
    }
    else if (rockSection){
        winner = "player"
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
    else{
        msg = "THE GAME IS A DRAW!"
    }

    return msg
}



function game(playerSelection){
    
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection,computerSelection);

    let winnerh1 = document.createElement('h1');

    const resultsDiv = document.querySelector('#results')
    resultsDiv.removeChild(resultsDiv.lastChild);
    resultsDiv.removeChild(resultsDiv.lastChild);


    

    let result = document.createElement('p')
    result.textContent = winnerMsg(winner,playerSelection,computerSelection)
    resultsDiv.appendChild(result);

    if (winner === "player"){
        ++playerScore;
    }
    else if(winner === "computer"){
        ++computerScore;
    }

    

    let score = document.createElement('p')
    score.textContent = `Player: ${playerScore} || Computer: ${computerScore}`

    resultsDiv.appendChild(score)

    if(computerScore > 4){
        winnerh1.textContent = "Computer is the winner!";
        winnerh1.style.color = 'red';
        resultsDiv.appendChild(winnerh1);
        
    }
    else if(playerScore > 4){
        winnerh1.textContent = "Player is the winner!";
        winnerh1.style.color = 'blue';
        resultsDiv.appendChild(winnerh1);
    
        
    }

}


const selectionButtons = document.querySelectorAll(".selection > button")

    let computerScore = 0;
    let playerScore = 0;

    selectionButtons.forEach((button) => {
        button.addEventListener('click',() => game(button.textContent))
    })



