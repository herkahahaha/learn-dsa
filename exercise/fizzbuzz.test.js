import { expect, test, describe } from "bun:test";

import { fizzbuzz } from ".";

describe("testing unit in index file", () => {
  test("print Fizz every multiples of 3", () => {
    const expected = fizzbuzz(3);
    const result = ["1", "2", "Fizz"];
    expect(expected).toBeArray(result);
  });

  test("print Buzz every multiples of 5", () => {
    const expected = fizzbuzz(5);
    const result = ["1", "2", "Fizz", "4", "Buzz"];
    expect(expected).toBeArray(result);
  });

  test("print FizzBuzz every multiples of 3 and 5", () => {
    const expected = fizzbuzz(15);
    const result = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ];
    expect(expected).toBeArray(result);
  });
});
