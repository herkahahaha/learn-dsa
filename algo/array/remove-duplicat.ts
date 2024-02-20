export const DuplicatArray = (nums: number[]): number[] => {
  if (nums.length === 0) return [];
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k);
};
