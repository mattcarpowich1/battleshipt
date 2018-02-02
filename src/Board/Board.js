// ALL BOARDS ARE SQUARES.
class Board {
  constructor (size) {
    this.boardSize = size
    this.coordinates = Array(size)
    .fill([])
    .map(fillBoard)
  }

  getSize () {
    return this.boardSize
  }

  // RETURNS AN ARRAY OF [x, y] VALUES   
  // WHERE A PLAYER MAY PLACE THEIR SHIP. 
  getAvailableCoordinates (shipSize, orientation) {
    if (orientation === 'HORIZONTAL') {
      return coordinates
      .reduce((acc, row, x) => {
        for (let y = 0; y < this.boardSize; y++) {
          if (!row[y] && y < this.boardSize - shipSize) {
            return [...acc, [x, y]]
          } else {
            return acc
          }
        }
      }, [])
    }
  }

  printBoard () {
    console.log(this.coordinates)
  }
}

function fillBoard (item, index, arr) {
  return Array(arr.length).fill(false)
}

export default Board