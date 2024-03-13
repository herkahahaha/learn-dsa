import { describe, test, expect } from "bun:test";
import { validAnagram, validAnagram2 } from "../valid-anagram";

describe(`Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once`, () => {
  test("should first return true when params is anagram and nagaram", () => {
    const expected = validAnagram("anagram", "nagaram");
    const result = true;
    expect(expected).toEqual(result);
  });
  test("should first return false when params is rat and car", () => {
    const expected = validAnagram2("rat", "car");
    const result = false;
    expect(expected).toEqual(result);
  });
  test("should first return true when params is rat and car", () => {
    const expected = validAnagram2("tea", "eat");
    const result = true;
    expect(expected).toEqual(result);
  });
});
