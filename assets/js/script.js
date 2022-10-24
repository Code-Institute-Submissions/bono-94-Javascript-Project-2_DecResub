
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked $(gameType)`);
            }
        })
    }
})



function startGame () {

}

function runGame () {
    
}

function checkReaction () {

}

function calculateReaction () {

}

function calculateBalance () {

}

function calculateInvestment () {

}

function calculateEarnings () {

}

function recordScore () {

}

function updateScoreWin () {

}

function updateScoreLoss () {

}

function opponentReaction () {

}