export function isAnagram(s: string, t: string) {
  if(s.length !== t.length) return false

  const sMap = makeHashMap(s)
  const tMap = makeHashMap(t)
  const sKeys = Object.keys(sMap)

  return sKeys.every(letter => sMap[letter] === tMap[letter])
}

function makeHashMap(s: string): { [key: string]: number } {
  let chars = s.split('')

  return chars.reduce((counts, char) => {
    counts[char] ? counts[char] += 1 : counts[char] = 1
    return counts
  }, {})
}
