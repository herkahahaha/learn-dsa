import { describe, test, expect } from "bun:test";
import binaryTree from "./binarytree";
describe("binary tree", () => {
  test("should be can add value and search to binarytree", () => {
    binaryTree.insert(7);
    binaryTree.insert(1);
    binaryTree.insert(5);
    binaryTree.insert(9);
    console.log("adaa ga ?", binaryTree.search(7));
    const expected = binaryTree.search(7);
    expect(expected).toBeTrue();
  });

  test("should be can delete value from binarytree", () => {
    binaryTree.insert(11);
    binaryTree.insert(13);
    binaryTree.insert(15);
    binaryTree.insert(9);
    binaryTree.delete(15);
    const expected = binaryTree.search(15);
    console.log("adaa ga ?", binaryTree.search(15));
    expect(expected).toBeFalse();
  });
});
