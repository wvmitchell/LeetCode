import { TreeNode } from './tree-node';

export function pathSum(root: TreeNode | null, targetSum: number, path: number[] = [], known: number[][] = []): number[][] {

  if(!root) {
    // do nothing
  } else if(!root.left && !root.right) {
    let currentPath = [...path, root.val]
    const sum = currentPath.reduce((sum, num) => sum + num)
    if(sum == targetSum) {
      console.log(currentPath)
      known.push(currentPath)
    } 
  } else {
    let currentPath = [...path, root?.val]
    pathSum(root.left, targetSum, currentPath, known)
    pathSum(root.right, targetSum, currentPath, known)
  }

  return known
}
