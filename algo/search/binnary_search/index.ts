export const BinarySearch = (arr: number[], searchVal: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // create mid point
    let mid = Math.floor((left + right) / 2);

    // if mid have same value with sesarch input
    if (arr[mid] === searchVal) return mid;

    // if search value greater, ignore left half and right move to left
    if (arr[mid] > searchVal) {
      right = mid - 1;
    } else {
      // if search value is smaller, left move to right
      left = mid + 1;
    }
  }

  // If target is not found in the array
  return -1;
};

/*

For a linear search algorithm:

Time Complexity: O(n)
The time complexity of a linear search is O(n) because, in the worst-case scenario, the algorithm may need to iterate through all n elements in the list to find the target element.

Space Complexity: O(1)
The space complexity of a linear search is O(1) because the amount of extra space used by the algorithm does not increase with the size of the input. It only requires a constant amount of additional space for variables like loop counters and temporary storage.
*/
