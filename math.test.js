import { expect, test, describe, mock } from "bun:test";
import { fizzbuzz } from "./index";

import { fetchData } from "./fetch";

async function processData() {
  try {
    const data = await fetchData();
    return data.value * 2; // Double the value
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
const caller = mock("./fetch");

describe("testing unit in index file", () => {
  test("fetch data", async () => {
    await caller.mockResolvedValue({ value: 21 });
    const expexted = await processData();
    expect(expexted).toBe(42);
  });

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

  test("print Buzz every multiples of 3 and 5", () => {
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
