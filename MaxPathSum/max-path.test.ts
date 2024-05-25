import { buildTree, maxPathSum } from './max-path'

describe('maxPathSum', () => {
  it('should return 1 for single node', () => {
    const nums = [1]
    const root = buildTree(nums, 0)
    expect(maxPathSum(root)).toBe(1)
  })

  it('should return 6', () => {
    const nums = [1, 2, 3]
    const root = buildTree(nums, 0)
    expect(maxPathSum(root)).toBe(6)
  })

  it('should return 18', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const root = buildTree(nums, 0)
    expect(maxPathSum(root)).toBe(18)
  })
})
