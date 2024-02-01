import { SearchLinear } from ".";
import { describe, expect, test } from "bun:test";

describe(" sesarch linear", () => {
  test("should be have function file", () => {
    const expected = SearchLinear([2, 3], 1);
    expect(expected).toEqual(undefined);
  });

  test("should be have function file", () => {
    const expected = SearchLinear([2, 8, 9, 7, 5], 9);
    const result = 2;
    expect(expected).toEqual(result);
  });
});
