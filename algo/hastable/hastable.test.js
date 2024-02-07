import { describe, test, expect } from "bun:test";
import { createHashTable } from ".";

describe("sample usecase hastable", () => {
  test("should return jhon when given .insert name", () => {
    const hashTable = createHashTable();
    hashTable.insert("name", "Jhon");
    const expected = hashTable.retrieve("name");
    const result = "Jhon"; //name
    expect(expected).toEqual(result);
  });

  test("should return false when given .contains(age) age isnt exist", () => {
    const hashTable = createHashTable();
    hashTable.insert("age", 32);
    const result = hashTable.contains("age"); // it will be true
    expect(result).toBeTrue();
  });
});
