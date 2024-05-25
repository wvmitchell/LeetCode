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

export function maxPathSum(root: TreeNode | null, knownMax?: number): number {
  knownMax = knownMax || root.val

  if(root?.left && root?.right) {
    const leftMax = maxPath(root.left)
    const rightMax = maxPath(root.right)
    knownMax = Math.max(knownMax, leftMax + rightMax + root.val)
    maxPathSum(root.left, knownMax)
    maxPathSum(root.right, knownMax)
  }

  return knownMax
}

function maxPath(root: TreeNode | null): number {
  if(!root) {
    return 0
  } else if (!root.left && !root.right) {
    return root.val
  } else {
    return Math.max(maxPath(root.left), maxPath(root.right)) + root.val
  }
}
