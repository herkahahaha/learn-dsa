/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

export const MaxCons = (nums: number[]) => {
  let arg = 0 as number;
  let curr = 0 as number;

  for (let acc of nums) {
    if (acc == 0) {
      arg = Math.max(arg, curr);
      curr = 0;
    } else {
      curr++;
    }
  }
  // console.log(Math.max(arg, curr));
  return Math.max(arg, curr);
};
