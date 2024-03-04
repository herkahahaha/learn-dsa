import { describe, test, expect } from "bun:test";
import { IsomorphicString } from "../isomorphic-string";

describe(`If a character mapping contradicts a previous mapping, it returns false. Otherwise, it returns true if the loop completes without contradiction.`, () => {
  test("should be given boolean true", () => {
    const expected = IsomorphicString("egg", "add");
    expect(expected).toBeTrue();
  });
  test("should be given boolean false", () => {
    const expected = IsomorphicString("foo", "bar");
    expect(expected).toBeFalse();
  });
});
