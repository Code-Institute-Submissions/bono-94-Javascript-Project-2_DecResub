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
const userWins = 0;
const userLoss = 0;
const robotWins = 0;
const robotLoss = 0;

const scoreResultsWinWins = userWins + 1;
const scoreREsultsWinLoss = userLoss + 0;
const scoreResultsLossnWins = userWins + 0;
const scoreREsultsLossLosses = userLoss + 1;
const scoreResultsFoldnWins = userWins + 0;
const scoreREsultsFoldLosses = userLoss + 1;

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

var userRandomBalance = Math.floor(Math.random() * 21042004) + 2;
var robotRandomBalance = Math.floor(Math.random() * 21042004) + 2;
var userTotalBets = 0;
var userLastBet = 0;
var vaultReward = 0;
var robotLastBet = 0;

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
            <a href="https://bono-94.github.io/Project-1-Code-Institute-HTML-CSS/" target="_blank" rel="noopener">
                <img id="lifecoin-logo" src="./assets/media/images/coin-logo-2d-slim.png" alt="Lifecoin logo representing development and ownership organization">
            </a>
        </div>
        <audio id="audio-welcome" autoplay loop>
            <source src="./assets/media/audio/welcome-music.mp3" type="audio/mpeg">
        </audio>
    </section>
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
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="total-bet">
                        <p class="total-bet">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            My Bets:
                        </p>
                        <p id="bet-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-user">
                        <p class="last-bet-user">
                            <i class="fa-solid fa-user"></i>
                            Last Bet:
                        </p>
                        <p id="bet-user-total">
                            $0
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
                            $0
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
                    Prawn ($1)
                </button>
                <button class="bttn-second" onclick="userChoiceCrabValidator()" id="bttn-two" data-choice="1">
                    Crab ($10)
                </button>
                <button class="bttn-second" onclick="userChoiceTurtleValidator()" id="bttn-three" data-choice="2">
                    Turtle ($50)
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
                <button class="bttn-first" onclick="userFolded()" id="fold">
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
        <audio id="audio-cashout">
            <source src="./assets/media/audio/cashier.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-calculating">
            <source src="./assets/media/audio/calculating.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-game-background").volume = 0.7;
    document.getElementById("audio-cashout").play();
    document.getElementById("audio-cashout").volume = 0.5;
    alert ("Congratulations! Your lifecoin has yielded a new game balance.");
    newGameSetupScores();
}

function newGameSetupScores () {

    document.getElementById("past-score-counter-hw").innerHTML = userWins;
    document.getElementById("past-score-counter-hl").innerHTML = userLoss;
    document.getElementById("past-score-counter-rw").innerHTML = robotWins;
    document.getElementById("past-score-counter-rl").innerHTML = robotLoss; 
    newGameSetupBalances(); 
}

function newGameSetupBalances () {

    let userBalanceDisplayed = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = userRandomBalance;
}

