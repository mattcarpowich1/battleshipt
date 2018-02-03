// FILLS A ROW WITH FALSE VALUES.
function initializeBoard (item, index, arr) {
  return Array(arr.length).fill(false)
}

// RETURNS [X, Y] COORDINATES FOR
// A HORIZONTALLY PLACED SHIP 
// ON THE CURRENT GAME BOARD.
function findHorizontalCoords (shipSize, orientation, board) {
  const { boardSize, coordinates } = board
  const results = []
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x <= boardSize - shipSize; x++) {
      let slot = coordinates[y].slice(x, x + shipSize)
      if (!coordinates[y][x] && !slot.includes(true)) {
        results.push([x, y])
      }
    }
  }
  return results
}

// RETURNS [X, Y] COORDINATES FOR
// A VERITCALLY PLACED SHIP 
// ON THE CURRENT GAME BOARD.
function findVerticalCoords (shipSize, orientation, board) {
  const { boardSize, coordinates } = board
  const results = []
  for (let y = 0; y <= boardSize - shipSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      let slot = coordinates
        .slice(y, y + shipSize)
        .map(row => row[x])
      if (!coordinates[y][x] && !slot.includes(true)) {
        results.push([x, y])
      }
    }
  }
  return results 
}

export {
  initializeBoard,
  findHorizontalCoords,
  findVerticalCoords
}