
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const result=document.getElementById("result");
let array=["ROCK","PAPER","SCISSOR"];
function getComputer()
{
    
    let choice=array[Math.floor(Math.random()*3)];
    return choice;
}


function gameHelper(para)
{
    const computerchoice=array[getComputer()];
    if(computerchoice===para)
    {
        result.innerText="TIE";
    }
    else if(para==="ROCK" && computerchoice==="SCISSOR" || para==="PAPER" && computerchoice==="ROCK" || para==="SCISSOR" && computerchoice==="PAPER")
    {
        result.innerText="WON";
    }
    else{
        result.innerText="LOOSE";
    }
}

rock.onclick=()=>{
    gameHelper("ROCK");
}

paper.onclick=()=>{
    gameHelper("PAPER");
}

scissor.onclick=()=>{
    gameHelper("SCISSOR");
}