function userChoicePrawnValidator () {
    if (1 < userRandomBalance) {
        userChoicePrawnPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoicePrawnPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1;
    userTotalBets += 1;
    userLastBet = 1;
    vaultReward += 1;
    choicesUpdaters();
}

function userChoiceCrabValidator () {
    
    if (10 < userRandomBalance) {
        userChoiceCrabPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceCrabPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10;
    userTotalBets += 10;
    userLastBet = 10;
    vaultReward += 10;
    choicesUpdaters();
}

function userChoiceTurtleValidator () {
    
    if (50 < userRandomBalance) {
        userChoiceTurtlePush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceTurtlePush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 50;
    userTotalBets += 50;
    userLastBet = 50;
    vaultReward += 50;
    choicesUpdaters();
}

function userChoiceOctopusValidator () {
    
    if (100 < userRandomBalance) {
        userChoiceOctopusPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceOctopusPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 100;
    userTotalBets += 100;
    userLastBet = 100;
    vaultReward += 100;
    choicesUpdaters();
}

function userChoiceSquidValidator () {
    
    if (500 < userRandomBalance) {
        userChoiceSquidPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceSquidPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 500;
    userTotalBets += 500;
    userLastBet = 500;
    vaultReward += 500;
    choicesUpdaters();
}

function userChoiceLobsterValidator () {
    
    if (1000 < userRandomBalance) {
        userChoiceLobsterPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceLobsterPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1000;
    userTotalBets += 1000;
    userLastBet = 1000;
    vaultReward += 1000;
    choicesUpdaters();
}

function userChoiceTunaValidator () {
    
    if (10000 < userRandomBalance) {
        userChoiceTunaPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceTunaPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10000;
    userTotalBets += 10000;
    userLastBet = 10000;
    vaultReward += 10000;
    choicesUpdaters();
}

function userChoiceDolphinValidator () {
    
    if (100000 < userRandomBalance) {
        userChoiceDolphinPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceDolphinPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 100000;
    userTotalBets += 100000;
    userLastBet = 100000;
    vaultReward += 100000;
    choicesUpdaters();
}

function userChoiceWhaleValidator () {
    
    if (1000000 < userRandomBalance) {
        userChoiceWhalePush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceWhalePush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1000000;
    userTotalBets += 1000000;
    userLastBet = 1000000;
    vaultReward += 1000000;
    choicesUpdaters();
}

function userChoiceDragonValidator () {
    
    if (10000000 < userRandomBalance) {
        userChoiceDragonPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select smaller amount.");
    }
}

function userChoiceDragonPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10000000;
    userTotalBets += 10000000;
    userLastBet = 10000000;
    vaultReward += 10000000;
    choicesUpdaters();
}

function choicesUpdaters () {

    let userBalanceDisplayedUpdater = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = "$" + userRandomBalance;
    let userTotalBetseDisplayed = document.getElementById('bet-total');
    document.getElementById('bet-total').innerHTML = "$" + userTotalBets;
    let userLastBetDisplayed = document.getElementById('bet-user-total');
    document.getElementById('bet-user-total').innerHTML = "$" + userLastBet;
    let vaultRewardDisplayed = document.getElementById('treasure-total');
    document.getElementById('treasure-total').innerHTML = "$" + vaultReward;
    let robotLastBetDisplayed = document.getElementById('bet-robot-total');
    document.getElementById('bet-robot-total').innerHTML = "$" + robotLastBet;
    if (robotRandomBalance < 2) {
        alert("Robot does not have enough balance to continue the game.");
        screenWinningTransfer();
    } else if (userRandomBalance < 2) {
        alert("You do not have enough balance to continue the game.");
        screenLosingTransfer();
    } else {
        initiateRobotResponse(); 
    }
    
}

function initiateRobotResponse () {

    var robotRandomBet = Math.floor(Math.random() * robotRandomBalance) + 1; 
    if (robotRandomBet > robotRandomBalance) {
        initiateRobotResponse();
    } else {
        if (0 < robotRandomBet && robotRandomBet < 10) {
            prawnRobotBet ();
        } else if (robotRandomBet < 50) {
            crabRobotBet ();
        } else if (robotRandomBet < 100) {
            turtleRobotBet
        } else if (robotRandomBet < 500) {
            octoRobotBet ();
        } else if (robotRandomBet < 1000) {
            squidRobotBet ();
        } else if (robotRandomBet < 10000) {
            lobsterRobotBet ();
        } else if (robotRandomBet < 100000) {
            tunaRobotBet ();
        } else if (robotRandomBet < 1000000) {
            dolphinRobotBet ();
        } else if (robotRandomBet < 5000000) {
            whaleRobotBet ();
        } else if (robotRandomBet < 10000000) {
            dragonRobotBet ();
        }
    }
}

function prawnRobotBet () {

    robotRandomBalance -= 1;
    robotLastBet = 1;
    vaultReward += 1;
    choicesUpdatersRobot();
}

function crabRobotBet () {

    robotRandomBalance -= 10;
    robotLastBet = 10;
    vaultReward += 10;
    choicesUpdatersRobot();
}

function turtleRobotBet () {

    robotRandomBalance -= 50;
    robotLastBet = 50;
    vaultReward += 50;
    choicesUpdatersRobot();
}

function octoRobotBet () {

    robotRandomBalance -= 100;
    robotLastBet = 100;
    vaultReward += 100;
    choicesUpdatersRobot();
}

function squidRobotBet () {

    robotRandomBalance -= 500;
    robotLastBet = 500;
    vaultReward += 500;
    choicesUpdatersRobot();
}

function lobsterRobotBet () {

    robotRandomBalance -= 1000;
    robotLastBet = 1000;
    vaultReward += 1000;
    choicesUpdatersRobot();
}

function tunaRobotBet () {

    robotRandomBalance -= 10000;
    robotLastBet = 10000;
    vaultReward += 10000;
    choicesUpdatersRobot();
}

function dolphinRobotBet () {

    robotRandomBalance -= 100000;
    robotLastBet = 100000;
    vaultReward += 100000;
    choicesUpdatersRobot();
}

function whaleRobotBet () {

    robotRandomBalance -= 1000000;
    robotLastBet = 1000000;
    vaultReward += 1000000;
    choicesUpdatersRobot();
}

function dragonRobotBet () {

    robotRandomBalance -= 10000000;
    robotLastBet = 10000000;
    vaultReward += 10000000;
    choicesUpdatersRobot();
}

function choicesUpdatersRobot () {

    document.getElementById("audio-calculating").play();
    document.getElementById("audio-calculating").volume = 0.1;
    let vaultRewardDisplayed = document.getElementById('treasure-total');
    document.getElementById('treasure-total').innerHTML = "$" + vaultReward;
    let robotLastBetDisplayed = document.getElementById('bet-robot-total');
    document.getElementById('bet-robot-total').innerHTML = "$" + robotLastBet;
    console.log(robotRandomBalance);
}

function userFolded () {

    alert("You decided to escape with your remaining balance.");
    screenFoldedTransfer();
}

        
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

    document.body.innerHTML = `
    <section id="winning-screen">
        <div id="winning-screen-title">
            <h2 class="game-results-screen-h-two">
                YOU WON!
                <i class="fa-solid fa-trophy"></i>
            </h2>
        </div>
        <div id="winning-screen-image">
            <img class="results-covers" id="winning-cover" src="./assets/media/images/treasure-small.jpg" alt="Image of treasure chest full of coins">
        </div>
        <div class="results-text"id="winning-screen-text">
            <h3>
                Congratulations! You were the bigger fish this time.
            </h3>
        </div>
        <div class="results-results" id="winning-screen-results">
            <p>
                - You won a treasure chest in value of <span id="treasure-results-w">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-w">$0</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-w">[0]</span> : <span id="loss-score-results-w">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="winning-screen-button">
            <button onclick="screenGameLoadingTwoNextGameTransferW()">
                <i class="fa-regular fa-circle-play"></i>
                Next Game
            </button>
        </div>
        <audio id="audio-win">
            <source src="./assets/media/audio/win.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-win").volume = 0.4;
    document.getElementById("audio-win").play();
    winScreenResultsPush();
}

function winScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let earningsResultsWin = vaultReward + userRandomBalance;
    let resultTreasure = document.getElementById('treasure-results-w');
    document.getElementById('treasure-results-w').innerHTML = "$" + vaultReward;
    let resultBalance = document.getElementById('balance-results-w');
    document.getElementById('balance-results-w').innerHTML = "$" + earningsResultsWin;
    let resultWins = document.getElementById('win-score-results-w');
    document.getElementById('win-score-results-w').innerHTML = newWins;
    let resultLoss = document.getElementById('loss-score-results-w');
    document.getElementById('loss-score-results-w').innerHTML = userLoss;
    
}

function screenLosingCreate () {

    document.body.innerHTML = `
    <section id="losing-screen">
        <div id="losing-screen-title">
            <h2 class="game-results-screen-h-two">
                GAME OVER!
                <i class="fa-solid fa-skull-crossbones"></i>
            </h2>
        </div>
        <div class="result-covers-box" id="losing-screen-image">
            <img class="results-covers" id="losing-cover" src="./assets/media/images/broke-small.jpg" alt="Image of person emptying out their pockets with small change representing no funds to proceed">
        </div>
        <div class="results-text" id="losing-screen-text">
            <h3>
                Unfortunately, you were the smaller fish this time.
            </h3>
        </div>
        <div class="results-results" id="losing-screen-results">
            <p>
                - You lost a treasure chest in value of <span id="treasure-results-l">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-l">$0</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-l">[0]</span> : <span id="loss-score-results-l">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="losing-screen-button">
            <button onclick="screenGameLoadingTwoNextGameTransferL()">
                <i class="fa-solid fa-rotate-left"></i>
                New Game
            </button>
        </div>
        <audio id="audio-loss">
            <source src="./assets/media/audio/losing.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-loss").volume = 0.4;
    document.getElementById("audio-loss").play();
    lossScreenResultsPush();
}

function lossScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let resultTreasureLoss = document.getElementById('treasure-results-l');
    document.getElementById('treasure-results-l').innerHTML = "$" + vaultReward;
    let resultBalanceLoss = document.getElementById('balance-results-l');
    document.getElementById('balance-results-l').innerHTML = "$0";
    let resultWinsLoss = document.getElementById('win-score-results-l');
    document.getElementById('win-score-results-l').innerHTML = "$" + userWins;
    let resultLossLoss = document.getElementById('loss-score-results-l');
    document.getElementById('loss-score-results-l').innerHTML = "$" + newLoss;
}

function screenFoldedCreate () {

    document.body.innerHTML = `
    <section id="folded-screen">
        <div id="folded-screen-title">
            <h2 class="game-results-screen-h-two">
                TRY AGAIN!
                <i class="fa-solid fa-dice"></i>
            </h2>
        </div>
        <div class="result-covers-box" id="folded-screen-image">
            <img class="results-covers" id="folded-cover" src="./assets/media/images/orca-small.jpg" alt="Image of orca approaching surface, represents another opportunity for one of the largest fish to hunt again">
        </div>
        <div class="results-text" id="folded-screen-text">
            <h3>
                Luckily, you were a decent size of a fish. Enough to escape!
            </h3>
        </div>
        <div class="results-results" id="losing-screen-results">
            <p>
                - You lost a treasure chest in value of <span id="treasure-results-f">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-f">0$</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-f">[0]</span> : <span id="loss-score-results-f">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="folded-screen-button">
            <button id="results-f-next-game" onclick="screenGameLoadingTwoNextGameTransferF()">
                <i class="fa-regular fa-circle-play"></i>
                Next Game
            </button>
            <button id="results-f-new-game" onclick="screenGameLoadingTwoNewGameTransferF()">
                <i class="fa-solid fa-rotate-left"></i>
                New Game
            </button>
        </div>
        <audio id="audio-fold">
            <source src="./assets/media/audio/folded.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-fold").volume = 0.4;
    document.getElementById("audio-fold").play();
    foldScreenResultsPush();
}

function foldScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let resultTreasureFold = document.getElementById('treasure-results-f');
    document.getElementById('treasure-results-f').innerHTML = "$" + vaultReward;
    let resultBalanceLoss = document.getElementById('balance-results-f');
    document.getElementById('balance-results-f').innerHTML = "$" + userRandomBalance;
    let resultWinsLoss = document.getElementById('win-score-results-f');
    console.log(userWins);
    document.getElementById('win-score-results-f').innerHTML = userWins;
    let resultLossLoss = document.getElementById('loss-score-results-f');
    console.log(userLoss);
    document.getElementById('loss-score-results-f').innerHTML = newLoss;
}

function screenGameLoadingTwoNextGameTransferW () {

    document.getElementById("winning-screen").remove();
    screenLoadingTwoWinsNextCreate();  
}

function screenGameLoadingTwoNextGameTransferL () {
    
    document.getElementById("losing-screen").remove();
    screenLoadingTwoLossNewCreate();  
}

function screenGameLoadingTwoNextGameTransferF () {

    document.getElementById("folded-screen").remove();
    screenLoadingTwoFoldNexCreate();  
}

function screenGameLoadingTwoNewGameTransferF () {
    
    document.getElementById("folded-screen").remove();
    screenLoadingTwoFoldNewCreate();  
}

function screenLoadingTwoWinsNextCreate () {

    document.body.innerHTML = `
    <section id="game-outro-two">
        <video id="video-loading-two" src="./assets/media/video/loading.mp4" alt="Loading screen logo with heavy storms behind" autoplay onended="nextGame()"></video>
    </section>
    `;
    document.getElementById("video-loading-two").volume = 0.1;
}  

function screenLoadingTwoLossNewCreate () {

    document.body.innerHTML = `
    <section id="game-outro-three">
        <video id="video-loading-three" src="./assets/media/video/loading.mp4" alt="Loading screen logo with heavy storms behind" autoplay onended="newGame()"></video>
    </section>
    `;
    document.getElementById("video-loading-three").volume = 0.1;
}

function screenLoadingTwoFoldNexCreate () {

    document.body.innerHTML = `
    <section id="game-outro-four">
        <video id="video-loading-four" src="./assets/media/video/loading.mp4" alt="Loading screen logo with heavy storms behind" autoplay onended="nextGame()"></video>
    </section>
    `;
    document.getElementById("video-loading-four").volume = 0.1;
}

function screenLoadingTwoFoldNewCreate () {

    document.body.innerHTML = `
    <section id="game-outro-five">
        <video id="video-loading-five" src="./assets/media/video/loading.mp4" alt="Loading screen logo with heavy storms behind" autoplay onended="newGame()"></video>
    </section>
    `;
    document.getElementById("video-loading-five").volume = 0.1;
}

/*

function newGame () {

New game button (fresh balance)
            takes to insert coin function which is new function that automatically loops without code by creating html that is already in place on index page

}

function nextGame () {

}
takes you to nextGame function
    



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
