import { describe, test, expect } from "bun:test";
import { GropuAnagram } from "../group-anagram";

describe("given string of anagram", () => {
  test("should first return empty array when params is []", () => {
    const expected = GropuAnagram([]);
    const result = [];
    expect(expected).toEqual(result);
  });
  test("should first return nested array when params is [a]", () => {
    const expected = GropuAnagram(["a"]);
    const result = [["a"]];
    expect(expected).toEqual(result);
  });
  test("should first return nested array based on anagram group when params is single array string value ", () => {
    const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = GropuAnagram(arr);
    const result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(expected).toEqual(result);
  });
});
