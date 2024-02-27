import { describe, test, expect } from "bun:test";
import TreeNode, { lowlestCommonAncestor } from "../medium/lca-binary-tree";

describe(`he lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).`, () => {
  test(`Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.`, () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    // const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const p = root.left;
    const q = root.right;
    const expected = lowlestCommonAncestor(root, p, q);
    const result = 3;
    expect(expected.val).toEqual(result);
  });

  test(`Input: root = [1,2], p = 1, q = 2
Output: 1
Explanation: The LCA of nodes 1 and 2 is 1.`, () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(1);

    // const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const p = root.left;
    const q = root.right;
    const expected = lowlestCommonAncestor(root, p, q);
    const result = 1;
    expect(expected.val).toEqual(result);
  });
});
