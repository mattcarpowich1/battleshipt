// FILLS A ROW WITH FALSE VALUES.
function fillBoard (item, index, arr) {
  return Array(arr.length).fill(false)
}

// RETURNS [X, Y] COORDINATES FOR
// A HORIZONTALLY PLACED SHIP 
// ON THE CURRENT GAME BOARD.
function findHorizontalCoords (board) {
  return (shipSize, orientation) => {
    return (
      board.coordinates
        .reduce((acc, row, y) => {
          let coords = row
            .map((val, x) => [x, y])
            .filter(c => {
              let positions = row
                .slice(c[0], c[0] + shipSize)
              if (!row[c[0]] && 
                c[0] <= board.boardSize - shipSize &&
                !positions.includes(true)) {
                return true
              } else {
                return false
              }
            })
          if (coords.length > 0) {
            return [...acc, coords]
          } else {
            return acc
          }
        }, [])
    )
  }
}

// RETURNS [X, Y] COORDINATES FOR
// A VERITCALLY PLACED SHIP 
// ON THE CURRENT GAME BOARD.
function findVerticalCoords (board) {
  return (shipSize, orientation) => {
    return (
      board.coordinates
        .reduce((acc, row, y, arr) => {
          let coords = row
            .map((val, x) => [x, y])
            .filter(c => {
              if (!row[c[0]] &&
                c[1] <= board.boardSize - shipSize) {
                let rows = arr.slice(y, y + shipSize)
                for (let i = 0; i < shipSize; i++) {
                  if (rows[i][c[0]] === true) {
                    return false;
                  } 
                }
                return true
              } else return false
            })
          if (coords.length > 0) {
            return [...acc, coords]
          } else {
            return acc
          }
        }, [])
    )
  }
}

export {
  fillBoard,
  findHorizontalCoords,
  findVerticalCoords
}