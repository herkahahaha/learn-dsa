import { describe, test, expect } from "bun:test";
import { ReverseWords } from "../medium/reverse-word";

describe(`
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space. Do not include any extra spaces.
`, () => {
  test(`should be return reverse string blue is sky the when given string = the sky is blue
`, () => {
    const expected = ReverseWords("the sky is blue");
    const result = "blue is sky the";
    expect(expected).toEqual(result);
  });
  test(`should be return reverse string= world hello when given string = hello    word
`, () => {
    const expected = ReverseWords("hello    word");
    const result = "word hello";
    expect(expected).toEqual(result);
  });
});
