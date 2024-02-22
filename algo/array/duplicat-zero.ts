export const DuplicatZero = (arr: number[]) => {
  let nums = [] as number[];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i];
    if (left == 0) {
      nums.push(0);
      nums.push(0);
    } else {
      nums.push(left);
    }
    arr[i] = nums[count++];
  }
  console.log(nums);
  return nums.slice(0, arr.length);
};

export const DuplicatZero2 = (arr: number[]) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
};
