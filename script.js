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
        // document.getElementById("message").innerHTML = ""
    }
    else {
        pla1.bool = true;
        // document.getElementById("message").innerHTML = ""
    }
}

const randomise = (player, rival) => {
    random = Math.floor(Math.random() * 6 + 1)
    const rollButton = document.getElementById("rollButton")
    const holdButton = document.getElementById("holdButton")
    const image = document.getElementById("dice")

    rollButton.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    total = total + random;
    document.getElementById("message").innerHTML = `Randomised Number = ${random} <br> Total = ${total} <br>`
    console.log(`total: ${total}`)
    console.log(`random: ${random}`)

    holdButton.addEventListener("click", () => {
        storedScore = total
        player = false;
    })

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        total = 0 
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