let roll = document.getElementById("rollButton")
let reset = document.getElementById("reset")
let holdButton = document.getElementById("holdButton")
let square1 = document.getElementById("sqaure1")
let square2 = document.getElementById("sqaure2")

reset.style.visibility = 'hidden';


let playerOne = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let total = 0;

const scores = () => {
    // if (playerOneScore ==0) {
    //     console.log("hi")
    // }
    if (playerOneScore >= 20) {
        total = 0;
        document.getElementById("One").innerHTML += `Winner`
        console.log(playerOneScore)
        reset.style.visibility = 'visible';
        roll.style.visibility = 'hidden';
        holdButton.style.visibility = 'hidden';

    }
    else if (playerTwoScore >= 20) {
        document.getElementById("Two").innerHTML += `Winner`
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
    // document.getElementById("message").innerHTML = `Random Number = ${random} <br> Total = ${total} <br>`

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        total = 0 
        rollButton.textContent = "Next"
        playerOne = !playerOne;
    }
    // else if (total >= 20) {
    //     document.getElementById("message").innerHTML += `You win!`
    //     rollButton.textContent = "Play again"
    //     total = 0;
    //     random = 0;
    // }

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
        total = 0;
        playerOne = false;
        scores()
    }
    else if (!playerOne) {
        playerTwoScore = playerTwoScore + total;
        document.getElementById("message").innerHTML = `Player 2 now has ${playerTwoScore} points`
        document.getElementById("text2").innerHTML = `${playerTwoScore}`
        total = 0; 
        playerOne = true;
        scores()
    }
}
)

roll.addEventListener("click", () => {
    check()
})

reset.addEventListener("click", () => {
    refreshPage()
})

// if (playerOne) {
//     square1.style.background = rgba(255,255,255,1)
//     square2.style.background = rgba(255,255,255,0.5)
// }
// else {
//     square2.style.background = rgba(255,255,255,1)
//     square1.style.background = rgba(255,255,255,0.5)
// }

const refreshPage = () => {
    window.location.reload();
}