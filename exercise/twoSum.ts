// hastable using array O(n^2)

// export const twoSum = (args: number[], val: number) => {
//   let firstIndex = 0;
//   let maxIndex = args.length - 1;

//   while (firstIndex < maxIndex) {
//     let secoundIndex = firstIndex + 1;
//     while (secoundIndex <= maxIndex) {
//       if (args[firstIndex] + args[secoundIndex] === val) {
//         return [firstIndex, secoundIndex];
//       }
//       secoundIndex++;
//     }
//     firstIndex++;
//   }
// };

// using hastable

export const twoSum = (nums: number[], target: number) => {
  let hasTable: any = {};

  for (let i = 0; i < nums.length; i++) {
    let secEl = target - nums[i];
    if (hasTable[secEl] !== undefined) {
      // console.log("res", [i, hasTable[secEl]]);
      return [hasTable[secEl], i];
    }
    hasTable[nums[i]] = i;
  }
  return null;
};
