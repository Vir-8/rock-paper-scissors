function getComputerChoice()
{   
    let choice;
    let pc = Math.floor((Math.random()*3) + 1);

    if(pc == 1)
    {
        return "rock";
    }
    else if(pc == 2)
    {
        return "paper";
    }
    else if(pc == 3)
    {
        return "scissors";
    }
    else
    {
        return "error";
    }
}