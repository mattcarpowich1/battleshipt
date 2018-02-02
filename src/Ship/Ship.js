class Ship {
  constructor (size) {
    if (size < MIN_SIZE || size > MAX_SIZE) {
      throw new Error('INVALID SIZE OF SHIP.')
    }
    this.shipSize = size
    this.position = [null, null]
    this.orientation = ''
    this.isActive = false
    this.hits = Array(size).fill(false)
  }

  getSize () {
    return this.shipSize
  }

  getOrientation () {
    return this.orientation
  }

  setOrientation (o) {
    if (!ORIENTATIONS.includes(o)) {
      throw new Error('INVALID SHIP ORIENTATION')
    }
    this.orientation = o
  }

  activate () {
    this.isActive = true
  }

  deactivate () {
    this.isActive = false
  }

}

const MIN_SIZE = 1
const MAX_SIZE = 2
const ORIENTATIONS = ['VERTICAL', 'HORIZONTAL']

export default Ship