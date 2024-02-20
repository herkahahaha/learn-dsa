/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

export const SquaresArray = (nums: number[]) => {
  let arr = [] as number[];
  let head = 0;
  let tall = nums.length - 1;

  while (head <= tall) {
    if (nums[head] ** 2 > nums[tall] ** 2) {
      console.log("the power of head", nums[head] ** 2);
      arr.push(nums[head] ** 2);
      head++;
    } else {
      console.log("the power of tall", nums[tall] ** 2);
      arr.push(nums[tall] ** 2);
      tall--;
    }
  }

  return arr.reverse();
};
