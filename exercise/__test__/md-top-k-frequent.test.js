import { describe, test, expect } from "bun:test";
import { TopKFrequent2 } from "../medium/top-k-frequent";

describe("Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.", () => {
  // test("should given top frequent [1,2] when expected [1,1,1,2,2,3] with k=2", () => {
  //   const expected = TopKFrequent([1, 1, 1, 2, 2, 3], 2);
  //   const result = [1, 2];
  //   expect(expected).toEqual(result);
  // });
  test("should given top frequent [1,2] when expected [1,1,1,2,2,3] with k=2", () => {
    const expected = TopKFrequent2([1, 1, 1, 2, 2, 3], 2);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });
  test("should given top frequent [1] when expected [1] with k=1", () => {
    const expected = TopKFrequent2([1], 1);
    const result = [1];
    expect(expected).toEqual(result);
  });
});
