const UserRock = document.getElementById("btn-rock");
const UserPaper = document.getElementById("btn-paper");
const UserScissor = document.getElementById("btn-scissor");
const userScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const message = document.getElementById("message-line")
const rounds = document.getElementById("rounds")
const reset = document.getElementById("btn-reset")


const moves:string[]= ["Rock", "Paper", "Scissor" ]
let computerMove:string 
let userMove:string
let userFinalScore:number = 0
let computerFinalScore:number = 0
let gamerounds :number = 0


const getComputerVal =()=>{
    computerMove = moves[Math.round(Math.random()*2)];
}

const compareMoveRock =()=>{
    gamerounds ++
    rounds?.innerText = gamerounds
    if (computerMove === "Rock"){
        message?.innerText= "Its a Tie..."
    }else if (computerMove === "Paper"){
        computerFinalScore ++
        message?.innerText= "Computer Chose Paper...hence computer wins"
    }else if (computerMove === "Scissor"){
        userFinalScore ++
        message?.innerText= "Computer Chose Scissor...hence you win."
    }
    computerScore?.innerText = `${computerFinalScore}`
    userScore?.innerText = `${userFinalScore}`
    console.log(typeof computerFinalScore, computerFinalScore)
    console.log(typeof userFinalScore, userFinalScore)
}
const compareMovePaper =()=>{
       gamerounds ++
       rounds?.innerText = gamerounds
    if (computerMove === "Paper"){
        message?.innerText= "Its a Tie..."
    }else if (computerMove === "Scissor"){
        computerFinalScore ++
        message?.innerText ="Computer Chose Scissor...hence computer wins"
    }else if (computerMove === "Rock"){
        userFinalScore ++
        message?.innerText= "Computer Chose Rock...hence you win."
    }
    computerScore?.innerText = `${computerFinalScore}`
    userScore?.innerText = `${userFinalScore}`
}
const compareMoveScissor =()=>{
       gamerounds ++
       rounds?.innerText = gamerounds
    if (computerMove === "Scissor"){
        message?.innerText= "Its a Tie..."
    }else if (computerMove === "Rock"){
        computerFinalScore ++
        message?.innerText= "Computer Chose Rock...hence computer wins"
    }else if (computerMove === "Paper"){
        userFinalScore ++
        message?.innerText= "Computer Chose Paper...hence you win."
    }
    computerScore?.innerText = `${computerFinalScore}`
    userScore?.innerText = `${userFinalScore}`
}

reset?.addEventListener("click", ()=>{
    userFinalScore= 0
    computerFinalScore= 0
    gamerounds = 0
    computerScore?.innerText = `${computerFinalScore}`
    userScore?.innerText = `${userFinalScore}`
    rounds?.innerText = gamerounds
})

UserRock?.addEventListener("click", getComputerVal)
UserPaper?.addEventListener("click", getComputerVal)
UserScissor?.addEventListener("click", getComputerVal)


UserRock?.addEventListener('click', compareMoveRock)
UserPaper?.addEventListener("click", compareMovePaper)
UserScissor?.addEventListener("click", compareMoveScissor)