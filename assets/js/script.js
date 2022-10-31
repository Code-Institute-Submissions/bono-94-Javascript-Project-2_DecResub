const screenInsertLifecoin = document.getElementById('insert-lifecoin');
const placeLifecoinBackground = document.getElementsByClassName('insert-lifecoin-background');
const insertButton = document.getElementById('insert-button');
const placeLifecoin = document.getElementsByClassName('insert-lifecoin-image');
const gameIntroCreate = document.getElementById('game-intro');
const rulesBox = document.getElementById('rules');
const screenWelcome = document.getElementById('home-screen-game');
const screenGameLoadingOne = document.getElementById('game-outro-one');
const screenNewGame = document.getElementById('game');
const screenGameLoadingTwo = document.getElementById('game-outro-two');
const screenWinGameResults = document.getElementById('winning-screen');
const screenLoseGameResults = document.getElementById('losing-screen');
const screenFoldGameResults = document.getElementById('folded-screen');
const screenGameLoadingThree = document.getElementById('game-outro-three');
const screenNextGame = document.getElementById('new-game');
const screenGameLoadingFour = document.getElementById('game-outro-four');

function insertLifecoinAnimation (screenInsertLifecoin) {

    placeLifecoinBackground.innerHTML =`<div class="insert-lifecoin-image">
        <img id="header-logo" src="./assets/media/images/lifecoin-coin.png" alt="Floating lifecoin on the landing game screen">
    </div>"
    `;
    document.getElementsByClassName("insert-lifecoin-background").appendChild(placeLifecoin);
    document.getElementById("insert-lifecoin").appendChild(placeLifecoinBackground)
    screenInsertLifecoin.remove ();  
    screenGameIntroCreate ();
}

