let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1

let player1Dice = document.querySelector('.img1')
let player2Dice = document.querySelector('.img2')
let h1 = document.querySelector('h1')

player1Dice.setAttribute('src', `images/dice${randomNumber1}.png`)
player2Dice.setAttribute('src', `images/dice${randomNumber2}.png`)

if (randomNumber1 === randomNumber2) {
    h1.textContent = 'Draw !'
} else if (randomNumber1 > randomNumber2) {
    h1.textContent = '👏 Player 1 Wins !'
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = '👏 Player 2 Wins !'
}