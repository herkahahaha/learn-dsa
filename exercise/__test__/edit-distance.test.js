import { describe, test, expect } from "bun:test";
import { minDistance, minDistance2 } from "../medium/edit-distance";

describe("Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. following 3operation permitted on a word INSERT | DELETE | REPLACE", () => {
  test(`should be return 0 id word1 empty or word2 empty too`, () => {
    const expected = minDistance("", "");
    const result = 0;
    expect(expected).toEqual(result);
  });

  test(`Input: word1 = "horse", word2 = "ros"
  Output: 3
  Explanation:
  horse -> rorse (replace 'h' with 'r')
  rorse -> rose (remove 'r')
  rose -> ros (remove 'e')`, () => {
    const expected = minDistance("horse", "ros");
    const result = 3;
    expect(expected).toEqual(result);
  });

  test(`Input: word1 = "intention", word2 = "execution"
  Output: 5
  Explanation:
  intention -> inention (remove 't')
  inention -> enention (replace 'i' with 'e')
  enention -> exention (replace 'n' with 'x')
  exention -> exection (replace 'n' with 'c')
  exection -> execution (insert 'u')
  `, () => {
    const expected = minDistance("intention", "execution");
    const result = 5;
    expect(expected).toEqual(result);
  });

  test(`should be same using DP but we add m, n in parameters`, () => {
    let str1 = "intention";
    let str2 = "execution";
    const expected = minDistance2(str1, str2, str1.length, str2.length);
    const result = 5;
    expect(expected).toEqual(result);
  });
});
