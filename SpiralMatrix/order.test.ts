import { spiralOrder } from './order';

describe('spiralOrder', () => {
  it('should return an empty array if the input is an empty array', () => {
    expect(spiralOrder([])).toEqual([]);
  })

  it('should return the correct result for a 1x1 matrix', () => {
    expect(spiralOrder([[1]])).toEqual([1]);
  })

  it('should return the correct result for a 2x2 matrix', () => {
    expect(spiralOrder([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);
  })

  it('should return the correct result for a 3x3 matrix', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  })

  it('should return the correct result for a 3x4 matrix', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  })

  it('should return the correct result for a 4x3 matrix', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])).toEqual([1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]);
  })

  it('should return the correct result for a 4x4 matrix', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  })
})
