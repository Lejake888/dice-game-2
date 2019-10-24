let total = 0;

class Player {
    constructor(bool) {
        this.bool = bool
        this.total = 0;
        this.storedScore = 0;
    }
}

const toggle = () => {
    if (!player1) {
        player2 = true;
    }
    else {
        player1 = true;
    }
}

const randomise = (player, rival) => {
    random = Math.floor(Math.random() * 6 + 1)

    const rollButton = document.getElementById("rollButton")
    const holdButton = document.getElementById("holdButton")
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    player.total = player.total + random
    document.getElementById("message").innerHTML = `Randomised Number = ${random} <br> Total = ${total} <br>`
    console.log(`total: ${total}`)
    console.log(`random: ${random}`)

    holdButton.addEventListener("click", () => {
        total = player.storedScore
    })

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        player.total = 0 
        player.bool = false
        rollButton.textContent = "Next"
    }
    else if (total >= 20) {
        document.getElementById("message").innerHTML += `You win!`
        rollButton.textContent = "Play again"
        player.total = 0 
        rival.total = 0
    }
}
// random = 0;

let pl1 = new Player(true)
let pl2 = new Player(false)

toggle()

if (pl1.bool) {
    randomise(pl1, pl2)
}
else if (pl2.bool) {
    randomise(pl2, pl1)
}