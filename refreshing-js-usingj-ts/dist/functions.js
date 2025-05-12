"use strict";
let a = 44;
const b = a < 44 ? "right" : "wrong";
// console.log(b)
function func1() {
    console.log("Radhe Radhe");
    console.log(5 + 7);
}
// func1();
//rock paper scissor game....
const rockBtn = document.getElementById("btn-rock");
const paperBtn = document.getElementById("btn-paper");
const scissorBtn = document.getElementById("btn-scissor");
const genButton = document.getElementsByClassName("btn");
let computerOptions = ["Rock", "Papper", "Scissor"];
function playGame() {
    let playerChoice;
    let computerChoice;
    for (let i = 0; i <= 1000; i++) {
        const randNum = Math.abs(Math.random() * 2);
        computerChoice = computerOptions[randNum];
    }
}
playGame();
let someVal;
// rockBtn.addEventListener("click", ()=>{
//     someVal = rockBtn?.innerText
// })
// // document.addEventListener("click", ()=>{
// //     someVal = paperBtn?.innerHTML
// // })
// // document.addEventListener("click", ()=>{
// //     someVal = scissorBtn?.innerHTML
// // })
// console.log(someVal)
