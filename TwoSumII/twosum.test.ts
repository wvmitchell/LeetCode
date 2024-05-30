import { twoSum } from './twosum';

describe('twoSum', () => {
  it('should return [1, 2] for numbers = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  })

  it('should return [1, 3] for numbers = [2, 7, 11, 15], target = 13', () => {
    expect(twoSum([2, 7, 11, 15], 13)).toEqual([1, 3]);
  })

  it('should return [1,3] for numbers = [2, 3, 4], target = 6', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  })

  it('should return [1,2] for numbers = [-1, 0], target = -1', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  })
})
