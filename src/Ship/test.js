import Ship from './Ship.js'

function testShip () {
  // INVALID SHIP SIZES
  console.log(HR, '\nTESTING INVALID SHIP SIZES')
  testShipSize(-1, FAIL)
  testShipSize(0, FAIL)
  testShipSize(8, FAIL)

  // VALID SHIP SIZES
  console.log(HR, '\nTESTING VALID SHIP SIZES')
  testShipSize(1, PASS)
  testShipSize(2, PASS)

  // INVALID SHIP ORIENTATIONS
  console.log(HR, '\nTESTING INVALID SHIP ORIENTATIONS')
  testShipOrientation('horizontal', FAIL)
  testShipOrientation('', FAIL)
  testShipOrientation('VERTICA', FAIL)

  // VALID SHIP ORIENTATIONS
  console.log(HR, '\nTESTING VALID SHIP ORIENTATIONS')
  testShipOrientation(HORIZONTAL, PASS)
  testShipOrientation(VERTICAL, PASS)
}

/* ----------------------------------------------- */
// HELPER FUNCTIONS

function testShipSize (size, shouldPass) {
  try {
    const ship = new Ship(size)
    if (shouldPass) {
      console.log(`PASSED WITH SIZE ${ship.getSize()}`)
    }
  } catch (err) {
    if (!shouldPass) {
      console.log(`PASSED WITH SIZE ${size}`)
    } else {
      console.log(`FAILED: ${err}`)
    }
    return
  }
}

function testShipOrientation (o, shouldPass) {
  try {
    const ship = new Ship(1)
    ship.setOrientation(o)
    if (shouldPass) {
      console.log(`PASSED WITH ORIENTATION ${ship.getOrientation()}`)
    }
  } catch (err) {
    if (!shouldPass) {
      console.log(`PASSED WITH ORIENTATION "${o}"`)
    } else {
      console.log(`FAILED: ${err}`)
    }
    return
  }
}

/* ----------------------------------------------- */
// CONSTANTS

const HR = Array(50).fill('-').join('')
const HORIZONTAL = 'HORIZONTAL'
const VERTICAL = 'VERTICAL'
const PASS = true
const FAIL = false

/* ----------------------------------------------- */

testShip()

export default testShip