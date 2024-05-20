import { characterReplacement } from './characterReplacement';

describe('characterReplacement', () => {
  it('should return 0 when the string is empty', () => {
    expect(characterReplacement('', 1)).toBe(0);
  })

  it('should return 1 when the string is "A" and k is 0', () => {
    expect(characterReplacement('A', 0)).toBe(1);
  })

  it('should return 1 when the string is "A" and k is 1', () => {
    expect(characterReplacement('A', 1)).toBe(1);
  })

  it('should return 2 when the string is "AB" and k is 1', () => {
    expect(characterReplacement('AB', 1)).toBe(2);
  })

  it('should return 1 when the string is "AB" and k is 0', () => {
    expect(characterReplacement('AB', 0)).toBe(1);
  })

  it('should return 1 when the string is "ABC" and k is 0', () => {
    expect(characterReplacement('ABC', 0)).toBe(1);
  })

  it('should return 2 when the string is "ABC" and k is 1', () => {
    expect(characterReplacement('ABC', 1)).toBe(2);
  })

  it('should return 3 when the string is "ABC" and k is 2', () => {
    expect(characterReplacement('ABC', 2)).toBe(3);
  })

  it('should return 4 when the string is "ABAB" and k is 2', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4);
  })

  it('should return 4 when the string is "AABABBA" and k is 1', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4);
  })
})
