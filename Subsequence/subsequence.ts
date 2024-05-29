export function isSubsequence(s: string, t: string): boolean {
  let [start, end] = [0, t.length - 1]
  let test = s

  while(start <= end) {
    if(t[start] == test[0]) {
      test = test.slice(1)
      start++
    } else if(t[end] == test[test.length - 1]) {
      test = test.slice(0, test.length - 1)
      end--
    } else {
      start++
      end--
    }
  }

  return test.length == 0
}
