export function isValidSudoku(board: string[][]): boolean {
  let rows = board
  let cols = rows[0].map((_, i) => rows.map(row => row[i]))
  let squares = []
  rows.forEach((row, i) => row.forEach((_, j) => {
    let squareIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
    squares[squareIndex] = squares[squareIndex] || []
    squares[squareIndex].push(board[i][j])
  }))

  return rows.every(row => isValidGroup(row)) &&
    cols.every(col => isValidGroup(col)) &&
    squares.every(square => isValidGroup(square))
}

function isValidGroup(group: string[]): boolean {
  let nums = group.filter(num => num !== '.')
  return new Set(nums).size === nums.length
}
