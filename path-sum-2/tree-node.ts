export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?:TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export class Tree {
  root: TreeNode | null
  constructor(array: number[]) {
    this.root = this.buildTree(array, 0);
  }

  buildTree(array: number[], index: number): TreeNode | null {
  }
}
