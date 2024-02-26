export const BinarySearch = (arr: number[], searchVal: number): number => {
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
