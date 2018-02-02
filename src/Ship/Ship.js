class Ship {
  constructor (size) {
    if (size < MIN_SIZE || size > MAX_SIZE) {
      throw new Error('Invalid size of ship.')
    }
    this.size = size
    this.position = [null, null]
    this.orientation = ''
    this.isActive = false
    this.hits = Array(size).fill(false)
  }

  getSize () {
    return this.size
  }

  getOrientation () {
    return this.orientation
  }

  setOrientation (o) {
    if (!ORIENTATIONS.includes(o)) {
      throw new Error('Invalid ship orientation.')
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