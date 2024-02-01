import { describe, test, expect } from "bun:test";
import { BinarySearch } from ".";

describe("binary search", () => {
  test("should be have func", () => {
    const expected = BinarySearch([100, 101, 102, 1000, 1001, 1002], 102);
    const result = 2;
    expect(expected).toEqual(result);
  });

  test("should be have return -1 if data not found", () => {
    const expected = BinarySearch([100, 101, 102, 1000, 1001, 1002], 103);
    const result = -1;
    expect(expected).toEqual(result);
  });
});
