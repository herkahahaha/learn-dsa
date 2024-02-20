import { describe, expect, test } from "bun:test";
import { SquaresArray } from "../squares-array";

describe("Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.", () => {
  test("After squaring, the array becomes [5,1,2,3]. After sorting, it becomes [1,4,9,25]", () => {
    const expected = SquaresArray([5, 1, 2, 3]);
    const result = [1, 4, 9, 25];
    expect(expected).toEqual(result);
  });
  test("After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100]", () => {
    const expected = SquaresArray([-4, -1, 0, 3, 10]);
    const result = [0, 1, 9, 16, 100];
    expect(expected).toEqual(result);
  });

  test("After squaring, the array becomes [-7,-3,2,3,11]. After sorting, it becomes [4,9,9,49,121]", () => {
    const expected = SquaresArray([-7, -3, 2, 3, 11]);
    const result = [4, 9, 9, 49, 121];
    expect(expected).toEqual(result);
  });
});
