import { expect, test, describe } from "bun:test";
import { BubbleSort } from ".";

describe("testing bubble sort", () => {
  test("sorting array data using bubble sort", () => {
    const expected = BubbleSort([1, 2]);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("sorting random array data", () => {
    const expected = BubbleSort([2, 1]);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("sorting random array 5 data length", () => {
    const expected = BubbleSort([2, 1, 7, 4, 8]);
    const result = [1, 2, 4, 7, 8];
    expect(expected).toEqual(result);
  });
});
