import { test, expect } from "bun:test";
import { Anagrams, parenthesists } from "./index";

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
