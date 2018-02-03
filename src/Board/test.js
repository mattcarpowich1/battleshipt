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
  TEST_COORDINATES.forEach(location => {
    b.setCoordinates(location[0], location[1], true)
  })
  let status
  const coordinates = b.getAvailableCoordinates(shipSize, o)
  status = coordinates.includes(OCCUPIED_LOCATIONS[o])
  ? 'FAILED' 
  : 'PASSED'
  console.log(`${status} ${o} POSITIONING`)
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
const TEST_COORDINATES = [
  [3, 2],
  [0, 0],
  [1, 0]
]
const OCCUPIED_LOCATIONS = {
  [HORIZONTAL] : [...TEST_COORDINATES, [2, 2]],
  [VERTICAL] : [...TEST_COORDINATES, [3, 1]]
}

/* ----------------------------------------------- */

testBoard()

export default testBoard