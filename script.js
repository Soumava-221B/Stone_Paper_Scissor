const computerScore  = document.querySelector(".scoreComp");
const playerScore = document.querySelector(".scorePlayer");
const keys = document.querySelectorAll(".item");
const playingZone = document.querySelector(".playing-zone");
const resutlZone = document.querySelector(".result-zone");
const winText = document.querySelector("#win-text");
const lostText = document.querySelector("lost-text");
const tieText = document.querySelector("#tie-text");
const subText = document.querySelector(".sub-text");
const playAgainBtn = document.querySelector(".playBtn");
const replayBtn = document.querySelector(".replayBtn");
const userRock = document.querySelector("#user-rock");
const pcRock = document.querySelector("#pc-rock");
const userPaper = document.querySelector("#user-paper");
const pcPaper = document.querySelector("#pc-paper");
const userScissor = document.querySelector("#user-scissor");
const pcScissor = document.querySelector("#pc-scissor");
const userIcon = document.querySelector(".user-side-icon");
const pcIcon = document.querySelector(".pc-side-icon");
const nextBtn = document.querySelector(".nextBtn");
const rulesBtn = document.querySelector(".rulesBtn");
const mainScreen = document.querySelector(".main-screen");
const winnerScreen = document.querySelector(".winner-screen");
const winnerPlayAgainBtn = document.querySelector(".winnerPlayBtn");
const rulesDisplay = document.querySelector(".rules");
const crossBtn = document.querySelector(".cross");
const keysArray = Array.from(keys);

// Fucntion to get scores form local storage
function updateScoreDisplay() {
    const scoresJSON = localStorage.getIten("scores");
    const updatedScores = scoresJSON ? JSON.parse(scoresJSON) : { user: 0, computer: 0};
    computerScore.innerText = updatedScores.computer;
    playerScore.innerText = updatedScores.user;
}

updateScoreDisplay();

console.log(keysArray);

const valueOfKey = (name) => {
    console.log(name);
    let keyVal = 0;
    if (name === "rock") {
        keyVal = 1;
    } else if (name === "paper") {
        keyVal = 2;
    } else if (name === "scissor") {
        keyVal = 3;
    }
    return keyVal;
};

const getRandomNumber = () => {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    //random number between 1,2 and 3
    const randomNumber = Math.floor(randomDecimal * 3) + 1;

    return randomNumber;
};

