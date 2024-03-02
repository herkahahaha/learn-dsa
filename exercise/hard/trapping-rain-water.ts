/*
Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

example:
Input: arr[] = {2, 0, 2}
Output: 2
Explanation: We can trap 2 units of water in the middle gap.
*/

/* Approach 1 (Brute approach)
Traverse every array element and find the highest bars on the left and right sides. Take the smaller of two heights. The difference between the smaller height and the height of the current element is the amount of water that can be stored in this array element.

Follow the steps mentioned below to implement the idea:

- Traverse the array from start to end:
-- For every element: 
---- Traverse the array from start to that index and find the maximum height (a) and 
---- Traverse the array from the current index to the end, and find the maximum height (b).
- The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
- Print the total amount of water stored.

Complexity Analysis: 

Time Complexity: O(N^ ). There are two nested loops traversing the array.
Space Complexity: O(1). No extra space is required.


*/

export const TrappedWater = (arr: number[]) => {
  let stored = 0 as number;

  // loop elm of the array
  for (let i = 1; i < arr.length; i++) {
    // console.log("data", arr[i]);
    // find max element on its left
    let left: number = arr[i];
    for (let j = 0; j < i; j++) {
      // console.log("left | arr[j]", left, arr[j]);
      left = Math.max(left, arr[j]);
      // console.log("maxleft", left);
    }

    // find max element on its right
    let right: number = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      // console.log("right | arr[k]", right, arr[k]);
      right = Math.max(right, arr[k]);
      // console.log("max right", right);
    }

    // console.log("===============current data", arr[i]);
    stored += Math.min(left, right) - arr[i];
    // console.log("===============Brute trapped water", stored);
  }

  return stored;
};

// using stack
export const TrappedWaterStack = (arr: number[]) => {
  let stack = [] as number[];

  let store: number = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log("curr stack", arr[stack.length]);
    // remove bar from the stack until the condition holds
    while (stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
      // store the high of the tyop and pop it
      let pop_arr = stack.pop() as number;
      let hight_popping = arr[pop_arr];
      // console.log("poping", popping);

      // if stack dooes not have any bars of the poped bar or has no left boudary
      if (stack.length == 0) break;

      // add distance between left and right boundary of popped bar
      let distance = i - stack[stack.length - 1] - 1;
      // console.log("distance", distance);
      //  calculate
      let min_height =
        Math.min(arr[stack[stack.length - 1]], arr[i]) - hight_popping;
      // console.log("min-height", min_height);

      store += distance * min_height;
      // console.log("Stack Trapped water", store);
    }

    // if the stack is either empty or array of the current bar is less than or equal to the top bar of stack
    stack.push(i);
  }

  return store;

  /*
  Time Complexity: O(N)
  Auxiliary Space: O(N)
  */
};

// using 2 pointer
export const TrappedWater2pointer = (arr: number[]) => {
  let result = 0;
  let left = 0;
  let right = arr.length - 1;
  let l_max = 0;
  let r_max = 0;
  while (left <= right) {
    // we need check min of left and right max for each element
    if (r_max <= l_max) {
      // add the difference between current value and right max at index right
      // console.log("r_max", r_max);
      // console.log("arr of right", arr[right]);
      result += Math.max(0, r_max - arr[right]);

      // update right max
      r_max = Math.max(r_max, arr[right]);

      // update right pointer
      right -= 1;
    } else {
      // add the difference between current value and right max at index left
      result += Math.max(0, l_max - arr[left]);

      // update left max
      l_max = Math.max(l_max, arr[left]);

      // update left pointer
      left += 1;
    }
  }
  return result;

  /*
  Time Complexity: O(N)
  Auxiliary Space: O(1) 
  */
};
