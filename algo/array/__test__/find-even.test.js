import { describe, expect, test } from "bun:test";
import { FindEvenNumbers } from "../find-even-number";

describe("Given an array nums of integers, return how many of them contain an even number of digits", () => {
  test("should given total even number instead ", () => {
    const expected = FindEvenNumbers([12, 22, 66, 8888]);
    const result = 4;
    expect(expected).toEqual(result);
  });
  test("should given total even number instead ", () => {
    const expected = FindEvenNumbers([12, 345, 2, 6, 7896]);
    const result = 2;
    expect(expected).toEqual(result);
  });
});
