// Brute approach
export function MergedSortedArray(
  nums1: number[],
  nums2: number[],
  m: number,
  n: number
): number[] {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let mergeIndex = m + n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[mergeIndex] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[mergeIndex] = nums2[pointer2];
      pointer2--;
    }

    mergeIndex--;
  }

  while (pointer2 >= 0) {
    nums1[mergeIndex] = nums2[pointer2];
    pointer2--;
    mergeIndex--;
  }

  return nums1;
}

// Best approach
export function MergeSortedArray2(
  nums1: number[],
  nums2: number[],
  m: number,
  n: number
): number[] {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
}
