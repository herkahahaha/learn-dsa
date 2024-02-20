import { describe, expect, test } from "bun:test";
import { DuplicatArray } from "../remove-duplicat";

describe("Given an integer array nums sorted in non-decreasing order, DuplicatArrayove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.", () => {
  test("should be given an array", () => {
    const arr = [1, 2];
    const expected = DuplicatArray(arr);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("should be given an array without duplicat data", () => {
    const arr = [1, 1, 2];
    const expected = DuplicatArray(arr);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });
});
