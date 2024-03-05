// hastable using array O(n^2)

export const twoSumArr = (args: number[], val: number) => {
  let firstIndex = 0;
  let maxIndex = args.length - 1;

  // while (firstIndex < maxIndex) {
  //   let secoundIndex = firstIndex + 1;
  //   while (secoundIndex <= maxIndex) {
  //     if (args[firstIndex] + args[secoundIndex] === val) {
  //       return [firstIndex, secoundIndex];
  //     }
  //     secoundIndex++;
  //   }
  //   firstIndex++;
  // }

  while (firstIndex < maxIndex) {
    let secondIndex = firstIndex + 1;
    // console.log(secondIndex);
    while (secondIndex <= maxIndex) {
      if (args[firstIndex] + args[secondIndex] === val)
        return [firstIndex, secondIndex];
      secondIndex++;
    }
    firstIndex++;
  }
};

// using hastable O(n)

export const twoSum = (nums: number[], target: number) => {
  const hasmap: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const secondpointer = target - nums[i];
    // console.log(secondpointer);

    if (hasmap[secondpointer] !== undefined) {
      return [hasmap[secondpointer], i];
    }
    hasmap[nums[i]] = i;
  }
  return null;
};
