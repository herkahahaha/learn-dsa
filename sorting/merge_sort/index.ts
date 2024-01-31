export const MergeSort = (n: any) => {
  const len = n.length;
  if (len <= 1) return n;

  // find the middle index of array
  const middle = Math.floor(len / 2);

  // split the array into 2 halves
  const lefthalf = n.slice(0, middle);
  const righthalf = n.slice(middle);

  // recursive sort the left and right halves
  const sortLeft = MergeSort(lefthalf);
  const sortRight = MergeSort(righthalf);

  // merge two sorted
  const mergings = merging(sortLeft, sortRight);
  console.log("kiri kanan", mergings);
  return mergings;
};

// create merge function

const merging = (leftArr: any, rightArr: any) => {
  let result: any = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // concatenate any remaining elements from the left and right array
  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

/*
Time Complexity:
Best Case: O(n log n)
Average Case: O(n log n)
Worst Case: O(n log n)
Merge sort divides the array into halves recursively until each sub-array contains only one element (dividing phase), and then merges them back together in sorted order (merging phase). The time complexity for merge sort is consistently O(n log n) regardless of the input data, making it an efficient sorting algorithm.

Space Complexity:
O(n)
Merge sort typically requires additional space for temporary arrays during the merging phase. The space complexity is O(n) because it creates new arrays to store the sorted sub-arrays. However, merge sort is a stable sorting algorithm with predictable memory usage, making it suitable for sorting large datasets.
*/
