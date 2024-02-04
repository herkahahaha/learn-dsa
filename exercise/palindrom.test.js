import { test, expect, describe } from "bun:test";
import { palindrom } from "./palindrom";

describe("anagram or palindrome test exercise", () => {
  //  true
  test("should first return true when empty", () => {
    const expected = palindrom("");
    expect(expected).toBeTruthy();
  });

  test("should first return true", () => {
    const expected = palindrom("kodok");
    expect(expected).toBeTrue();
  });

  // false
  test("should first return false", () => {
    const expected = palindrom("ab");
    expect(expected).toBeFalse();
  });

  test("should first return false", () => {
    const expected = palindrom("oke");
    expect(expected).toBeFalse();
  });

  test("should first return false", () => {
    const expected = palindrom("abc");
    expect(expected).toBeFalse();
  });
});
