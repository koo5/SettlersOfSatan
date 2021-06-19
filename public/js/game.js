const lobbyWaitingDiv = document.querySelector("#lobby-waiting")
const lobbyPlayingDiv = document.querySelector("#lobby-playing")

const toggleInGameGui = (render, board) => {
  if(render) {
    lobbyWaitingDiv.style.display = "none"
    lobbyPlayingDiv.style.display = null

    canvasFunctions.setup(board)
  }
  else {
    lobbyWaitingDiv.style.display = null
    lobbyPlayingDiv.style.display = "none"

    canvasFunctions.stop()
  }
}

socket.on("game_started_update", data => {
  if(data.started) {
    toggleInGameGui(true, data.gameBoard)
  }
  else {
    toggleInGameGui(false)
    notifyUser("game ended")
  }
})


let currentGameData
socket.on("game_update", data => {
  currentGameData = data
})