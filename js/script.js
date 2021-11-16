let userScore = 0;
let computerScore = 0;
const startButton = document.getElementById("button2")
const restart = document.getElementById("restart2")
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
const images_div = document.querySelector(".choices")
const userName = document.querySelector(".tjena")
const message = document.querySelector(".action-message")
let yourName = document.querySelector("#yourname")
const nameEntry = document.querySelector(".name-entry")
result_div.style.fontSize = "40px"

startButton.addEventListener('click', function () {
    game("startGame")
})

startButton.addEventListener('click', function () {

    yourName.innerHTML = "Hello" + ' ' + userName.value + "!";
    nameEntry.style.display = "none";

})

restart.addEventListener('click', function () {
    game("restart")
})

rock_div.addEventListener('click', function () {
    game("r")
})

paper_div.addEventListener('click', function () {
    game("p")
})

scissors_div.addEventListener('click', function () {
    game("s")
})

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;

}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function tie() {
}

function restarting() {
    userScore = 0;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "";
    images_div.style.opacity = 1;
    images_div.style.display = "block";
}

function game(userChoice) {
    if (userName.value === null || userName.value === "") {
        alert("Please enter a name!");
    }
    else {
        const computerChoice = getComputerChoice();
        if (userChoice === "startGame") {
            images_div.style.opacity = 1;
            images_div.style.transition = "200ms";
            restart.style.opacity = 1;
        }
        if (userChoice === "r") {
            if (computerChoice === "r") {
                result_div.innerText = "Computer chose: 👊" + '' + "It's a tie"
                tie();
            }
            else if (computerChoice === "p") {
                result_div.innerText = "Computer chose: ✋" + '' + "Computer wins"
                lose();
            }
            else if (computerChoice === "s") {
                result_div.innerText = "Computer chose: ✌" + '' + "You win"
                win();

            }
        }
        if (userChoice === "p") {
            if (computerChoice === "p") {
                result_div.innerText = "Computer chose: ✋" + '' + "It's a tie"
                tie();
            }
            else if (computerChoice === "r") {
                result_div.innerText = "Computer chose: 👊" + '' + "You win"
                win();
            }
            else if (computerChoice === "s") {
                result_div.innerText = "Computer chose: ✌" + '' + "Computer wins"
                lose();
            }
        }
        if (userChoice === "s") {
            if (computerChoice === "s") {
                result_div.innerHTML = "Computer chose:✌" + '' + "It's a tie"
                tie();
            }
            else if (computerChoice === "r") {
                result_div.innerHTML = "Computer chose 👊" + '' + "Computer wins"
                lose();
            }
            else if (computerChoice === "p") {
                result_div.innerHTML = "Computer chose: ✋" + '' + "You win"
                win();
            }
        }
    }
    if (userChoice === "restart") {
        restarting();
        result_div.innerHTML = ""
    }
    if (userScore === 3) {
        images_div.style.display = "none";
        result_div.innerHTML = "YOU WIN!";
    }
    else if (computerScore === 3) {
        images_div.style.display = "none";
        result_div.innerHTML = "YOU LOSE!"
    }

}