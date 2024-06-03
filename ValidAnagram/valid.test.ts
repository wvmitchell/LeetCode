import { isAnagram } from './valid';

describe('isAnagram', () => {
  it('should return true for 1 character strings', () => {
    expect(isAnagram('a', 'a')).toBe(true);
  })

  it('should return false for 2 different character strings', () => {
    expect(isAnagram('a', 'b')).toBe(false);
  })

  it('should return false if the input strings are not anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  })

  it('should return true if the input strings are anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  })

  it('should return false if the input strings are different lengths', () => {
    expect(isAnagram('list', 'silent')).toBe(false);
  })
})
