"use strict";
const btnHead = document.getElementById("btn-head");
const btnTail = document.getElementById("btn-tail");
const btnReset = document.getElementById("btn-reset");
const toggleDark = document.getElementById("toggle-dark");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let flipElement = document.getElementById("flips");
let message = document.getElementById("message");
let scoreBoard = {
    computer: 0,
    player: 0,
    flipCount: 0,
};
const dbName = "coinFlips";
// getting data from DB
const getDB = () => {
    const stored = localStorage.getItem(dbName);
    if (stored != null) {
        try {
            const { computer, player, flipCount } = JSON.parse(stored);
            scoreBoard.computer = computer;
            scoreBoard.player = player;
            scoreBoard.flipCount = flipCount;
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
//Searching for Data base.
const initializeDB = () => {
    let board = localStorage.getItem(dbName);
    if (board) {
        console.log("DataBase Detected...");
        getDB(); //if database found, set scoreboard to existing data.
        showScore();
    }
    else if (!board) {
        localStorage.setItem(dbName, JSON.stringify(scoreBoard));
    }
    else {
        console.log("Nothing happend");
    }
};
initializeDB();
//Updating DB...
const updateDB = () => {
    localStorage.setItem(dbName, JSON.stringify(scoreBoard));
};
// Message showing
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
function showScore() {
    if (playerScore != undefined &&
        computerScore != undefined &&
        flipElement != undefined) {
        playerScore.innerText = `${scoreBoard.player}`;
        computerScore.innerText = `${scoreBoard.computer}`;
        flipElement.innerText = `${scoreBoard.flipCount}`;
    }
}
//Game logic...
function playGame(val) {
    let options = ["heads", "tails"];
    const flippedCoin = options[Math.round(Math.random())];
    if (val === flippedCoin) {
        scoreBoard.player++;
        scoreBoard.flipCount++;
        showScore();
        showMessage(`Coin Flips to ${flippedCoin}, You Win!`);
    }
    else {
        scoreBoard.computer++;
        scoreBoard.flipCount++;
        showScore();
        showMessage(`Coin Flips to ${flippedCoin}, You Loose!`);
    }
    updateDB();
}
// Button handeling...
if (btnHead != null) {
    btnHead.addEventListener("click", () => {
        playGame("heads");
    });
}
if (btnTail != null) {
    btnTail.addEventListener("click", () => {
        playGame("tails");
    });
}
if (btnReset != null) {
    btnReset.addEventListener("click", () => {
        scoreBoard.computer = 0;
        scoreBoard.player = 0;
        scoreBoard.flipCount = 0;
        showScore();
        updateDB();
        showMessage("You Ready?");
    });
}
if (toggleDark != null) {
    toggleDark.onclick = () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleDark.textContent = "☀️";
        }
        else {
            toggleDark.textContent = "🌙";
        }
    };
}
