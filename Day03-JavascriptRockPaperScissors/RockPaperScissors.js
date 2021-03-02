var buttons = document.querySelectorAll(".playerMove");

buttons.forEach((button) => {
    button.addEventListener("click", startRound);
});

var playerHand = document.getElementById("playerHand");
var computerHand = document.getElementById("computerHand");
var playerScoreDiv = document.getElementById("playerScore");
var computerScoreDiv = document.getElementById("computerScore");
var playerScore = 0;
var computerScore = 0;

var hands = ["Rock", "Paper", "Scissors"];

function startRound() {
    computerChoice = Math.floor(Math.random() * 3);

    playerHand.textContent = `Player: ${this.textContent}`;
    computerHand.textContent = `Computer: ${hands[computerChoice]}`;

    if (this.textContent === "Rock") {
        if (computerHand.textContent === "Computer: Scissors") {
            playerScore++;
        } else if (computerHand.textContent === "Computer: Paper") {
            computerScore++;
        }
    } else if (this.textContent === "Paper") {
        if (computerHand.textContent === "Computer: Rock") {
            playerScore++;
        } else if (computerHand.textContent === "Computer: Scissors") {
            computerScore++;
        }
    } else {
        if (computerHand.textContent === "Computer: Paper") {
            playerScore++;
        } else if (computerHand.textContent === "Computer: Rock") {
            computerScore++;
        }
    }

    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}
