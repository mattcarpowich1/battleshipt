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
      return (
        this.coordinates
        .reduce((acc, row, y) => {
          let coords = row
          .map((val, x) => [x, y])
          .filter(c => (!row[c[0]] && c[0] < this.boardSize - shipSize))
          if (coords.length > 0) {
            return [...acc, coords]
          } else {
            return acc
          }
        }, [])
      ) 
    } else if (orientation === 'VERTICAL') {
      return (
        this.coordinates
        .reduce((acc, row, y) => {
          let coords = row
          .map((val, x) => [x, y])
          .filter(c => (!row[c[0]] && c[1] < this.boardSize - shipSize))
          if (coords.length > 0) {
            return [...acc, coords]
          } else {
            return acc
          }
        }, [])
      ) 
    } else {
      throw new Error(`INVALID ARGUMENT "${orientation}"`)
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