const screenInsertLifecoin = document.getElementById('insert-lifecoin');
const placeLifecoinBackground = document.getElementById('insert-lifecoin-background');
const insertButton = document.getElementById('insert-button');
const placeLifecoin = document.getElementById('insert-lifecoin-image');
const placeLifecoinImage = document.getElementById('insert-lifecoin-image-animation');

const gameIntroCreate = document.getElementById('game-intro');
const rulesBox = document.getElementById('rules');

const screenWelcome = document.getElementById('home-screen-game');

const screenGameLoadingOne = document.getElementById('game-outro-one');

const screenNewGame = document.getElementById('game');
const userWins = document.getElementById('past-score-counter-hw');
const userLoss = document.getElementById('past-score-counter-hl');
const robotWins = document.getElementById('past-score-counter-rw');
const robotLoss = document.getElementById('past-score-counter-rl');

const screenGameLoadingTwo = document.getElementById('game-outro-two');
const screenWinGameResults = document.getElementById('winning-screen');
const screenLoseGameResults = document.getElementById('losing-screen');
const screenFoldGameResults = document.getElementById('folded-screen');
const screenGameLoadingThree = document.getElementById('game-outro-three');
const screenNextGame = document.getElementById('new-game');
const screenGameLoadingFour = document.getElementById('game-outro-four');

var audioInsert = document.getElementById("audio-insert");
var audioRocks = document.getElementById("audio-insert-rocks");
var audioWelcome = document.getElementById("audio-welcome");
var audioNewGame = document.getElementById("audio-select");
var audioError = document.getElementById("audio-error")
var audioBetSplash = document.getElementById("audio-button-splash")

var videoIntro = document.getElementById("intro-video");

var userRandomBalance = Math.floor(Math.random() * 21000000) + 2;
var robotRandomBalance = Math.floor(Math.random() * 21000000) + 2;
var userTotalBets = 0;
var userLastBet = 0;
var vaultReward = 0;
var robotLastBet = 0;
/*
const prawnChoice = 0.1;
const crabChoice = 1;
const turtleChoice = 10;
const octopusChoice = 100;
const squidChoice = 500;
const lobsterChoice = 1000;
const tunaChoice = 10000;
const dolphinChoice = 100000;
const whaleChoice = 1000000;
const dragonChoice = 10000000;
*/
function insertLifecoinAnimation () {
    
    audioInsert.volume = 0.5;
    audioInsert.play();
    placeLifecoinBackground.innerHTML =`
    <div id="insert-lifecoin-image">
        <img id="insert-lifecoin-image-animation" src="./assets/media/images/lifecoin-coin.png" alt="Floating lifecoin on the landing game screen">
    </div>
    `;
    audioRocks.volume = 0.5;
    audioRocks.play();
}  

function gameIntroTransfer () {
    
    screenInsertLifecoin.remove (); 
    screenGameIntroCreate ();
}

function screenGameIntroCreate () {
 
    document.body.innerHTML =`
    <section id="game-intro">
        <video src="./assets/media/video/intro.mp4" id="intro-video" alt="Logo with game introduction effects" autoplay onended="welcomeScreenTransfer()"></video>
    </section>
    <script src="https://kit.fontawesome.com/00c35bfbd1.js" crossorigin="anonymous"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    `;
    document.getElementById("intro-video").volume = 0.1; 
}

function welcomeScreenTransfer () {
    
    document.getElementById("game-intro").remove (); 
    welcomeScreenCreate ();
}

function welcomeScreenCreate () {

    document.body.innerHTML = `
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
            <button class="bttn-zero" id="start" onclick="gameLoadingOneTransfer()">
                <i class="fa-regular fa-circle-play"></i>
                START GAME
            </button>
        </div>
        <audio id="audio-newgame" onended="screenGameLoadingCreate()">
            <source src="./assets/media/audio/start.mp3" type="audio/mpeg">
        </audio>
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
        <audio id="audio-welcome" autoplay loop>
            <source src="./assets/media/audio/welcome-music.mp3" type="audio/mpeg">
        </audio>
    </section>
    <script src="https://kit.fontawesome.com/00c35bfbd1.js" crossorigin="anonymous"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    `;
    document.getElementById("audio-welcome").volume = 0.2;
}

function gameLoadingOneTransfer () {
    
    document.getElementById("audio-newgame").volume = 0.4;
    document.getElementById("audio-newgame").play();
}

function screenGameLoadingCreate () {

    document.getElementById("home-screen-game").remove ();
    document.body.innerHTML = `
    <section id="game-outro-one">
        <video id="video-loading" src="./assets/media/video/loading.mp4" alt="Loading screen logo with heavy storms behind" autoplay onended="newGameScreenTransfer()"></video>
    </section>
    <script src="https://kit.fontawesome.com/00c35bfbd1.js" crossorigin="anonymous"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    `;
    document.getElementById("video-loading").volume = 0.1; 
}

