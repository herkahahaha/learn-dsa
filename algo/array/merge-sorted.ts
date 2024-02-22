/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/* Steps
1. we need local variable for 2 pointer for nums1 and nums2
2. indexing for merged element
3. Loop until both arrays have elemen
    - compere elemen from the end of both array
      - place larger element from nums1 in merged array
      - move nums1 pointer
      - else place larger element from nums2 in merged array
      - move pointer for nums2
4. if nums2 has remaining elemnts copy them to nums1 and return nums1
*/

export const mergeSortedArray = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] => {
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
  // console.log("array merge", nums1);
  return nums1;
};

// best approach
export const mergeSortedArray2 = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] => {
  // copy the elements nums2 to nums1 from index m
  nums1.splice(m, n, ...nums2);

  // sort the merged array
  nums1.sort((a, b) => a - b);

  return nums1;
};
