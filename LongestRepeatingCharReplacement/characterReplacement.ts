export function characterReplacement(s: string, k: number): number {
  let state: { [key: string]: number } = {}
  let start = 0
  let max = 0

  for(var end = 0; end < s.length; end++) {
    if(state[s[end]]) {
      state[s[end]]++
    } else {
      state[s[end]] = 1
    }

    while(subStringLength(end, start) - mostFrequentLetterCount(state) > k) {
      state[s[start]]--
      start++
    }

    max = Math.max(subStringLength(end, start), max)
  }

  return max
}

function subStringLength(end: number, start: number): number {
  return end - start + 1
}

function mostFrequentLetterCount(state: { [key: string]: number }): number {
  return Object.entries(state).sort((a, b) => b[1] - a[1])[0][1]
}
