import { expect, test, describe } from "bun:test";
import { InsertionSort } from ".";

describe("insertion sort must correct", () => {
  test("should be have function", () => {
    const expected = InsertionSort([1, 2]);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("should be correct to sorting daa", () => {
    const expected = InsertionSort([7, 4, 5, 1, 2, 3]);
    const result = [1, 2, 3, 4, 5, 7];
    expect(expected).toEqual(result);
  });
});
