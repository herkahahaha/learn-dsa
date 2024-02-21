export const SelectionSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // assum the current index has the minimum value
    let minIndex = i;

    // fin the index of the minimum value in unsorted data
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    // swap the minimum value with the first unsorted elemen
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};
