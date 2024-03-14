import { describe, test, expect } from "bun:test";
import { PalindromeLinkedList } from "../palindrome-linkedlist";

describe("Given the head of a singly linked list, return true if it is a palindrome or false otherwise.", () => {
  // test("should return boolean false, when given head = [1,2]", () => {
  //   const expected = PalindromeLinkedList([1, 2]);
  //   expect(expected).toBeFalse();
  // });
  test("should return boolean true, when given head = [1,2,2,1]", () => {
    const expected = PalindromeLinkedList([1, 2, 2, 1]);
    expect(expected).toBeTrue();
  });
});
