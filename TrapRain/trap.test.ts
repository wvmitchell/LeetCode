import { trap } from './trap';

describe('trap', () => {
  it('should return 0 if the input is empty', () => {
    expect(trap([])).toBe(0)
  })

  it('should return 0 if the input has only one element', () => {
    expect(trap([1])).toBe(0)
  })

  it('should return 0 if the input has three elements with no water trapped', () => {
    expect(trap([1, 2, 3])).toBe(0)
  })

  it('should return 0 if the input has three elements reversed with no water trapped', () => {
    expect(trap([3, 2, 1])).toBe(0)
  })

  it('should return 1 if the input has three elements with water trapped', () => {
    expect(trap([3, 2, 3])).toBe(1)
  })

  it('should return 2 if the input has four elements with water trapped', () => {
    expect(trap([3, 2, 2, 3])).toBe(2)
  })

  it('should return 1 if the input has three different elements with water trapped', () => {
    expect(trap([1, 0, 2])).toBe(1)
  })

  it('should return 1 if the input has six elements with water trapped', () => {
    expect(trap([0, 1, 0, 2, 1, 0])).toBe(1)
  })
})
