export const BubbleSort = (arr: number[]) => {
  // sorting usin sort func
  // return n.sort((a, b) => a - b);

  // using for
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // Inner loop for comparison and swapping
    for (let j = 0; j < len - 1; j++) {
      // If the current element is greater than the next one, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        // Swap elements
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // let swap;
  // do {
  //   swap = false;

  //   for (let i = 0; i < len - 1; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       // seap if they are in the wrong order/positions
  //       let temp = arr[i];
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = temp;

  //       swap = true;
  //     }
  //   }
  // } while (swap);
  return arr;
};

/*
Time Complexity:
Bubble sort involves iterating over the array multiple times, comparing adjacent elements, and swapping them if they are in the wrong order. In the worst-case scenario, when the array is in reverse order, bubble sort will perform the maximum number of comparisons and swaps for each element, resulting in a time complexity of O(n^2), where n is the number of elements in the array.

In the best-case scenario, when the array is already sorted, bubble sort still needs to iterate over the array once to ensure it's sorted, resulting in a time complexity of O(n).

However, on average, bubble sort is still O(n^2) because it doesn't take advantage of any pre-sortedness or randomness in the input data. No matter the input, bubble sort always performs the same number of comparisons and swaps for each element.

Space Complexity:
Bubble sort is an in-place sorting algorithm, meaning it sorts the array in its original memory space without requiring additional space proportional to the size of the input array. Therefore, bubble sort has a space complexity of O(1), indicating constant space usage regardless of the size of the input array. The space complexity does not increase with the size of the input because bubble sort only requires a few extra variables for temporary storage during the swapping process, regardless of the size of the array.
*/
