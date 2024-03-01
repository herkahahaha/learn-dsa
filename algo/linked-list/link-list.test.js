import { describe, test, expect } from "bun:test";
import myLinkList from "./link-list";

describe("Create linklist algorithm POST | PRINT | DELETE", () => {
  test("should be add 10,11,12 and print the value", () => {
    myLinkList.append(10);
    myLinkList.append(11);
    myLinkList.append(12);
    myLinkList.delete(12);
    const expected = myLinkList.print();
    const result = "1011";
    expect(expected).toEqual(result);
  });
  // test("should be delete 11 and print the value", () => {
  //   const expected = myLinkList.delete(12);
  //   const result = "1011";
  //   expect(expected).toEqual(result);
  // });
});
