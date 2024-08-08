const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let machineScoreNumber = 0
let humanScoreNumber = 0

// usando ENUm do javascript que é similar a tipagem do tipyscript
const GAMER_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = [
    GAMER_OPTIONS.ROCK,
    GAMER_OPTIONS.PAPER,
    GAMER_OPTIONS.SCISSORS,
  ]
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log("Human: " + human + "machine: " + machine)

  if (human === machine) {
    result.innerHTML = "Empate"
  } else if (
    (human === GAMER_OPTIONS.ROCK && machine === GAMER_OPTIONS.SCISSORS) ||
    (human === GAMER_OPTIONS.PAPER && machine === GAMER_OPTIONS.ROCK) ||
    (human === GAMER_OPTIONS.SCISSORS && machine === GAMER_OPTIONS.PAPER)
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "you champions!"
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "you win for machine"
  }
}
