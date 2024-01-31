import { expect, test, describe } from "bun:test";
import { MergeSort } from ".";

describe("merge sort must correct", () => {
  test("if the array have 1 or 0 element, its already sorted", () => {
    const expected = MergeSort([1]);
    const result = [1];
    expect(expected).toEqual(result);
  });

  test("if the array have more than 1 element, its already sorted", () => {
    const expected = MergeSort([3, 7, 4, 6, 5]);
    const result = [3, 4, 5, 6, 7];
    expect(expected).toEqual(result);
  });
});
