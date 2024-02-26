class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  // add function insert value to binarytree
  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // call insertnode its self func
      this.insertNode(this.root, newNode);
    }
  }

  // recursif func for insert the node
  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // search for value inside bt
  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Delete function for remove the value from Binary Tree
  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(root: TreeNode | null, value: number): TreeNode | null {
    if (root === null) {
      return root;
    }

    // search the bt to finding the value same with Node
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node with know value

      // if node dont have child or only 1 child
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // if Node have 2 child
      // Find min Node in right of subtree (or max Node in left subtree)
      root.value = this.findMinVal(root.right);

      //  Remove less Node in right of subtree
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }

  private findMinVal(node: TreeNode): number {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }
}

const binarytree = new BinaryTree();

export default binarytree;
