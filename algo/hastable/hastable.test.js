import { describe, test, expect } from "bun:test";
import { createHashTable } from ".";

describe("sample usecase hastable", () => {
  test("should return jhon when given .insert name", () => {
    const hashTable = createHashTable();
    const result = hashTable.retrieve("name");
    expect(hashTable.insert("name", "John")).toEqual(result);
  });

  test("should return jhon when given .insert name", () => {
    const hashTable = createHashTable();
    const result = hashTable.contains("age");
    expect(result).toBeFalse();
  });
});
