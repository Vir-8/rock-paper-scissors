let playerPoints = 0;
let pcPoints = 0;

function playRound(playerSelection, computerSelection) 
{
    
    if (playerSelection === computerSelection)
    {
        console.log("Tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        console.log("PC wins, paper beats rock!");
        pcPoints++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        console.log("Player wins, rock beats scissors!");
        playerPoints++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        console.log("Player wins, paper beats rock!");
        playerPoints++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        console.log("PC wins, scissors cut paper!");
        pcPoints++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        console.log("PC wins, rock beat scissors!");
        pcPoints++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        console.log("Player wins, scissors cut paper!");
        playerPoints++;
    }
    else
    {
        console.log("error");
    }

}
  

// console.log(playRound(playerSelection, computerSelection));

function game()
{
    while (playerPoints !== 5 && pcPoints !== 5)
    {
        let playerSelection = prompt("Rock, paper scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        if (playerPoints === 5 || pcPoints === 5) {
            break;
        }
    }

    if(playerPoints === 5)
    {
        console.log("Player wins!! Score is " + playerPoints + "-" + pcPoints);
    }

    if(pcPoints === 5)
    {
        console.log("Player loses. Score is " + playerPoints + "-" + pcPoints);
    }
}


function getComputerChoice()
{   
    let computerSelection = Math.floor((Math.random()*3) + 1);

    if (computerSelection == 1)
    {
        return "rock";
    }
    else if (computerSelection == 2)
    {
        return "paper";
    }
    else if (computerSelection == 3)
    {
        return "scissors";
    }
    else
    {
        return "error";
    }
}






game();