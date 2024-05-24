import { candy } from './candy';

describe('candy', () => {
  it('should return 0 when ratings is empty', () => {
    expect(candy([])).toBe(0)
  })

  xit('should return 1 when ratings has only one element', () => {
    expect(candy([1])).toBe(1)
  })

  xit('should return 2 when ratings has two elements with the same value', () => {
    expect(candy([1, 1])).toBe(2)
  })

  xit('should return 3 when ratings has two elements with different values', () => {
    expect(candy([2, 1])).toBe(3)
  })

  xit('should return 3 when ratings has same two elements in reverse order', () => {
    expect(candy([1, 2])).toBe(3)
  })

  xit('should return 4 when ratings has three elements with different values', () => {
    expect(candy([1, 2, 1])).toBe(4)
  })

  xit('should return 4 when ratings has three elements where the second and third elements have the same value', () => {
    expect(candy([1, 2, 2])).toBe(4)
  })

  xit('should return 5 when ratings has three elements where middle element is zero', () => {
    expect(candy([1, 0, 2])).toBe(5)
  })
})