function screenGameIntroCreate () {

    document.body.innerHTML = `
    <section id="game-intro">
        <video src="./assets/media/video/intro.mp4" id="intro-video" alt="Logo with game introduction effects"></video>
    </section>
    `;
    document.getElementById("game-intro").insertBefore(rulesBox);
    gameIntroTransfer();
}
/*
// GAME INTRO MEDIA SCREEN

function gameIntroTransfer {

    document.getElementById("intro-video").addEventListener("ended", welcomeScreenCreate);
}

function welcomeScreenCreate () {

    document.getElementById("game-intro").remove ();  
    document.getElementsByTagName('body').innerHTML = `
    <section id="home-screen-game">
        <div id="home-screen-title">
            <h2>
                Welcome to the Bigger Fish game!
            </h2>
        </div>
        <div id="avatars">
            <div id="sharky">
                <img id="sharky-logo" src="./assets/media/images/sharky.png" alt="Sharky, the main game character">
            </div>
            <div id="robot">
                <img id="robot-logo" src="./assets/media/images/robot-icon.png" alt="Robot, the main game opponent">
            </div>
        </div>
        <div id="home-screen-tag">
            <h2>
                "There is always a bigger fish."
            </h2>
        </div>
        <div id="start-button">
            <button class="bttn-zero" id="start">
                <i class="fa-regular fa-circle-play"></i>
                START GAME
            </button>
        </div>
        <div id="partners">
            <div id="partners-text">
                <h3>
                    Game by:
                </h3>
            </div>
            <a href="https://www.lifecoin.earth" target="_blank" rel="noopener">
                <img id="lifecoin-logo" src="./assets/media/images/coin-logo-2d-slim.png" alt="Lifecoin logo representing development and ownership organization">
            </a>
        </div>
    </section>
    `;
    document.body.insertBefore(screenGameIntroCreate, rulesBox);
    welcomeScreenTransfer();
}

// WELCOME SCREEN


function welcomeScreenTransfer () {
    document.getElementById("intro-video").addEventListener("ended", welcomeScreenCreate);
}
- listens for action on start game button 
        add sound effect for start game button
        to create new html element for loading screen
        -replace it with game loading screen

function screenWelcome () {

    const newGameButton = getElementsById ('start-button')
    newGameButton.addEventListener('click', screenWelcome)
    SOUND FX
    newGameButton.setAttribute('onclick', 'screenGameLoadingOne();')

}


        document.addEventListener("DOMContentLoaded", function() {

            let insertButton = document.getElementsById("insert-button");
            for (let button of insert-button) {
                button.addEventListener("click", function() {
                    if (this.getAttribute("data-type") === "new-game") {
                        runNewGame();
                    } else {
                        runNextGame();
                    }
                })
            }
            
            document.getElementById("answer-box").addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    createIntroScreen();
                }
            })
            
        })

// GAME LOADING SCREEN

- listens for onend task
        creates new element for running the game while replacing the old one
        sends user to run new game screen

        function screenGameLoadingOne {
            add to section id = "loading":
            <section id="x" onload="screenGameLoadingOne();"></section></section>
        }
        
        
// RUN NEW GAME SCREEN

newGame
    background music
        play background music until game won, loss or fold next Screen
        play background music for 14 minutes then stop and replay until gameEnd which is function taking you to game results screen
    gameSetup
    - Records
        - since coming to newGame function, 
            welcome screen makes sure to reset both records to 0 while giving them value
    - Balances 
        - since coming to newGame function (fresh game)
            welcome screen randomize balances
                Generate user amount publicly (minimum 50, max 1bn)
                Generate robot amount privately (minimum and equal 50, max 1bn)
                alert congratulations, your lifecoin yielded ____ balance. It is your turn to start the first bet.
    Game battle
        - if stake with any of buttons 
            exceeding balance errors:
                only buttons with value less than balance work 
                    alert exceeded balance, please start a new game or select a lower amount

            amount goes processing and calculating to:
                balance reduce
                my bets increase
                vault increase
                Last bets user change to value of button pressed
                    previous button trackerr
                    previous button reporter
                    previous button editor

            robot reacts
                last bets robot to add his next one after yours is noted
                    try to time it with a short pause of few seconds with picture of computer calculating and audio of computer
                    generates robot random selection from constant values that is less than robot balance

                    updating vault with his last bet too
                    alert robot has invested X amount. Your turn again.

        continue runGame loop until desired parameters:

            Game won = 
                automatic = robot balance is under 2$
                    throw alert that robot surrenders. It does not have enough balance to continue the game. You won. Congratulations!
                    after confirming ok, your current balance + treasure vault + score go post-processing to winning screen
                    takes user to game winning screen + game loading

            Game loss =
                automatic = user balance is under 2$
                    throw alert unfortunately you do not have enough balance to continue the game. You lost. Goodluck next time@!
                    after confirming ok, your current balance + treasure vault + score go post-processing to winning screen
                    takes user to game losing screen + game loading

            Game fold =
                - fold button = end battle

throw alert unfortunately you decided to escape this game. Not all ships have sinked yet, try again! 
after confirming ok, your current balance + Vault + score go post-processing to game folded screen
takes user to game fold screen + game loading


let userRandomBalance = "parseInt(Math.random)"; //math random + parseInt

var robotRandomBalance = // math random + parseInt




var userCustomBet = 


const robotRandomBet = //math random between 10 choices + parseInt numbers of your buttons

if (robotRandomBet === 0.1) {
    prawnRobotBet function
} else if (robotRandomBet === 1) {
    crabRobotBet function
}




const prawnUserBet = document.getElementById("bttn-one")
for (let button of prawnUserBet) {
    button.addEventListener("click", function()) {
        let userCustomBet = this.getAttribute(data-choice);
        userLiveBalanceUpdater
    }
}

let robotRandomBalance = Math.floor(math.random(<100000000))

let robotRandomBet = Math.floor(math.random(0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000));
    if number !== 0.1
        math.floor(math.random)
    else number !== 1
    
    else number !==10


while (robotLiveBalance < 50) {
    robotRandomBet = Math.floor(math.random(0,1 ,1, 10))
}

userLiveBalance (infinite number or looop) = new userLiveBalance



userCustomBet firstBet = new userCustomBet();
userCustomBet secondBet = new userCustomBet();


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


Balance and score updater
let userLiveBalance = document.getElementById('balance-total');
userLiveBalance.value 

let userLiveBalanceUpdater = `$(userLastBet) $`;

let userLastBetUpdater = `$(userCustomBet) $`;

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

// remove attributes
function update() {
    let paragraph = document.getElementsByClassName('special')[0];
    paragraph.removeAttribute('class');


// GAME LOADING SCREEN 2
- listens for onend task
        creates new element for running the game while replacing the old one
        sends user to run game results screen appropriate to where it came from

// GAME RESULTS SCREEN 

- winning screen
        add celebrating sound effect
        add animation of image
            treasure chest
        add text: YOU WON!
        how much you won, old and new balance + vault = newBalance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 win
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        Next game button (keeps the balance)
            takes you to nextGame function
       
    - losing screen
        add losing sound effect
        add animation of image
            safe closed
            treasure chest
            loss
        add text: GAME OVER!
        how much you lost, old and new balance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 loss
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        New game button (fresh balance)
            takes to insert coin function which is new function that automatically loops without code by creating html that is already in place on index page
       
    - fold screen
        add losing sound effect of a chicken
        add animation of image
               how much you lost, old and new balance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 loss
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        New game button (fresh balance)
            takes to insert coin function which is new function that automatically loops without code by creating html that is already in place on index page
        Next game button (keeps the balance)
            takes you to nextGame function 


            document.addEventListener("DOMContentLoaded", function() {
                let buttons = document.getElementsByTagName("button");
            
                for (let button of buttons) {
                    button.addEventListener("click", function() {
                        if (this.getAttribute("data-type") === "new-game") {
                            runNewGame();
                        } else {
                            runNextGame();
                        }
                    })
                }
                
                document.getElementById("answer-box").addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        createIntroScreen();
                    }
                })
                
            })
            

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

// GAME LOADING SCREEN 3
- listens for onend task
creates new element while replacing the old one
sends user to run new game or next game depending on choice

// RUN NEXT GAME SCREEN
nextGame
        play background music until game won, loss or fold next Screen
    gameSetup
    - Records
        - since coming to nextGame (won or strategically fold)
                transfer over previous record with increase or decrease
                Robot record is reverse user record
    - Balances 
        - since coming from nextGame 
                Transfer over user's balance
                Robot balance is random again and undisclosed
                    Reminder: "Generate robot amount privately (minimum and equal and 4, max 1bn)"
                alert congratulations, your balance ___ is transferred to your balance. It is your starting turn.  
    Game battle
        - if stake with any of buttons 
            rules
                exceeding balance errors
                    only buttons with value less than balance work 
                        alert exceeded balance, please start a new game or enter lower amount

            amount goes processing and calculating to:
                balance reduce
                my bets increase
                vault increase
                Last bets user change to value of button pressed
                    previous button trackerr
                    previous button reporter
                    previous button editor

            robot reacts
                last bets robot to add his next one after yours is noted
                    try to time it with a short pause of few seconds
                    generates robot random selection from constant values that is less than robot balance

                    updating vault with his last bet too
                    alert robot has invested X amount. Your turn again.

        continue runGame loop until desired parameters:

            Game won = 
                automatic = robot balance is under 5$
                    throw alert that robot does not have enough balance to continue the game. You won.
                    after confirming ok, your balance and score go post-processing to winning screen
                    takes user to game winning screen + game loading

            Game loss =
                automatic = user balance is under 5$
                    throw alert unfortunately you dont have enough balance to continue the game. You lost
                    after confirming ok, your balance and score go post-processing to losing screen
                    takes user to game losing screen + game loading

            Game fold =
                - fold button = end battle
                    throw alert unfortunately you decided to escape the game.
                    after confirming ok, 
                    takes user to game folded screen + game loading

// GAME LOADING SCREEN 4 
- listens for onend task
creates new element for running the game while replacing the old one
sends user to run game results screen appropriate to where it came from in the last game


// GAME RESULTS SCREEN 2 = SCREEN 1 + rename variables 

- winning screen
        add celebrating sound effect
        add animation of image
            treasure chest
        add text: YOU WON!
        how much you won, old and new balance + vault = newBalance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 win
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        Next game button (keeps the balance)
            takes you to nextGame function
       
    - losing screen
        add losing sound effect
        add animation of image
            safe closed
            treasure chest
            loss
        add text: GAME OVER!
        how much you lost, old and new balance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 loss
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        New game button (fresh balance)
            takes to insert coin function which is new function that automatically loops without code by creating html that is already in place on index page
       
    - fold screen
        add losing sound effect of a chicken
        add animation of image
               how much you lost, old and new balance
            values listener & value updater 
            balance score tracker
            balance score reporter
            balance score editor
            balance transporter
        update the score to +1 loss
            values listener & value updater 
            win-loss score tracker
            win-loss score reporter
            win-loss score editor
            win-loss transporter
        New game button (fresh balance)
            takes to insert coin function which is new function that automatically loops without code by creating html that is already in place on index page
        Next game button (keeps the balance)
            takes you to nextGame function



*/
