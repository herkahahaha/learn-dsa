import { mergeAlternately } from "../ez-mergeAlternately";

describe("Given two strings word1 and word2, merge them in an alternating manner. If one string is longer than the other, append the remaining characters of the longer string to the result.", () => {
  test("should merge two strings in alternating manner", () => {
    const result = mergeAlternately("abc", "pqr");
    expect(result).toBe("apbqcr");
  });
  test("should merge two strings in alternating manner with one string being longer", () => {
    const result = mergeAlternately("abc", "pqr");
    expect(result).toBe("apbqcr");
  });
  test("should merge two strings in alternating manner with one string being longer", () => {
    const result = mergeAlternately("abc", "pqr");
    expect(result).toBe("apbqcr");
  });
});
