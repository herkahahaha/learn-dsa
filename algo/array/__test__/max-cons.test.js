import { describe, expect, test } from "bun:test";
import { MaxCons } from "../max-consecutive-ones";

describe("Given a binary array nums, return the maximum number of consecutive 1's in the array.", () => {
  test("should he first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.", () => {
    const expected = MaxCons([1, 1, 0, 1, 1, 1]);
    const result = 3;
    expect(expected).toEqual(result);
  });
  test("should he first one digits or the middle four digits are consecutive 1s. The maximum number of consecutive 1s is 4.", () => {
    const expected = MaxCons([1, 0, 1, 1, 1, 1, 0, 1]);
    const result = 4;
    expect(expected).toEqual(result);
  });
});
