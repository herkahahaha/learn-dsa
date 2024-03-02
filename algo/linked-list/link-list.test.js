import { describe, test, expect } from "bun:test";
import myLinkList from "./link-list";

describe("Create linklist algorithm POST | PRINT | DELETE", () => {
  test("should be add 1,2,3 and print the value", () => {
    myLinkList.append(1); // add first value as head
    myLinkList.append(2);
    myLinkList.append(3); // last value as tall
    myLinkList.insertAfter(myLinkList.head, 4); // add after head
    myLinkList.delete(3);
    const expected = myLinkList.print();
    const result = "142";
    expect(expected).toEqual(result);
  });
});
