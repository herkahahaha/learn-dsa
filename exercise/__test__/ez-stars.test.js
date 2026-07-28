import { describe, test, expect } from "bun:test";
import { StarStringArr, Starstring } from "../stars";

describe("manipulated integer into * depends length of data", () => {
  test("should be return empty string if 0 data", () => {
    const expected = Starstring(0);
    const result = [];
    expect(expected).toEqual(result);
  });
  test("should be return [*, **, ***] if 3 data", () => {
    const expected = Starstring(3);
    const result = ["*", "**", "***"];
    expect(expected).toEqual(result);
  });

  test("should be return [**, ***, *******] if [2, 3, 7]", () => {
    const expected = StarStringArr([2, 3, 7]);
    const result = ["**", "***", "*******"];
    expect(expected).toEqual(result);
  });
});
