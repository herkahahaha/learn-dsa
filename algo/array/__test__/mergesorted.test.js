import { describe, test, expect } from "bun:test";
import { mergeSortedArray, mergeSortedArray2 } from "../merge-sorted";

describe("You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.", () => {
  test("The arrays we are merging are [] and [1].", () => {
    const expected = mergeSortedArray([0], 0, [1], 1);
    const result = [1];
    expect(expected).toEqual(result);
  });
  test("The arrays we are merging are [1,2,3,0,0,0] and [2,5,6] with m=3 and n=3.", () => {
    const expected = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
    const result = [1, 2, 2, 3, 5, 6];
    expect(expected).toEqual(result);
  });

  test("The arrays we are merging are [1,2,3,0,0,0] and [2,5,6] with m=3 and n=3.", () => {
    const expected = mergeSortedArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
    const result = [1, 2, 2, 3, 5, 6];
    expect(expected).toEqual(result);
  });
});
