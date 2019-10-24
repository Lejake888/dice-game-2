let total = 0;
let random = 0;

const randomise = () => {
    random = Math.floor(Math.random() * 6 + 1)
    const button = document.getElementById("rollButton")
    const image = document.getElementById("dice")
    button.textContent = "Roll"
    image.src = "img/dice"+random+".png";
    total = total + random
    document.getElementById("message").innerHTML = `Randomised Number = ${random} <br> Total = ${total} <br>`
    console.log(`total: ${total}`)
    console.log(`random: ${random}`)
    if (random == 1 && total < 20) {
        document.getElementById("message").innerHTML += `You lose!`
        button.textContent = "Try again"
        total = 0
    }
    else if (total >= 20) {
        document.getElementById("message").innerHTML += `You win!`
        button.textContent = "Play again"
        total = 0
    }
}
random = 0;
console.log("hello");