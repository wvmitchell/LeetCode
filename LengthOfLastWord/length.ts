export function lengthOfLastWord(str: string): number {
  let word = str.trim().match(/(\w+)$/);
  return word ? word[0].length : 0;
}
