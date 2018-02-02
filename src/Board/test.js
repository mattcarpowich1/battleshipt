/* RUN `cd src/Board && npx babel-node test.js` TO EXECUTE TESTS */
import Board from './Board.js'

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

testBoardSizes(BOARD_SIZES)

// HORIZONTAL POSITIONS TEST
console.log(
  HR, 
  `\nHORIZONTAL POSITIONS: SHIP_SIZE = ${SMALL_SHIP_SIZE},`,
  `BOARD_SIZE = ${DEFAULT_BOARD_SIZE}`
)
const b1 = new Board(DEFAULT_BOARD_SIZE)
console.log(b1.getAvailableCoordinates(SMALL_SHIP_SIZE, 'HORIZONTAL'))

// VERTICAL POSITIONS TEST
console.log(
  HR, 
  `\nVERTICAL POSITIONS: SHIP_SIZE = ${SMALL_SHIP_SIZE},`,
  `BOARD_SIZE = ${DEFAULT_BOARD_SIZE}`
)
const b2 = new Board(DEFAULT_BOARD_SIZE)
console.log(b2.getAvailableCoordinates(SMALL_SHIP_SIZE, 'VERTICAL'))

 
/* ----------------------------------------------- */
// TESTING FUNCTIONS

function testBoardSizes (sizes) {
  sizes.forEach(size => {
    let b = new Board(size)
    console.log(HR, `\nPRINTING BOARD SIZE ${size}`)
    b.printBoard()
  })
}