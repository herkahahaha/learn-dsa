import {
  gcdOfStrings,
  gcdOfStrings2,
} from "../ez-greatestCommonDivisorOfStrings";

describe("gcdOfStrings", () => {
  test("should return the greatest common divisor of two strings", () => {
    const result = gcdOfStrings("ABCABC", "ABC");
    expect(result).toBe("ABC");
  });
  test("should return the greatest common divisor of two strings", () => {
    const result = gcdOfStrings2("ABCABC", "ABC");
    expect(result).toBe("ABC");
  });
  test("should return the greatest common divisor of two strings", () => {
    const result = gcdOfStrings("AAAAAA", "AA");
    expect(result).toBe("AA");
  });
  test("should return the greatest common divisor of two strings", () => {
    const result = gcdOfStrings2("AAAAAA", "AA");
    expect(result).toBe("AA");
  });
  test("should return empty string", () => {
    const result = gcdOfStrings("LEET", "CODE");
    expect(result).toBe("");
  });
  test("should return empty string", () => {
    const result = gcdOfStrings2("LEET", "CODE");
    expect(result).toBe("");
  });
});
