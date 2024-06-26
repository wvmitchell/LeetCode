import { candy } from './candy';

describe('candy', () => {
  it('should return 0 when ratings is empty', () => {
    expect(candy([])).toBe(0)
  })

  it('should return 1 when ratings has only one element', () => {
    expect(candy([1])).toBe(1)
  })

  it('should return 2 when ratings has two elements with the same value', () => {
    expect(candy([1, 1])).toBe(2)
  })

  it('should return 3 when ratings has two elements with different values', () => {
    expect(candy([2, 1])).toBe(3)
  })

  it('should return 3 when ratings has same two elements in reverse order', () => {
    expect(candy([1, 2])).toBe(3)
  })

  it('should return 4 when ratings has three elements with different values', () => {
    expect(candy([1, 2, 1])).toBe(4)
  })

  it('should return 4 when ratings has three elements where the second and third elements have the same value', () => {
    expect(candy([1, 2, 2])).toBe(4)
  })

  it('should return 5 when ratings has three elements where middle element is zero', () => {
    expect(candy([1, 0, 2])).toBe(5)
  })

  it('should return 12 when the ratings has 7 mixed elements', () => {
    expect(candy([1,3,2,5,8,4,6])).toBe(12)
  })
})
