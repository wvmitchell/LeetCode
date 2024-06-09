import { lengthOfLastWord } from './length';

describe('lengthOfLastWord', () => {
  it('should return 5', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  it('should return 0', () => {
    expect(lengthOfLastWord('')).toBe(0);
  });

  it('should return 5', () => {
    expect(lengthOfLastWord('Hello')).toBe(5);
  });

  it('should return 5', () => {
    expect(lengthOfLastWord('Hello ')).toBe(5);
  });

  it('should return 5', () => {
    expect(lengthOfLastWord('Hello World ')).toBe(5);
  });

  it('should return 3', () => {
    expect(lengthOfLastWord("the quick fox")).toBe(3);
  })

  it('should return 3 with spaces at the end', () => {
    expect(lengthOfLastWord("the quick fox ")).toBe(3);
  })

  it('should return 6', () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  })

  it('should return 4', () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  })
})
