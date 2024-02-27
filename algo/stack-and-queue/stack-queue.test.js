import { describe, test, expect } from "bun:test";
import newStack from "./stack";
import newQueue from "./queue";

describe("implemen CREATE | PUT | READ | using stack first in last out ", () => {
  test("should be can add value into stack and print top data", () => {
    newStack.add("lamb of god");
    newStack.add("sucide silence");
    newStack.add("cradle of filth");
    const expected = newStack.print();
    const result = "cradle of filth"; //top item in stack
    expect(expected).toEqual(result);
  });

  test("should be can remove value into stack and print top data", () => {
    newStack.put(); //Removing item from stack;
    const expected = newStack.print(); //Top item in stack after removal;
    const result = "sucide silence"; //remove item from stack
    expect(expected).toEqual(result);
  });
});

describe("implemen CREATE | PUT | READ | using queue first in first out ", () => {
  test("should be can add value into queue and print top data", () => {
    newQueue.add("bad omens");
    newQueue.add("bringme the horizon");
    newQueue.add("crossfaith");
    const expected = newQueue.print();
    const result = "bad omens"; //first item in stack
    expect(expected).toEqual(result);
  });

  test("should be can remove value into queue and print top data", () => {
    newQueue.put(); //Removing item from queue;
    const expected = newQueue.print(); //first item in queue after removal;
    const result = "bringme the horizon"; //remove item from queue
    expect(expected).toEqual(result);
  });
});
