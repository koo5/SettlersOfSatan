const gameControls = {
  settlement: document.querySelector("#settlement-button"),
  city: document.querySelector("#city-button"),
  road: document.querySelector("#road-button"),
  developmentCard: document.querySelector("#development-card-button"),
  trade: document.querySelector("#trade-button"),
}

let holding = null
const setHolding = name => {
  if(holding === name) holding = null
  else holding = name
}

gameControls.settlement.addEventListener("click", () => setHolding("settlement"))
gameControls.city.addEventListener("click", () => setHolding("city"))
gameControls.road.addEventListener("click", () => setHolding("road"))





const turnControls = document.querySelector("#turn-controls")
const turnButton = document.querySelector("#end-turn-dice-button")

const refreshTurnControls = () => {
  if(currentGameData.turn !== currentGameData.me.id) {
    turnButton.disabled = true
    turnButton.textContent = "It is not your turn..."
  }
  else {
    turnButton.disabled = false

    if(currentGameData.turnStage === 0) {
      turnButton.textContent = "Roll Dice"
    }
    else {
      turnButton.textContent = "End Turn"
    }
  }
}

turnButton.addEventListener("click", () => {
  const action = turnStage === 0 ? "roll_dice" : "end_turn"

  socket.emit("perform_game_action", { action },
  (err, data) => {
    if(err) notifyUser(err)
  })
})