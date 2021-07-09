

function game(){
    //starting scores for player and computer
    var computerScore = 0;
    var playerScore = 0;
    
    // a function for the player to select their choice
    function playerChoice(){
        var selection = prompt("Choose your weapon");
    //verifying that selection was a valid choice
        if (selection.toLowerCase() === "rock" || selection.toLowerCase() === "paper" || selection.toLowerCase() === "scissors"){
    //returning this as a lower case value to eliminate confusion
        console.log("Player Selection: " +selection.toLowerCase())
        return selection.toLowerCase();
    }
    //returns an invalid message if choice is not valid
        else{
            return ("invalid choice");
        }
    }
    //storing choices as selections to be used in playRound
    var computerSelection = computerChoice();
    var playerSelection = playerChoice();
    function playRound(computerSelection, playerSelection){
    // a function for the computer to select it's choice
    function computerChoice(){
    // a list of possible choices
        var choices = ["rock", "paper", "scissors"];
    // select a random choice from the array
        var selection = choices[Math.floor(Math.random()* choices.length)];
    // returns selection
    console.log("Computer Selection: " +selection)
    return selection;
    }
    // running through possible outcomes
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
    }
    playRound();
    console.log(playerScore)
    console.log(computerScore)
}
