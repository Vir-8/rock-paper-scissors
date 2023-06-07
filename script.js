let playerPoints = 0;
let pcPoints = 0;
let computerSelection;


const rock = document.querySelector('#one');
const paper = document.querySelector('#two');
const scissors = document.querySelector('#three');

const res = document.querySelector('.result');
const scor = document.querySelector('.score');

const restart = document.querySelector('.restart');

const reButton = document.createElement('button');
reButton.textContent = "Wanna play again?"
reButton.setAttribute('class', 'restart');

// rock.onclick = playRound('rock', computerSelection); <= doesn't work expectedly, executes on reload and does nothing on clicking

rock.onclick = function() {
    playRound('rock', computerSelection);
};

paper.onclick = function() {
    playRound('paper', computerSelection);
};

scissors.onclick = function() {
    playRound('scissors', computerSelection);
};




function playRound(playerSelection, computerSelection) 
{
    computerSelection = getComputerChoice();

    
    if (playerSelection === computerSelection)
    {
        res.textContent = "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        res.textContent = "PC wins, paper beats rock!";
        pcPoints++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        res.textContent = "Player wins, rock beats scissors!";
        playerPoints++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        res.textContent = "Player wins, paper beats rock!";
        playerPoints++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        res.textContent = "PC wins, scissors cut paper!";
        pcPoints++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        res.textContent = "PC wins, rock beat scissors!";
        pcPoints++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        res.textContent = "Player wins, scissors cut paper!";
        playerPoints++;
    }
    else
    {
        console.log("error");
    }

    scor.textContent = playerPoints + " - " + pcPoints;


    if (playerPoints === 5) 
    {
        res.textContent = "Player wins!";
        disableButtons();
        restartButton();
    } 
    else if (pcPoints === 5) 
    {
        res.textContent = "Computer wins!";
        disableButtons();
        restartButton();
    }

}
  
function disableButtons()
{
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function restartButton()
{
    console.log("Restart game?");
    restart.append(reButton);
}

reButton.onclick = function() {
    playerPoints = pcPoints = 0;
    console.log("restarting");
    scor.textContent = playerPoints + " - " + pcPoints;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    reButton.remove();
};


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