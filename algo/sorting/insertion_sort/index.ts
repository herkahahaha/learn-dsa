export const InsertionSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
};

/*
Time Complexity:
Best Case: O(n)
Average Case: O(n^2)
Worst Case: O(n^2)
In insertion sort, the outer loop iterates through the array once, and for each element, the inner loop iterates from that element towards the beginning of the array to find the correct position for insertion. In the best case scenario, when the array is already sorted, the inner loop does not execute, resulting in a time complexity of O(n). However, in the average and worst cases, where the array is in reverse order or randomly ordered, the time complexity is O(n^2), as each element may need to be compared and moved.

Space Complexity:
O(1)
Insertion sort is an in-place sorting algorithm, meaning it doesn't require additional space proportional to the size of the input array. The space complexity is constant O(1) because the algorithm sorts the elements by swapping them within the given array, without allocating extra space for data structures like additional arrays or lists.
*/
