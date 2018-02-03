import Ship from './Ship.js'

function testShip () {
  // INVALID SHIP SIZES
  console.log(HR, '\nTESTING INVALID SHIP SIZES')
  testShipSize(-1, false)
  testShipSize(0, false)
  testShipSize(8, false)

  // VALID SHIP SIZES
  console.log(HR, '\nTESTING VALID SHIP SIZES')
  testShipSize(1, true)
  testShipSize(2, true)

  // INVALID SHIP ORIENTATIONS
  console.log(HR, '\nTESTING INVALID SHIP ORIENTATIONS')
  testShipOrientation('horizontal', false)
  testShipOrientation('', false)
  testShipOrientation('VERTICA', false)

  // VALID SHIP ORIENTATIONS
  console.log(HR, '\nTESTING VALID SHIP ORIENTATIONS')
  testShipOrientation('HORIZONTAL', true)
  testShipOrientation('VERTICAL', true)
}

/* ----------------------------------------------- */
// TESTING FUNCTIONS

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

/* ----------------------------------------------- */

testShip()

export default testShip