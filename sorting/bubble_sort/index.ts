export const BubbleSort = (arr: number[]) => {
  // sorting usin sort func
  // return n.sort((a, b) => a - b);

  // using for
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // Inner loop for comparison and swapping
    for (let j = 0; j < len - 1; j++) {
      // If the current element is greater than the next one, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        // Swap elements
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // let swap;
  // do {
  //   swap = false;

  //   for (let i = 0; i < len - 1; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       // seap if they are in the wrong order/positions
  //       let temp = arr[i];
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = temp;

  //       swap = true;
  //     }
  //   }
  // } while (swap);
  return arr;
};
