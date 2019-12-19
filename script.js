let roll = document.getElementById("rollButton")
let reset = document.getElementById("reset")
let holdButton = document.getElementById("holdButton")

let onebackground = document.getElementById("square1")
let twobackground = document.getElementById("square2")

reset.style.visibility = 'hidden';
onebackground.style.backgroundColor = "rgba(255,255,255,1)"
twobackground.style.backgroundColor = "rgba(255,255,255,0.7)"

let playerOne = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let total = 0;

const colorToggle = () => {

    if (playerOne) {
        document.getElementById("message").innerHTML += `Player 1, You lost the round! It's player 2's turn`
        onebackground.style.backgroundColor = "rgba(255,255,255,0.7)"
        twobackground.style.backgroundColor = "rgba(255,255,255,1)"
    }
    else {
        document.getElementById("message").innerHTML += `Player 2, You lost the round! It's player 1's turn`
        onebackground.style.backgroundColor = "rgba(255,255,255,1)"
        twobackground.style.backgroundColor = "rgba(255,255,255,0.7)"
    }
}

const scores = () => {

    if (playerOneScore >= 20) {
        total = 0;
        console.log(playerOneScore)
        reset.style.visibility = 'visible';
        roll.style.visibility = 'hidden';
        holdButton.style.visibility = 'hidden';

    }
    else if (playerTwoScore >= 20) {
        console.log(playerTwoScore)
        reset.style.visibility = 'visible';
        roll.style.visibility = 'hidden';
        holdButton.style.visibility = 'hidden';
    }    
}

const check = () => {
    scores()
    if (playerOne) {
        console.log("player 1 turn")
        randomise(playerOneScore)
    }
    else {
        console.log("player 2 turn")
        randomise(playerTwoScore)
    }
}

const randomise = () => {
    let random = Math.ceil(Math.random() * 6)
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    total = total + random;

    document.getElementById("message").innerHTML = `Random Number = ${random}<br>`
    
    if (random == 1 && total < 20) {
        colorToggle()
        rollButton.textContent = "Next"
        total = 0;
        playerOne = !playerOne;
    }

    if (playerOne) {
        document.getElementById("holder1").innerHTML = "Total <br>" + total
    }
    else if (!playerOne) {
        document.getElementById("holder2").innerHTML = "Total <br>" + total
        }
}

holdButton.addEventListener("click", () => {
    if (playerOne) {
        playerOneScore = playerOneScore + total
        document.getElementById("message").innerHTML = `Player 1 now has ${playerOneScore} points`
        document.getElementById("text1").innerHTML = `${playerOneScore}`
        playerOne = false;
        onebackground.style.backgroundColor = "rgba(255,255,255,0.7)"
        twobackground.style.backgroundColor = "rgba(255,255,255,1)"
    }
    else if (!playerOne) {
        playerTwoScore = playerTwoScore + total;
        document.getElementById("message").innerHTML = `Player 2 now has ${playerTwoScore} points`
        document.getElementById("text2").innerHTML = `${playerTwoScore}`
        playerOne = true;
        onebackground.style.backgroundColor = "rgba(255,255,255,1)"
        twobackground.style.backgroundColor = "rgba(255,255,255,0.7)"
    }
    total = 0; 
    scores()
}
)

roll.addEventListener("click", () => {
    check()
})

reset.addEventListener("click", () => {
    refreshPage()
})

const refreshPage = () => {
    window.location.reload();
}