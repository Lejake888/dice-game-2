let total = 0;

class Player {
    constructor(bool) {
        this.bool = bool
        this.total = 0;
        this.storedScore = 0;
    }
}

const toggle = () => {
    if (!pla1.bool) {
        pla2.bool = true;
    }
    else {
        pla1.bool = true;
    }
}

const randomise = (player, rival) => {
    random = Math.floor(Math.random() * 6 + 1)
    const rollButton = document.getElementById("rollButton")
    const holdButton = document.getElementById("holdButton")
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    player.total = player.total + random;
    document.getElementById("message").innerHTML = `Randomised Number = ${random} <br> Total = ${player.total} <br>`
    console.log(`total: ${player.total}`)
    console.log(`random: ${random}`)

    holdButton.addEventListener("click", () => {
        player.total = player.storedScore
    })

    if (random == 1 && player.total < 20) {
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

let pla1 = new Player(true)
let pla2 = new Player(false)

toggle()

if (pla1.bool) {
    randomise(pla1, pla2)
}
else if (pla2.bool) {
    randomise(pla2, pla1)
}