var Rock = document.getElementById("Rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor")
var Result = document.getElementById("Result")
function getComputerChoice(){
    let variable = Math.floor(Math.random()*3)+1
    if(variable==1){
        return "rock"
    }
    if(variable==2){
        return "paper"
    }
    if(variable==3){
        return "scissor"
    }
}
function whoWON(playerSelection,computerSelction){
    playerSelection=playerSelection.toLowerCase()
    if(playerSelection == computerSelction){
        Result.style.color="orange"
       return "EVEN"
    }
    if(playerSelection=="rock"){
        if(computerSelction=="paper"){
            Result.style.color="red"
           return "Computer won !"
        }
        else{
            Result.style.color="green"
            return "YOU WON DEARIE"
        }
    }
    if(playerSelection=="paper"){
        if(computerSelction=="rock"){
            Result.style.color="green"
            return "YOU WON HAHA  HERE IS A COOKIE <3"

        }
        else{
            Result.style.color="red"
            return "WELL Computer won !"
        }
    }
    if(playerSelection=="scissor"){
        if(computerSelction=="rock"){
            Result.style.color="red"
            return"COMPUTER WON OH LALA"
        }
        else{
            Result.style.color="green"
            return "YOU WON YEEEAAAAAAH"
        }
    }

    


}

var playerSelection=""

Rock.addEventListener('click', () => {
    let computerSelction = getComputerChoice()
    playerSelection="rock";
    Result.innerHTML=whoWON(playerSelection,computerSelction)    
  });

paper.addEventListener('click' , ()=>{
    playerSelection="paper"
    let computerSelction = getComputerChoice()
    Result.innerHTML=whoWON(playerSelection,computerSelction)
});

scissor.addEventListener('click' , ()=>{
    playerSelection="scissor"
    let computerSelction = getComputerChoice()
    Result.innerHTML=whoWON(playerSelection,computerSelction)
});



   
