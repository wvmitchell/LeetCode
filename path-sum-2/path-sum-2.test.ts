import {pathSum} from './path-sum-2';
import {Tree} from './tree-node';

describe('pathSum', () => {
  it('should return the correct path sum when the tree has only one node', () => {
    const tree = new Tree([1])
    expect(pathSum(tree.root, 1)).toEqual([[1]])
  })

  it('should return the correct path sum with 3 nodes and two paths', () => {
    const tree = new Tree([1,2,2])
    expect(pathSum(tree.root, 3)).toEqual([[1,2],[1,2]])
  })

  it('should return the correct path sum with 3 nodes and no paths', () => {
    const tree = new Tree([1,2,2])
    expect(pathSum(tree.root, 4)).toEqual([])
  })

  it('should return the correct path sum with 3 nodes and one paths', () => {
    const tree = new Tree([1,2,3])
    expect(pathSum(tree.root, 3)).toEqual([[1,2]])
  })

  it.only('should return the correct path sum', () => {
    const tree = new Tree([5,4,8,11,null,13,4,7,2,null,null,5,1])
    expect(pathSum(tree.root, 22)).toEqual([[5,4,11,2],[5,8,4,5]])
  })
})
