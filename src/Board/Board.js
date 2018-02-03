import {
  fillBoard,
  findHorizontalCoords,
  findVerticalCoords
} from './utils.js'

// ALL BOARDS ARE SQUARES.
class Board {
  constructor (size) {
    if (size < MIN_SIZE || size > MAX_SIZE) {
      throw new Error('INVALID SIZE OF BOARD.')
    }
    this.boardSize = size
    this.coordinates = Array(size)
      .fill([])
      .map(fillBoard)
  }

  getSize () {
    return this.boardSize
  }
 
  getAvailableCoordinates (shipSize, orientation) {
    if (!ORIENTATIONS.includes(orientation)) {
      throw new Error(`INVALID ARGUMENT "${orientation}"`)
    }
    return orientation === 'HORIZONTAL' 
      ? findHorizontalCoords(this)(shipSize, orientation) 
      : findVerticalCoords(this)(shipSize, orientation)
  }

  setCoordinates(x, y, val) {
    this.coordinates[y][x] = val
  }

  printBoard () {
    console.log(this.coordinates)
  }
}

const MIN_SIZE = 5
const MAX_SIZE = 10
const ORIENTATIONS = ['VERTICAL', 'HORIZONTAL']

export default Board