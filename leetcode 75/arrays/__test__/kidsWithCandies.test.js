import { kidsWithCandies, kidsWithCandies2 } from "../ez-kidsWithCandies";

describe("kidsWithCandies", () => {
  test("should return [true, true, true, false, true]", () => {
    const result = kidsWithCandies([2, 3, 5, 1, 3], 3);
    expect(result).toEqual([true, true, true, false, true]);
    expect(result.length).toBe(5);
  });

  test("should return [true, false, true, false, true]", () => {
    const result = kidsWithCandies([12, 3, 12], 1);
    expect(result).toEqual([true, false, true]);
    expect(result.length).toBe(3);
  });

  test("should return [true, true, true, false, true]", () => {
    const result = kidsWithCandies2([2, 3, 5, 1, 3], 3);
    expect(result).toEqual([true, true, true, false, true]);
    expect(result.length).toBe(5);
  });

  test("should return [true, false, true, false, true]", () => {
    const result = kidsWithCandies2([12, 3, 12], 1);
    expect(result).toEqual([true, false, true]);
    expect(result.length).toBe(3);
  });
});