function newGameScreenTransfer () {
    document.getElementById("game-outro-one").remove (); 
    screenNewGameCreate ();
}

function screenNewGameCreate () {

    document.body.innerHTML = `
    <section id="game">
        <div class="game-area">
            <div class="game-tracking">
                <div id="user-profile">
                    <div id="user-image">
                        <i class="fa-solid fa-head-side-virus"></i>
                    </div>
                    <div id="user-image-title">
                        Human
                    </div>
                    <div class="past-score-area" id="past-score-box-h">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-hw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-hl">
                                0
                            </span>
                        </p>
                    </div>
                </div>
                <div id="pc-profile">
                    <div id="pc-image">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div id="pc-image-title">
                        Robot
                    </div>
                    <div class="past-score-area" id="past-score-box-r">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-rw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-rl">
                                0
                            </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div class="game-board">
                <div id="balance-tracker">
                    <div id="virtual-balance">
                        <p class="virtual-balance">
                            <i class="fa-solid fa-coins"></i>
                            My Balance:
                        </p>
                        <p id="balance-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="total-bet">
                        <p class="total-bet">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            My Bets:
                        </p>
                        <p id="bet-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-user">
                        <p class="last-bet-user">
                            <i class="fa-solid fa-user"></i>
                            Last Bet:
                        </p>
                        <p id="bet-user-total">
                            0$
                        </p>
                    </div>
                </div>
                <div id="last-bets">
                    <div id="treasure-value">
                        <p class="treasure-value">
                            <i class="fa-solid fa-vault"></i>
                            Vault Reward:
                        </p>
                        <p id="treasure-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-robot">
                        <p class="last-bet-robot">
                            <i class="fa-solid fa-laptop-code"></i>
                            Last Bet:
                        </p>
                        <p id="bet-robot-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="robot-balance">
                        <p class="robot-balance">
                            <i class="fa-solid fa-coins"></i>
                            AI Balance:
                        </p>
                        <p id="robot-balance-total">
                            [UNDISCLOSED]
                        </p>
                    </div>
                </div>
            </div>
            <div class="contols-area-right">
                <button class="bttn-second" onclick="userChoicePrawnValidator()" id="bttn-one" data-choice="0">
                    Prawn ($0.1)
                </button>
                <button class="bttn-second" onclick="userChoiceCrabValidator()" id="bttn-two" data-choice="1">
                    Crab ($1)
                </button>
                <button class="bttn-second" onclick="userChoiceTurtleValidator()" id="bttn-three" data-choice="2">
                    Turtle ($10)
                </button>
                <button class="bttn-second" onclick="userChoiceOctopusValidator()" id="bttn-four" data-choice="3">
                    Octopus ($100) 
                </button>
                <button class="bttn-second" onclick="userChoiceSquidValidator()" id="bttn-five" data-choice="4">
                    Squid ($500)
                </button>
                <button class="bttn-second" onclick="userChoiceLobsterValidator()" id="bttn-six" data-choice="5">
                    Lobster ($1k)
                </button>
                <button class="bttn-second" onclick="userChoiceTunaValidator()" id="bttn-seven" data-choice="6">
                    Tuna ($10k)
                </button>
                <button class="bttn-second" onclick="userChoiceDolphinValidator()" id="bttn-eight" data-choice="7">
                    Dolphin ($100k)
                </button>
                <button class="bttn-second" onclick="userChoiceWhaleValidator()" id="bttn-nine" data-choice="8">
                    Whale ($1M)
                </button>
                <button class="bttn-second" onclick="userChoiceDragonValidator()" id="bttn-ten" data-choice="9">
                    Dragon ($10M)
                </button>
            </div>           
            <div class="controls-area-bottom">
                <button class="bttn-first" id="fold">
                    <i class="fa-solid fa-sack-xmark"></i>
                    FOLD
                </button>
            </div>
        </div>
        <audio id="audio-game-background" autoplay loop>
            <source src="./assets/media/audio/background-ocean.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-error">
            <source src="./assets/media/audio/error.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-button-splash">
            <source src="./assets/media/audio/splash-button.mp3" type="audio/mpeg">
        </audio>
    </section>
    <script src="https://kit.fontawesome.com/00c35bfbd1.js" crossorigin="anonymous"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    `;
    document.getElementById("audio-game-background").volume = 0.7;
    newGameSetupScores();
}

function newGameSetupScores () {

    document.getElementById("past-score-counter-hw").innerHTML = "0";
    document.getElementById("past-score-counter-hl").innerHTML = "0";
    document.getElementById("past-score-counter-rw").innerHTML = "0";
    document.getElementById("past-score-counter-rl").innerHTML = "0"; 
    newGameSetupBalances(); 
}

