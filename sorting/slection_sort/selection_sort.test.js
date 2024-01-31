import { expect, test, describe } from "bun:test";
import { SelectionSort } from ".";

describe("sorting using selection sort", () => {
  test("create SelectionSort func", () => {
    const expected = SelectionSort([1, 2]);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("it should be sorting from minimum value", () => {
    const expected = SelectionSort([2, 1]);
    const result = [1, 2];
    expect(expected).toEqual(result);
  });

  test("it should be sorting 7data from minimum value", () => {
    const expected = SelectionSort([64, 34, 25, 12, 22, 11, 90]);
    const result = [11, 12, 22, 25, 34, 64, 90];
    expect(expected).toEqual(result);
  });
});

/*
Time Complexity:
Best Case: O(n^2)
Average Case: O(n^2)
Worst Case: O(n^2)

In selection sort, there are two nested loops. The outer loop iterates through the array once, and for each iteration of the outer loop, the inner loop finds the minimum element in the unsorted part of the array. Since both loops iterate over the entire array, the time complexity is O(n^2), where n is the number of elements in the array.

Space Complexity:
O(1)
Selection sort is an in-place sorting algorithm, meaning it doesn't require additional space proportional to the size of the input array. The space complexity is constant O(1) because the algorithm sorts the elements by swapping them within the given array, without allocating extra space for data structures like additional arrays or lists.

*/
