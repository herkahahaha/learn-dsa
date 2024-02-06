import { describe, test, expect } from "bun:test";
import { twoSum } from ".";

describe("two sum sample using hastable", () => {
  test("should return [0,1] when given ([1,2],3)", () => {
    const expected = 3;
    const result = [0, 1];
    expect(twoSum([1, 2], expected)).toEqual(result);
  });

  test("should return [0,2] when given ([1,2,3],4)", () => {
    const expected = 4;
    const result = [0, 2];
    expect(twoSum([1, 2, 3], expected)).toEqual(result);
  });

  test("should return [1,2] when given ([3,2,4],6)", () => {
    const expected = 6;
    const result = [1, 2];
    expect(twoSum([3, 2, 4], expected)).toEqual(result);
  });
});
