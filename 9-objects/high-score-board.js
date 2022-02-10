//1. Create a new high score board
function createScoreBoard() {
  const obj = {
    'The Best Ever' : 1000000
  }
  return obj
}

//2. Add players to a score board
function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

//3. Remove players from a score board
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}

//4. Increase a player's score
function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player]+points
  return scoreBoard
}

//5. Apply Monday bonus points
function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard) {
    scoreBoard[player] = scoreBoard[player]+100
  }
  return scoreBoard
}

//6. Normalize a high score
function normalizeScore(params) {
  return params.normalizeFunction(params.score)
}

export {createScoreBoard, addPlayer, normalizeScore, removePlayer, updateScore, applyMondayBonus}

