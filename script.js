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

const check = () => {
    if (pla1.bool) {
        randomise(pla1.storedScore, pla2.storedScore)
    }
    else if (pla2.bool) {
        randomise(pla2.storedScore, pla1.storedScore)
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

    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lost the round!`
        total = 0 
        rollButton.textContent = "Next"
    }
    else if (total >= 20) {
        document.getElementById("message").innerHTML += `You win!`
        rollButton.textContent = "Play again"
        total = 0;
        random = 0;
    }
}
// random = 0;

// Main code here

let pla1 = new Player(true)
let pla2 = new Player(false)

holdButton.addEventListener("click", () => {
    // player.storedScore = total
    // player.bool = false
    if (pla1) {
        console.log("Hello")
        pla1.storedScore = pla1.storedScore + total
        total = 0;
        pla1.bool = false;
        toggle()
    }
    else if (pla2) {
        console.log("Bye")
        pla2.storedScore = pla2.storedScore + total;
        total = 0; 
        pla2.bool = false;
        toggle()
    }
}
)

check()