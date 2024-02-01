export const SearchLinear = (inputArray: number[], searchValue: any) => {
  for (let i = 0; i < inputArray.length; i++) {
    //  check if search value has same value with data
    if (inputArray[i] === searchValue) return i;

    inputArray[i];
  }
};

/*
Time Complexity: O(n)
The time complexity of a linear search is O(n) because, in the worst-case scenario, the algorithm may need to iterate through all n elements in the list to find the target element.

Space Complexity: O(1)
The space complexity of a linear search is O(1) because the amount of extra space used by the algorithm does not increase with the size of the input. It only requires a constant amount of additional space for variables like loop counters and temporary storage.
*/
