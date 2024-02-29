export const placeFlower = (arr: number[], n: number) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i - 1] && !arr[i + 1] && !arr[i]) {
      arr[i] = 1;
      count++;
    }
    // console.log(count);
  }
  return count >= n;
};
