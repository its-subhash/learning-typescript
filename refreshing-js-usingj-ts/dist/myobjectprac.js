"use strict";
const btnHead = document.getElementById("btn-head");
const btnTail = document.getElementById("btn-tail");
const btnReset = document.getElementById("btn-reset");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let flipElement = document.getElementById("flips");
let message = document.getElementById("message");
let scoreBoard = {
    computer: 4,
    player: 5,
    flipCount: 10,
};
const dbName = "coinFlipp";
const initializeDB = () => {
    let board = localStorage.getItem(dbName);
    if (board) {
        console.log("DataBase Detected...");
    }
    else if (!board) {
        localStorage.setItem(dbName, JSON.stringify(scoreBoard));
    }
    else {
        console.log("Nothing happend");
    }
};
initializeDB();
// getting data from DB
const getDB = () => {
    const stored = localStorage.getItem(dbName);
    if (stored != null) {
        try {
            const { computer, player, flipCount } = JSON.parse(stored);
            return [computer, player, flipCount];
        }
        catch (e) {
            console.log(`something went wrong ${e}`);
            return [-1, -1, -1];
        }
    }
    console.log("There is some error...please check");
    return [-1, -1, -1];
};
function showMessage(mess) {
    if (message != undefined) {
        try {
            message.innerText = mess;
        }
        catch (e) {
            console.log(`Error Occured: ${e}`);
        }
    }
}
function playGame(val) {
    let options = ["heads", "tails"];
    const flippedCoin = options[Math.round(Math.random())];
    if (val === flippedCoin) {
        showMessage(`Coin Flips to ${flippedCoin}, You Win!`);
    }
    else {
        showMessage(`Coin Flips to ${flippedCoin}, You Loose!`);
    }
}
if (btnHead != null) {
    btnHead.addEventListener('click', () => {
        playGame('heads');
    });
}
if (btnTail != null) {
    btnTail.addEventListener('click', () => playGame('tails'));
}
