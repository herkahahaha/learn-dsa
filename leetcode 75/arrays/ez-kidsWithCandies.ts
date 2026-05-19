/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids (“minimal menyamai jumlah terbesar”), or false otherwise.

Note that multiple kids can have the greatest number of candies.
===========================================================================================

=> cek SATU PER SATU, kalau semua bonus permen diberikan ke anak itu, apakah dia bisa jadi yang paling banyak permennya?

=> bonus diberikan full ke satu anak bukan dibagi-bagi

=> [2,3,5,1,4], extraCandies = 3 dan nilai terbesar adalah 5, maka [true [2+3=5 >= extraCandies], true [3+3=6 >= extraCandies], true [5+3=8 >= extraCandies], false [1+2=4 >= extra], true [4+3=7 >= extraCandies]]


Constraints:

    n == candies.length (variabel n adalah panjang array candies)
    2 <= n <= 100 (panjang candies minimal 2 maksimal 100)
    1 <= candies[i] <= 100 (jumlah anak / panjang array minimal 2 maksimal 100)
    1 <= extraCandies <= 50 (jumlah extra candies minimal 1 maksimal 50)

    - Array panjang kecil (<=100)
    - Semua nilai positif
    - Tidak perlu optimisasi ekstrem
    - Nested loop masih acceptable
*/

// brute force tanpa menggunakan Math.max
export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  let maxCandie: number = candies[0];

  for (let candy of candies) {
    if (candy > maxCandie) {
      maxCandie = candy;
    }
  }

  const result: boolean[] = [];

  for (let candy of candies) {
    result.push(candy + extraCandies >= maxCandie);
  }

  return result;
}

export function kidsWithCandies2(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const maxCandie: number = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandie);
}
