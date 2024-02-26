class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const lowlestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowlestCommonAncestor(root.left, p, q);
  const right = lowlestCommonAncestor(root.right, p, q);

  console.log("left", left);
  // console.log("right", right);
  // console.log("root", root);

  if (left && right) {
    return root;
  }

  return left || right;
};

export default TreeNode;
