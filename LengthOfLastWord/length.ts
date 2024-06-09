export function lengthOfLastWord(str: string): number {
  let word = str.match(/\w+(?=\s*$)/)
  return word ? word[0].length : 0;
}
