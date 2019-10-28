let roll = document.getElementById("rollButton")
const holdButton = document.getElementById("holdButton")

let playerOne = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let total = 0;

// const toggle = () => {
//     if (player1) {
//         console.log("Hello")
//     }
//     else {
//         console.log("Bye")
//     }
// }

const scores = () => {
    // if (playerOneScore ==0) {
    //     console.log("hi")
    // }
    if (playerOneScore >= 20) {
        total = 0;
        document.getElementById("One").innerHTML += `Winner`
        console.log(playerOneScore)
        rollButton.textContent = "Play again"
        // total = 0;
        random = 0;
    }
    else if (playerTwoScore >= 20) {
        document.getElementById("Two").innerHTML += `Winner`
        console.log(playerTwoScore)
        rollButton.textContent = "Play again"
        total = 0;
        random = 0;
    }    
}

const check = () => {
    scores()
    if (playerOne) {
        randomise(playerOneScore)
    }
    else {
        randomise(playerTwoScore)
    }
}

const randomise = (player) => {
    let random = Math.ceil(Math.random() * 6)
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    total = total + random;

    document.getElementById("message").innerHTML = `Random Number = ${random} <br> Total = ${total} <br>`

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        total = 0 
        rollButton.textContent = "Next"
        playerOne = false;
    }
    // else if (total >= 20) {
    //     document.getElementById("message").innerHTML += `You win!`
    //     rollButton.textContent = "Play again"
    //     total = 0;
    //     random = 0;
    // }

    // if (playerOne) {
    //     document.getElementById("holder1").innerHTML = total
    // }
    // else if (!playerOne) {
    //     document.getElementById("holder2").innerHTML = total
    //     }
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