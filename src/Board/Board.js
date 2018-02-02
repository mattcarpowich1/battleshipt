class Board {
  constructor (size) {
    this.size = size
    this.coordinates = Array(size)
    .fill([])
    .map(fillBoard)
  }

  getSize () {
    return this.size
  }

  printBoard () {
    console.log(this.coordinates)
  }
}

function fillBoard (item, index, arr) {
  return Array(arr.length).fill(false)
}

export default Board