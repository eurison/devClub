const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let machineScoreNumber = 0
let humanScoreNumber = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"]
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log("Human: " + human + "machine: " + machine)

  if (human === machine) {
    result.innerHTML = "Empate"
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
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
