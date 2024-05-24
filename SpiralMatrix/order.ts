export function spiralOrder(matrix: number[][]): number[] {
  let ans: number[] = [];

  while(matrix.length > 0) {
    ans = [...ans, ...matrix.shift()]

    if(matrix.length > 0) {
      let innerRows = matrix.slice(0, matrix.length - 1)

      for(let row of innerRows) {
        ans.push(row.pop())
      }

      ans = [...ans, ...matrix.pop().reverse()]

      for(let row of innerRows.reverse()) {
        ans.push(row.shift())
      }
    }
  }

  return ans
}
