// Fibonacci adalah sebuah bilangan yang di mana setiap bilangannya adalah jumlah dari dari dua bilangan sebelumnya.

/*
Time Complexity: O(n) 
Auxiliary Space: O(1)
*/
export const Fibonacci = (nums: any) => {
  let a = 0;
  let b = 1;
  let c;

  if (nums == 0) return a;
  for (let i = 2; i <= nums; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

/*
Time Complexity: Exponential, as every function calls two other functions.
Auxiliary space complexity: O(n), as the maximum depth of the recursion tree is n.
*/

export const FibonacciRec = (nums: any): any => {
  if (nums <= 1) return nums;
  return FibonacciRec(nums - 1) + FibonacciRec(nums - 2);
};
