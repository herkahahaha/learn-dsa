import { describe, test, expect } from "bun:test";
import { DuplicatZero, DuplicatZero2 } from "../duplicat-zero";

describe("Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.", () => {
  test("should given [] when params have empty array", () => {
    const expected = DuplicatZero([]);
    const result = [];
    expect(expected).toEqual(result);
  });
  test("should given [1,2,3] when params have [1,2,3] array", () => {
    const expected = DuplicatZero([1, 2, 3]);
    const result = [1, 2, 3];
    expect(expected).toEqual(result);
  });
  test("should given [1,0,0,2,3,0,0,4] when params have [1,0,2,3,0,4,5,0] array", () => {
    const expected = DuplicatZero([1, 0, 2, 3, 0, 4, 5, 0]);
    const result = [1, 0, 0, 2, 3, 0, 0, 4];
    expect(expected).toEqual(result);
  });
  test("should given [1,0,0,2,3,0,0,4] when params have [1,0,2,3,0,4,5,0] array", () => {
    const expected = DuplicatZero2([1, 0, 2, 3, 0, 4, 5, 0]);
    const result = [1, 0, 0, 2, 3, 0, 0, 4];
    expect(expected).toEqual(result);
  });
});
