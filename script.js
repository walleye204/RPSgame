// a function for the player to select their choice
function playerChoice(){
    var selection = prompt("Choose your weapon");
//verifying that selection was a valid choice
    if (selection.toLowerCase() === "rock" || selection.toLowerCase() === "paper" || selection.toLowerCase() === "scissors"){
//returning this as a lower case value to eliminate confusion
        return selection.toLowerCase();
    }
//returns an invalid message if choice is not valid
        else{
            console.log('ya fucked up');
            return ("invalid choice");
        }

}
//defining scores outside of functions.
let computerScore = 0;
let playerScore = 0;
function playRound(computerSelection, playerSelection){
    function computerChoice(){
        // a list of possible choices
        var choices = ["rock", "paper", "scissors"];
        // select a random choice from the array
        var selection = choices[Math.floor(Math.random()* choices.length)];
        // returns selection
        return selection;
        }
        var computerSelection = computerChoice();
        var playerSelection = playerChoice();
    if (computerSelection === "rock"){
        if (playerSelection === "rock"){
            console.log("This is a tie");
        }
        else if (playerSelection === "scissors"){
            console.log("Rock beasts Scissors. Computer Wins!");
            computerScore ++;
        }
        else if (playerSelection === "paper"){
            console.log("Paper beats rock. Player Wins!");
            playerScore ++;
        }         
    }
    else if (computerSelection === "scissors"){
        if (playerSelection === "scissors"){
            console.log("This is a tie");
            }
            else if (playerSelection === "rock"){
                console.log("Rock beasts Scissors. Player Wins!");
                playerScore ++;
            }
            else if (playerSelection === "paper"){
                console.log("Scissors beats paper. Computer Wins!");
                computerScore ++;
        }         
    }
    else if (computerSelection === "paper"){
        if (playerSelection === "paper"){
            console.log("This is a tie");
            }
            else if (playerSelection === "rock"){
                console.log("Paper beats rock. Computer Wins!");
                computerScore ++;
            }
            else if (playerSelection === "scissors"){
                console.log("Scissors beats paper. Player Wins!");
                playerScore ++;
        }
    
    }
    console.log('player choice:' +playerSelection);
    console.log('computer choice:' + computerSelection);
    //console.log(playerScore - computerScore)
    //return playerScore - computerScore;

    
}
function game(){
    playRound();
    console.log('Player score:' + playerScore, 'Computer score:' + computerScore);
    playRound();
    console.log('Player score:' + playerScore, 'Computer score:' + computerScore);
    playRound();
    console.log('Player score:' + playerScore, 'Computer score:' + computerScore);
    playRound();
    console.log('Player score:' + playerScore, 'Computer score:' + computerScore);
    playRound();
    console.log('Player score:' + playerScore, 'Computer score:' + computerScore);
    // calculate who won the game or if it was a tie
    if (computerScore > playerScore){
        console.log("Computer wins the game");
        }
        else if(playerScore > computerScore){
            console.log("Player wins the game");
        }
        else if (playerScore === computerScore){
            console.log("It's a tie");
        }
}