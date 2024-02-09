import { test, expect, describe } from "bun:test";
import { LinterStack, LinterStack2 } from "../linter-stack";

describe("testing for linter stack", () => {
  test("should first return true", () => {
    const expected = LinterStack("({})");
    expect(expected).toBeTrue();
  });
  test("should first return true", () => {
    const expected = LinterStack("[({})]");
    expect(expected).toBeTrue();
  });
  test("should first return false", () => {
    const expected = LinterStack("[}");
    expect(expected).toBeFalse();
  });
  test("should first return false", () => {
    const expected = LinterStack("[()}");
    expect(expected).toBeFalse();
  });
});

describe("testing for linter stack2", () => {
  test("should first return true", () => {
    const expected = LinterStack2("({})");
    expect(expected).toBeTrue();
  });
  test("should first return true", () => {
    const expected = LinterStack2("[({})]");
    expect(expected).toBeTrue();
  });
  test("should first return false", () => {
    const expected = LinterStack2("[}");
    expect(expected).toBeFalse();
  });
  test("should first return false", () => {
    const expected = LinterStack2("[()}");
    expect(expected).toBeFalse(false);
  });
});
