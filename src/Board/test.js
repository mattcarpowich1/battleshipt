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

testBoardSizes(BOARD_SIZES)

//  
/* ----------------------------------------------- */
// TESTING FUNCTIONS

function testBoardSizes (sizes) {
  sizes.forEach(size => {
    let b = new Board(size)
    console.log(HR, `\nPRINTING BOARD SIZE ${size}`)
    b.printBoard()
  })
}