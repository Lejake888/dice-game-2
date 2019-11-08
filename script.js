let roll = document.getElementById("rollButton")
let reset = document.getElementById("reset")
let rules = document.getElementById("rules")
let holdButton = document.getElementById("holdButton")

reset.style.visibility = 'hidden';


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
        randomise(playerOneScore)
    }
    else {
        randomise(playerTwoScore)
    }
}

const randomise = () => {
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

reset.addEventListener("click", () => {
    refreshPage()
})

reset.addEventListener("click", () => {
    refreshPage()
})

const refreshPage = () => {
    window.location.reload();
}
