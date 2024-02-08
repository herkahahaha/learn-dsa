import { describe, test, expect } from "bun:test";
import { Fibonacci, FibonacciRec } from "./fibonacci";

// Fibonacci adalah sebuah bilangan yang di mana setiap bilangannya adalah jumlah dari dari dua bilangan sebelumnya.

describe("testing for fibonacci func", () => {
  test("should pass ", () => {
    const expected = Fibonacci(9);
    const result = 34;
    expect(expected).toEqual(result);
  });

  test("should pass using recursive", () => {
    const expected = FibonacciRec(9);
    const result = 34;
    expect(expected).toEqual(result);
  });
});
