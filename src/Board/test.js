import Board from './Board.js'

function testBoard () {
  // PRINT DIFFERENT SIZE BOARDS
  testBoardSizes(BOARD_SIZES)

  // TEST HORIZONTAL POSITIONING 
  console.log(
    HR, 
    `\nHORIZONTAL POSITIONS: SHIP_SIZE = ${SMALL_SHIP_SIZE},`,
    `BOARD_SIZE = ${SMALL_BOARD_SIZE}`
  )
  const b1 = new Board(SMALL_BOARD_SIZE)
  b1.setCoordinates(3, 2, true)
  b1.setCoordinates(0, 0, true)
  b1.setCoordinates(1, 0, true)
  console.log(b1.getAvailableCoordinates(SMALL_SHIP_SIZE, 'HORIZONTAL'))

  // TEST VERTICAL POSITIONING
  console.log(
    HR, 
    `\nVERTICAL POSITIONS: SHIP_SIZE = ${SMALL_SHIP_SIZE},`,
    `BOARD_SIZE = ${SMALL_BOARD_SIZE}`
  )
  const b2 = new Board(SMALL_BOARD_SIZE)
  b2.setCoordinates(0, 0, true)
  b2.setCoordinates(4, 4, true)
  b2.setCoordinates(2, 2, true)
  console.log(b2.getAvailableCoordinates(SMALL_SHIP_SIZE, 'VERTICAL'))
}
 
/* ----------------------------------------------- */
// TESTING FUNCTIONS

function testBoardSizes (sizes) {
  sizes.forEach(size => {
    let b = new Board(size)
    console.log(HR, `\nPRINTING BOARD SIZE ${size}`)
    b.printBoard()
  })
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

/* ----------------------------------------------- */

testBoard()

export default testBoard