import { describe, test, expect } from "bun:test";
import myLinkList from "./link-list";

describe("Create linklist algorithm POST | PRINT | DELETE", () => {
  test("should be add 1,2,3 and print the value", () => {
    myLinkList.addToHead(1); // add first value as head
    myLinkList.addToHead(2);
    myLinkList.addToHead(3);
    myLinkList.addAtIndex(3, 4);
    myLinkList.addAfterHead(myLinkList.head, 5);
    myLinkList.addToTail(6);
    // myLinkList.deleteAtIndex(0);
    // const expected = myLinkList.get(0);
    // const result = 4;
    const expected2 = myLinkList.print();
    const result2 = "352146";
    expect(expected2).toEqual(result2);
  });
});
