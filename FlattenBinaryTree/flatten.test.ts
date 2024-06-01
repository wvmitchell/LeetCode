import { flatten, TreeNode } from './flatten';

describe('flatten', () => {
  it('should flatten a 1 level tree', () => {
    const root = new TreeNode(1);
    flatten(root);
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
  })

  it('should flatten a 2 level tree', () => {
    const root = new TreeNode(1, new TreeNode(2));
    flatten(root);
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right.val).toBe(2);
    expect(root.right.left).toBeNull();
    expect(root.right.right).toBeNull();
  })

  it('should flatten a balanced 2 level tree', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    flatten(root);
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right.val).toBe(2);
    expect(root.right.left).toBeNull();
    expect(root.right.right.val).toBe(3);
    expect(root.right.right.left).toBeNull();
    expect(root.right.right.right).toBeNull();
  })

  it('should flatten a 3 level tree', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4));
    flatten(root);
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right.val).toBe(2);
    expect(root.right.left).toBeNull();
    expect(root.right.right.val).toBe(3);
    expect(root.right.right.left).toBeNull();
    expect(root.right.right.right.val).toBe(4);
    expect(root.right.right.right.left).toBeNull();
    expect(root.right.right.right.right).toBeNull();
  })
})
