let userWinCounter = 0
let computerWinCounter = 0

const rockChoice = document.querySelector('.choice-r')
const paperChoice = document.querySelector('.choice-p')
const scissorsChoice = document.querySelector('.choice-s')

const winnerAnnouncement = document.querySelector('.winner-container')
const scores = document.querySelector('.result-container')

rockChoice.addEventListener('click', () => {
    playRound(rockChoice.innerHTML)
})
paperChoice.addEventListener('click', () => {
    playRound(paperChoice.innerHTML)
})
scissorsChoice.addEventListener('click', () => {
    playRound(scissorsChoice.innerHTML)
})

function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors']
    let randomNum = Math.floor(Math.random() * 3)
    return computerChoices[randomNum]
}

function disableButtons() {
    let btns = document.querySelectorAll('button')
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true
    }
}

function resetGame() {
    
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()

    const userScore = document.querySelector('.user-score')
    const computerScore = document.querySelector('.computer-score')

    if (playerSelection === computerSelection)
        return

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerWinCounter += 1
            computerScore.innerText = `The computer'sc score: ${computerWinCounter}`
        }

        if (computerSelection === 'Scissors') {
            userWinCounter += 1
            userScore.innerText = `Your score: ${userWinCounter}`
        }
    }

    if (userWinCounter === 5) {
        const h1 = document.createElement('h1')
        h1.innerText = "You scored 5 points first, you win!"
        winnerAnnouncement.appendChild(h1)
        disableButtons()
    }

    if (computerWinCounter === 5) {
        const h1 = document.createElement('h1')
        h1.innerText = "The computer scored 5 points first, you lose!"
        winnerAnnouncement.appendChild(h1)
        disableButtons()
    }
    
}