function newGameSetupBalances () {

    let userBalanceDisplayed = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = userRandomBalance;
    alert ("Congratulations! Your lifecoin has yielded a new game balance.");
}

function userChoicePrawnValidator () {
    if (0.1 < userRandomBalance) {
        userChoicePrawnPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.7;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoicePrawnPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.7;
    userRandomBalance -= 0.1;
    userTotalBets += 0.1;
    userLastBet = 0.1;
    vaultReward += 0.1;
    choicesUpdaters();
}

function choicesUpdaters () {

    let userTotalBetseDisplayed = document.getElementById('bet-total');
    document.getElementById('bet-total').innerHTML = userTotalBets;
    let userLastBetDisplayed = document.getElementById('bet-user-total');
    document.getElementById('bet-user-total').innerHTML = parseInt(userLastBet);
    let vaultRewardDisplayed = document.getElementById('treasure-total');
    document.getElementById('treasure-total').innerHTML = vaultReward;
    let robotLastBetDisplayed = document.getElementById('bet-robot-total');
    document.getElementById('bet-robot-total').innerHTML = robotLastBet;
}
/*
function userChoiceCrabValidator () {
    
}

function userChoiceTurtleValidator () {
    
}

function userChoiceOctopusValidator () {
    
}

function userChoiceSquidValidator () {
    
}

function userChoiceLobsterValidator () {
    
}

function userChoiceTunaValidator () {
    
}

function userChoiceDolphinValidator () {
    
}

function userChoiceWhaleValidator () {
    
}

function userChoiceDragonValidator () {
    
}
/*
initiateRobotResponse();

prawnRobotBet {

    treasureVaultLive += 0.1
    robotLiveBalance += 0.1
    robotLastBet = 0.1
}

const robotRandomBet = //math random between 10 choices + parseInt numbers of your buttons

if (robotRandomBet === 0.1) {
    prawnRobotBet function
} else if (robotRandomBet === 1) {
    crabRobotBet function
}


let robotRandomBet = Math.floor(math.random(0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000));
    if number !== 0.1
        math.floor(math.random)
    else number !== 1
    
    else number !==10



    function robotLiveBalance () {
    just no need to write update to html as userLiveBalance
}

function addTwo(num1, num2) {
    return num1 + num2;
  }
  let sum = addTwo(3, 5);
  console.log(sum);  // 8

while (robotLiveBalance < 50) {
    robotRandomBet = Math.floor(math.random(0,1 ,1, 10))
}



initiateRobotResponse();
    robot reacts
                last bets robot to add his next one after yours is noted
                    try to time it with a short pause of few seconds with picture of computer calculating and audio of computer
                    generates robot random selection from constant values that is less than robot balance

                    updating vault with his last bet too
                    alert robot has invested X amount. Your turn again.


function newGameUpdateBalances
    userLiveBalance = userNewBalance - userLastLiveBet;
    robotLiveBalance =  robotNewBalance - robotLastLiveBet;

    userLiveBets = userLastLiveBet + userAllLiveBets;
    robotLiveBets = robotLastLiveBet + robotAllLiveBets;

    vaultLiveReward = userLiveBets + robotLiveBets
    vaultLiveRewardUserUpdate = user

    userBalance.innerHTML = `$(userLiveBalance)`;
    userTotalBets.innerHTML = `$(userLiveBets)`; 
    vaultReward.innerHTML = `$(vaultLiveReward)`; 
    userLastBet.innerHTML = ``; = synchronizes which button was played last
    robotLastBet.innerHTML = ``; = synchronizes which robot reaction was last out of any number < LiveBalance 
/*

function gameTracker () {

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


                if userBalance < 2 {
    Start function of game loss
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

            
Balance and score updater
let userLiveBalance = document.getElementById('balance-total');
userLiveBalance.value 

let userLiveBalanceUpdater = `$(userLastBet) $`;
let userLastBetUpdater = `$(userCustomBet) $`;

function userBalance (operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator').textContent = "+"
}

here focus on playing game loading first
function screenWinningTransfer () {

    document.getElementById("game").remove();
    screenWinningCreate();
}

function screenLosingTransfer () {

    document.getElementById("game").remove();
    screenLosingCreate();
}

function screenFoldedTransfer () {

    document.getElementById("game").remove();
    screenFoldedCreate();
}

function screenWinningCreate () {


}

function screenLosingCreate () {


}

function screenFoldedCreate () {


}

screenGameLoadingTwoTransfer ();

// GAME LOADING SCREEN 2

function screenGameLoadingTwoTransfer () {

    
}
- get sent to by gameTracker
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


Exit game option brings to the home screen

        */
