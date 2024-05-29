import { isSubsequence } from './subsequence';

describe('isSubsequence', () => {
  it('should return true if s is empty', () => {
    expect(isSubsequence('', 'abc')).toBe(true);
  })

  it('should return true if s and t are empty', () => {
    expect(isSubsequence('', '')).toBe(true);
  })

  it('should return false if t is empty and s is not', () => {
    expect(isSubsequence('abc', '')).toBe(false);
  })

  it('should return true if s is a single character and is in t', () => {
    expect(isSubsequence('a', 'abc')).toBe(true);
  })

  it('should return false if s is a single character and is not in t', () => {
    expect(isSubsequence('d', 'abc')).toBe(false);
  })

  it('should return true if s is a consecutive subsequence of t', () => {
    expect(isSubsequence('abc', 'babcd')).toBe(true);
  })

  it('should return true if s is a non-consecutive subsequence of t', () => {
    expect(isSubsequence('abc', 'abbdc')).toBe(true);
  })

  it('should return false if s is not a subsequence of t', () => {
    expect(isSubsequence('abc', 'acdb')).toBe(false);
  })
})
