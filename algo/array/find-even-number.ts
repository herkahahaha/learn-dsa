/*
Given an array nums of integers, return how many of them contain an even number of digits.
*/

export const FindEvenNumbers = (nums: number[]) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let arr_string = nums[i].toString();
    if (arr_string.length % 2 === 0) count++;
  }
  return count;
};
