export const ArrayFromPermutation = (arr: number[]): number[] => {
  return arr.map((val) => arr[val]); // solution 1
  // return arr.map((val, i) => arr[arr[i]]); // solution 2
};
export const ArrayFromPermutation2 = (arr: number[]): number[] => {
  const nums: number[] = [];
  arr.forEach((i) => {
    nums[i] = arr[arr[i]];
  });
  return nums;
};
