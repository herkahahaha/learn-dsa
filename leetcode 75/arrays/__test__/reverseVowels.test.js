import { reverseVowels, reverseVowelsWithStack } from "../ez-reverseVowels";

describe("Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.", () => {
  test("should reverse vowels in the string", () => {
    const result = reverseVowels("hello");
    expect(result).toBe("holle");
  });
  test("should reverse vowels in the string with uppercase vowels", () => {
    const result = reverseVowels("HELLO");
    expect(result).toBe("HOLLE");
  });
  test("should reverse vowels in the string with no vowels", () => {
    const result = reverseVowels("bcdfg");
    expect(result).toBe("bcdfg");
  });

  test("should reverse vowels in the string", () => {
    const result = reverseVowelsWithStack("hello");
    expect(result).toBe("holle");
  });
  test("should reverse vowels in the string with uppercase vowels", () => {
    const result = reverseVowelsWithStack("HELLO");
    expect(result).toBe("HOLLE");
  });
  test("should reverse vowels in the string with no vowels", () => {
    const result = reverseVowelsWithStack("bcdfg");
    expect(result).toBe("bcdfg");
  });
});
