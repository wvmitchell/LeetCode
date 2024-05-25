class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?:TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export function buildTree(nums: number[], index: number): TreeNode | null {
  if (index >= nums.length || nums[index] === null) {
    return null
  }
  const root = new TreeNode(nums[index])
  root.left = buildTree(nums, 2 * index + 1)
  root.right = buildTree(nums, 2 * index + 2)
  return root
}

export function maxPathSum(root: TreeNode | null, paths: number[] = []): number {
  if(!root) {
    return 0
  } else {
    const leftMax = Math.max(maxPath(root.left), 0)
    const rightMax = Math.max(maxPath(root.right), 0)
    paths.push(leftMax + rightMax + root.val)
    maxPathSum(root.left, paths)
    maxPathSum(root.right, paths)
    return Math.max(...paths)
  }
}

function maxPath(root: TreeNode | null): number {
  if(!root) {
    return 0
  } else if (!root.left && !root.right) {
    return root.val
  } else {
    return Math.max(maxPath(root.left), maxPath(root.right), 0) + root.val
  }
}
