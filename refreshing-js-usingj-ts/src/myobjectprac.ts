const btnHead = document.getElementById("btn-head");
const btnTail = document.getElementById("btn-tail");
const btnReset = document.getElementById("btn-reset");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let flips = document.getElementById("flips");
let message = document.getElementById("message");

//initialization

type board = {
  computer: number;
  player: number;
  flips: number;
};

let scoreBoard: board = {
  computer: 0,
  player: 0,
  flips: 0,
};

let board;

const getData = () => {
  board = localStorage.getItem("coin-flipi");
  if (board) {
    scoreBoard = JSON.parse(board);
    console.log("DataBase Detected...");
  } else if (!board) {
    localStorage.setItem("coin-flipi", JSON.stringify(scoreBoard));
    console.log("DataBase Created...");
  } else {
    console.log("Nothing happend");
  }
};