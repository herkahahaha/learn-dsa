// using dynamic programming
export const minDistance = (word1: string, word2: string): number => {
  const m = word1.length;
  const n = word2.length;

  // initialize a 2D array to store the edit distance
  const dynamicPrograming: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  // initialize base case
  for (let i = 0; i <= m; i++) {
    dynamicPrograming[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dynamicPrograming[0][j] = j;
  }
  // fill in the rest of the array
  for (let i = 1; i <= m; i++) {
    // console.log("word1", word1[i - 1]);
    for (let j = 1; j <= n; j++) {
      // console.log("word2", word2[j - 1]);
      if (word1[i - 1] === word2[j - 1]) {
        // console.log("same", dynamicPrograming[i - 1][j - 1]);
        dynamicPrograming[i][j] = dynamicPrograming[i - 1][j - 1];
      } else {
        dynamicPrograming[i][j] =
          Math.min(
            dynamicPrograming[i - 1][j], // deletion
            dynamicPrograming[i][j - 1], // insertion
            dynamicPrograming[i - 1][j - 1] // replacement
          ) + 1;
      }
    }
  }

  console.log("dp", dynamicPrograming[m][n]);

  return dynamicPrograming[m][n];
  /*
  The time complexity of the edit distance algorithm (also known as the Levenshtein distance algorithm) depends on the approach used. Let’s analyze the time complexity of the dynamic programming (DP) solution provided earlier:

  Dynamic Programming (DP) Approach:
  The DP approach computes the edit distance by filling in a 2D array (dp) of size (m + 1) × (n + 1), where m and n are the lengths of word1 and word2, respectively.
  We initialize the base cases in linear time (O(m + n)).
  The main part of the algorithm involves filling in the rest of the array using nested loops.
  For each cell dp[i][j], we consider three possible operations (insertion, deletion, or replacement) and update the value based on the adjacent cells.
  The total number of cells updated is proportional to the product of m and n.
  Therefore, the time complexity of the DP approach is O(m × n).
  
  Linear Space Optimization:
  The space complexity of the DP approach is also important. By using linear space optimization, we can reduce the space complexity to O(min(m, n)).
  This optimization involves maintaining only two rows of the DP array at a time (instead of the entire 2D array).
  The time complexity remains the same (O(m × n)), but the space complexity becomes O(min(m, n)).
  
  In summary:

  Time Complexity: O(m × n) for the standard DP approach.
  Space Complexity: O(min(m, n)) with linear space optimization.
  Keep in mind that other variations of the edit distance algorithm (such as recursive approaches or specialized algorithms) may have different time complexities, but the DP solution is commonly used due to its efficiency and ease of implementation
  */
};

// recursion approach
/*
The idea is to process all characters one by one starting from either from left or right sides of both strings. 
Let us process from the right end of the strings, there are two possibilities for every pair of characters being traversed, either they match or they don’t match.

Case 1: When str1 becomes empty i.e. M=0
return N, as it require N characters to convert an empty string to str1 of size N
Case 2: When str2 becomes empty i.e. N=0
return M, as it require M characters to convert an empty string to str2 of size M
*/

export const minDistance2 = (
  word1: string,
  word2: string,
  m: number,
  n: number
): number => {
  // let m = word1.length;
  // let n = word2.length;

  if (m == 0) return n;
  if (n == 0) return m;

  if (word1[m - 1] == word2[n - 1]) {
    return minDistance2(word1, word2, m - 1, n - 1);
  }

  return (
    1 +
    minimum(
      minDistance2(word1, word2, m, n - 1), //insert
      minDistance2(word1, word2, m - 1, n), // delete
      minDistance2(word1, word2, m - 1, n - 1) // replace
    )
  );

  /*
  Time Complexity: O(3m), when none of the characters of two strings match as shown in the image below.
  Auxiliary Space: O(1)
  */
};

const minimum = (x: number, y: number, z: number) => {
  if (x <= y && x <= z) {
    return x;
  }
  if (y <= x && y <= z) {
    return y;
  } else {
    return z;
  }
};
