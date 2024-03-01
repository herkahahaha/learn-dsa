import { test, expect } from "bun:test";
import { Anagrams, parenthesists, reverseWord } from "./index";

// anagram
test("should first return nested array based on anagram group when params is single array string value ", () => {
  const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const expected = Anagrams(arr);
  const result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
  expect(expected).toEqual(result);
});

// parenthesist
test("should be return true if open brackets match with close bracket", () => {
  const expected = parenthesists("[({})]");
  expect(expected).toBeTrue();
});
test("should be return false open brackets not match with close bracket", () => {
  const expected = parenthesists("[()}");
  expect(expected).toBeFalse();
});

// reverse string || medium
test(`
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
`, () => {
  const expected = reverseWord("the sky is blue");
  const result = "blue is sky the";
  expect(expected).toEqual(result);
});
