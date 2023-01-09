let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
//Config overlay and backdrop
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const playerNameInputElement = document.getElementById("playername");

// Cancel Config Button
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
//Edit Buttons
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

//Start Game Button
const startNewGameBtnElement = document.getElementById("start-game-btn");
//Game over Elements
const gameOverElement = document.getElementById("game-over");
// Game Board
const gameArea = document.getElementById("active-game");
const turnIndicatorElement = document.getElementById("turn-indicator");

//Open and Close Config Events
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

//Player name submit event
formElement.addEventListener("submit", savePlayerConfig);

//start game event
startNewGameBtnElement.addEventListener("click", startNewGame);

//Game board
//const gameBoardElement = document.querySelectorAll("#game-board");
const gameBoardElement = document.getElementById("game-board");
//active player name span
const activePlayerNameElement = document.getElementById("active-player-name");

//Game board fields event listeners
gameBoardElement.addEventListener("click", selectGameField);
