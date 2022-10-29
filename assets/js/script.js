
let allParagraphs = document.getElementsByTagName('p');

let blueThings = document.getElementsByClassName('blue');

let specificHeading = document.getElementById('third-heading');



if condition{

    if condition2{

    } else if{

    }

} else {
    blah
}


document.write('<h1>Hello!</h1>');


let placeLifecoin = document.getElementById('insert-lifecoin-background');

placeLifecoin.innerHTML = "<div class="insert-lifecoin-image">
<img id="header-logo" src="./assets/media/images/lifecoin-coin.png" alt="Floating lifecoin on the landing game screen">
</div>"



let userRandomBalance = parseInt(Math.random)//math random + parseInt

var robotRandomBalance = // math random + parseInt




var userRandomBet = 


const robotRandomBet = //math random between 10 choices + parseInt numbers of your buttons

if (robotRandomBet === 0.1) {
    prawnRobotBet function
} else if (robotRandomBet === 1) {
    crabRobotBet function
}

//you can only choose amount only one 


if prawnUserBet.onclick {

    treasureVaultLive += 0.1
    userLiveBalance -= 0.1
    userLastBet = 0.1
    userTotalBets += 0.1
}

prawnRobotBet {

    treasureVaultLive += 0.1
    robotLiveBalance += 0.1
    robotLastBet = 0.1
}

function addTwo(num1, num2) {
    return num1 + num2;
  }
  let sum = addTwo(3, 5);
  console.log(sum);  // 8











if userBalance < 2 {
    Start function of game loss
}




window.onload - afteer everything is loaded
1.	In the HTML lifecycle, the document will always complete loading before the window, and you can use the onload event on both objects. To use this event, just set the onload property on the window to whatever JavaScript you would like to execute:

load- everything is loaded
BeforeUnloadEvent - before user leaves
unload when user confirms they want to leave

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


//java adjust volume and music playing
//document.getElementById("myAudio").volume = 0.2; 1 is highest



// remove attributes
function update() {
    let paragraph = document.getElementsByClassName('special')[0];
    paragraph.removeAttribute('class');




// createElement(), appendChild(), cloneNode() or remove().

const body = document.body;

const screenInsertLifecoin = getElementById('insert-lifecoin');

const insertLifecoinBackground = getElementsByClassName ('insert-lifecoin-background');

const insertButton = getElementsById ('insert-button')

function insertLifecoin () {

    SOUND FX
    insertButton.setAttribute('onclick', 'placementLifecoin();')
}

function placementLifecoin () {

    let insertLifecoinAction = document.createElement('div');
    insertLifecoinAction.classList.add('insert-lifecoin-image');
    insertLifecoinAction.innerHTML = `<img id="header-logo" src="./assets/media/images/lifecoin-coin.png" alt="Floating lifecoin on the landing game screen">`;
    insertLifecoinAction.appendChild(insertLifecoinBackground);
}

function inserLifecoinSound () {

    timer
    picture animation
}

function screenInsertLifecoinRemove () {

    screenInsertLifecoin.remove ();
}

function screenGameIntroCreate () {

    let anchorCoverMedia = document.getElementsById ('rules');
    let screenGameIntro = document.createElement('section');
    screenGameIntro.setAttribute("id","game-intro")
    screenGameIntro.innerHTML = `
      <video src="./assets/media/video/intro.mp4" alt="Logo with game introduction effects">
        </video>
    `;
    document.body.insertBefore(screenGameIntro, anchorCoverMedia);
}

function screenWelcome () {

    const newGameButton = getElementsById ('start-button')
    newGameButton.addEventListener('click', screenWelcome)
    SOUND FX
    newGameButton.setAttribute('onclick', 'screenGameLoadingOne();')

}


function screenGameLoadingOne {
    add to section id = "loading":
    <section id="x" onload="screenGameLoadingOne();"></section></section>


}


Balance and score updater
let userLiveBalance = document.getElementById('balance-total');
userLiveBalance.value = "previousBalance + betIncrease + '$'""


// INSERT COIN SCREEN


// GAME INTRO MEDIA SCREEN


// WELCOME SCREEN


// GAME LOADING SCREEN


// RUN NEW GAME SCREEN


// GAME LOADING SCREEN 2


// GAME RESULTS SCREEN 


// GAME LOADING SCREEN 3


// RUN NEXT GAME SCREEN


// GAME LOADING SCREEN 4 


// GAME RESULTS SCREEN 2 = SCREEN 1 + rename variables 

