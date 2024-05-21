import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf', () => {
  it('should return the product of all elements in 2 element array, except itself', () => {
    expect(productExceptSelf([1, 2])).toEqual([2, 1]);
  })

  it('should return the product of all elements in 3 element array, except itself', () => {
    expect(productExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
  })

  it('should return the product of all elements in 4 element array, except itself', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  })

  it('should return the product of all elements in 5 element array with negative numbers, except itself', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  })
})
