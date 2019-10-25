let roll = document.getElementById("rollButton")

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

const check = () => {
    if (playerOne) {
        randomise(playerOne)
    }
    else {
        randomise(playerTwo)
    }
}

const randomise = (player) => {
    let random = Math.ceil(Math.random() * 6)
    const holdButton = document.getElementById("holdButton")
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    total = total + random;

    document.getElementById("message").innerHTML = `Random Number = ${random} <br> Total = ${total} <br>`
    console.log(`random: ${random}`)
    console.log(`total: ${total}`)

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        total = 0 
        rollButton.textContent = "Next"
        player = false;
    }
    else if (total >= 20) {
        document.getElementById("message").innerHTML += `You win!`
        rollButton.textContent = "Play again"
        total = 0;
        random = 0;
    }
}

holdButton.addEventListener("click", () => {
    if (playerOne) {
        playerOneScore = playerOneScore + total
        total = 0;
        playerOne = false;
        document.getElementById("message").innerHTML += `Player 1 now has ${playerOneScore} points`
        check()
    }
    else if (playerTwo) {
        console.log("Bye")
        playerTwoScore = playerTwoScore + total;
        total = 0; 
        playerOne = true;
        document.getElementById("message").innerHTML += `Player 2 now has ${playerTwoScore} points`
        check()
    }
}
)

roll.addEventListener("click", () => {
    check()
})