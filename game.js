let btns = document.querySelectorAll(".choice-button");
let playerBox = document.getElementById("player-choice");
let compBox = document.getElementById("computer-choice");
let resultText = document.getElementById("result");
let scoreText = document.querySelector(".right");

let pScore = 0;
let cScore = 0;

let choiceList = ["rock", "paper", "scissors"];
let emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let playerPick = this.getAttribute("data-choice");
    let compPick = choiceList[Math.floor(Math.random() * 3)];

    playerBox.innerText = emojiMap[playerPick];
    compBox.innerText = emojiMap[compPick];

    if (playerPick == compPick) {
      resultText.innerText = "DRAW";
    } else if (
      (playerPick == "rock" && compPick == "scissors") ||
      (playerPick == "scissors" && compPick == "paper") ||
      (playerPick == "paper" && compPick == "rock")
    ) {
      resultText.innerText = "PLAYER WINS";
      pScore++;
    } else {
      resultText.innerText = "COMPUTER WINS";
      cScore++;
    }

    scoreText.innerText = "computer " + cScore + " " + pScore + " player";
  });
}
