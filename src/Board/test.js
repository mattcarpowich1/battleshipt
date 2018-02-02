/* RUN `cd src/Board && npx babel-node test.js` TO EXECUTE TESTS */
import Board from './Board.js'

const DEFAULT_BOARD_SIZE = 8
const SMALL_BOARD_SIZE = 5
const LARGE_BOARD_SIZE = 10

const HR = Array(50).fill('-').join('')

// PRINT DEFAULT BOARD SIZE
const b1 = new Board(DEFAULT_BOARD_SIZE)
console.log(HR, '\nTESTING BOARD SIZE:', b1.getSize())
b1.printBoard()

// PRINT SMALL BOARD SIZE
const b2 = new Board(SMALL_BOARD_SIZE)
console.log(HR, '\nTESTING BOARD SIZE:', b2.getSize())
b2.printBoard()
