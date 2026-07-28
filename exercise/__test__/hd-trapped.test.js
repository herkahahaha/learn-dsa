import { describe, test, expect } from "bun:test";
import {
  TrappedWater,
  TrappedWaterStack,
  TrappedWater2pointer,
} from "../hard/trapping-rain-water";

describe("Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.", () => {
  test("should return value of water inside array with brute approach", () => {
    const expected = TrappedWater([3, 1, 4, 0, 2]);
    const result = 4;
    expect(expected).toEqual(result);
  });

  test("should return value of water inside array with stack", () => {
    const expected = TrappedWaterStack([3, 0, 2, 0, 4]);
    const result = 7;
    expect(expected).toEqual(result);
  });

  test("should return value of water inside array with 2 pointer", () => {
    const expected = TrappedWater2pointer([3, 1, 2]);
    const result = 1;
    expect(expected).toEqual(result);
  });
});
