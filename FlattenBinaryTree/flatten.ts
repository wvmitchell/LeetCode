export class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

export function flatten(root: TreeNode | null): void {
  // set current node to head
  // while current node has value
  // if current node has a left node
  // find the right most node on the left
  // set right most node's right to current node's right
  // set current node's right to current node's left
  // set current to current.right

  let currentNode = root

  while(currentNode) {
    if(currentNode.left) {
      let rightmostLeft = currentNode.left
      while(rightmostLeft.right) {
        rightmostLeft = rightmostLeft.right
      }
      rightmostLeft.right = currentNode.right
      currentNode.right = currentNode.left
      currentNode.left = null
    }
    currentNode = currentNode.right
  }
};
