// work in JS
// export const TopKFrequent = (nums: number[], k: number) => {
//   const hasmap: Record<number, number> = {};
//   for (let num of nums) {
//     if (hasmap[num]) {
//       hasmap[num]++;
//     } else {
//       hasmap[num] = 1;
//     }
//   }
//   return Object.entries(hasmap)
//     .sort((a, b) => a[1] - b[1])
//     .slice(-k)
//     .map((val) => val[0]);
// };

export const TopKFrequent2 = (nums: number[], k: number): number[] => {
  let hasmap: Map<number, number> = new Map();

  for (let num of nums) {
    const getHas = hasmap.get(num) ?? 0;
    hasmap.set(num, getHas + 1 || 1);
  }

  const result = [] as Array<number[]>;
  for (let [key, value] of hasmap) {
    result.push([key, value]);
  }
  result.sort((a, b) => b[1] - a[1]);

  return result.slice(0, k).map((val) => val[0]);
};
