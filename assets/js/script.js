
/**
 * Docstrings
 * another row
 * another row
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked $(gameType)`);
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })
    
    runGame("addition");
})

function runGame (gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    //enter here amounts for credit

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer () {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Aw snapp! you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function homeScreen () {

}

function userBalance (operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator').textContent = "+"
}

//dont display this to user
function opponentBalance (operand2) {
    document.getElementById('operand2').textContent = operand2;
}

// add this to run game segment
function infuseBalanceRandom () {
    let num1 = Math.floor(Math.random() * 1000000000000) + 1;
    let num2 = Math.floor(Math.random() * 1000000000000) + 1;
}

function infuseBalanceCustom () {

}

// check if you have no more
function limitBalanceTracker () {

}

function checkReactions () {
    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [opernd1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert (`Unimplemented oprator ${operator}`);
        throw `Unimplemented oprator ${operator}. Aborting!`;
    }
}   

function liveReactions () {

}

function userReaction () {

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = "x"
}

function opponentReaction () {

}
function calculateRemainingBalance () {

}

function calculateInvestment () {

}

function calculateEarnings () {

}

function recordScore () {

}

function updateScoreWin () {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}


function updateScoreLoss () {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}