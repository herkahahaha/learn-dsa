import { describe, test, expect } from "bun:test";
import {
  ArrayFromPermutation,
  ArrayFromPermutation2,
} from "../array-from-permutation";

describe("given zero permutation, build an array of the same length where ans[i] = ans[ans[i]]", () => {
  test(`
The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]] = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]  
`, () => {
    const expected = ArrayFromPermutation([0, 2, 1, 5, 3, 4]);
    const result = [0, 1, 2, 4, 5, 3];
    expect(expected).toEqual(result);
  });
  test(`using foreach`, () => {
    const expected = ArrayFromPermutation2([0, 2, 1, 5, 3, 4]);
    const result = [0, 1, 2, 4, 5, 3];
    expect(expected).toEqual(result);
  });
  test(`should be return empty if ans.length = 0`, () => {
    const expected = ArrayFromPermutation([]);
    const result = [];
    expect(expected).toEqual(result);
  });
});
