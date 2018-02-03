import Board from './Board.js'
import Ship from '../Ship'

function testBoard () {
  // PRINT DIFFERENT SIZE BOARDS
  testBoardSizes(BOARD_SIZES)

  // TEST HORIZONTAL POSITIONING 
  testPositioning(
    SMALL_SHIP_SIZE,
    SMALL_BOARD_SIZE,
    HORIZONTAL
  )

  // TEST VERTICAL POSITIONING
  testPositioning(
    SMALL_SHIP_SIZE,
    SMALL_BOARD_SIZE,
    VERTICAL
  )

  // TEST HORIZONTAL SHIP PLACEMENT
  testPlacement(
    SMALL_SHIP_SIZE,
    SMALL_BOARD_SIZE,
    HORIZONTAL
  )
}
 
/* ----------------------------------------------- */
// HELPER FUNCTIONS

function testBoardSizes (boards) {
  boards.forEach(size => {
    let b = new Board(size)
    console.log(HR, `\nPRINTING BOARD SIZE ${size}`)
    b.printBoard()
  })
}

function testPositioning (shipSize, boardSize, o) {
  console.log(
    HR, 
    `\n${o} POSITIONS: SHIP_SIZE = ${shipSize},`,
    `BOARD_SIZE = ${boardSize}`
  )
  const b = new Board(boardSize)
  b.setCoordinates(3, 2, true)
  b.setCoordinates(0, 0, true)
  b.setCoordinates(1, 0, true)
  console.log(b.getAvailableCoordinates(shipSize, o))
}

function testPlacement (shipSize, boardSize, o) {
  const b = new Board(boardSize)
  const s = new Ship(shipSize)
  s.setOrientation(o)
  b.placeShip(s, 0, 0)
}

/* ----------------------------------------------- */
// CONSTANTS

const HR = Array(50).fill('-').join('')
const DEFAULT_BOARD_SIZE = 8
const SMALL_BOARD_SIZE = 5
const LARGE_BOARD_SIZE = 10
const BOARD_SIZES = [
  DEFAULT_BOARD_SIZE,
  SMALL_BOARD_SIZE,
  LARGE_BOARD_SIZE
]
const SMALL_SHIP_SIZE = 2
const SHIP_SIZES = [
  SMALL_SHIP_SIZE
]
const HORIZONTAL = 'HORIZONTAL'
const VERTICAL = 'VERTICAL'

/* ----------------------------------------------- */

testBoard()

export default testBoard