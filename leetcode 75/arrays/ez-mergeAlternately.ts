/**
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

=> Yang mana dari kedua string ini akan digabungkan secara alternatif

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Constraints:
1 <= word1.length, word2.length <= 100 || (panjang kata pertama dan kedua minimal 1 dan maksimal 100)
word1 and word2 consist of lowercase English letters. || (hanya berisi huruf kecil dari alfabet Inggris)

**/

export function mergeAlternately(word1: string, word2: string): string {
  let result = "";

  // Kita ambil panjang maksimum dari kedua string
  const maxLength = Math.max(word1.length, word2.length);

  // Iterasi melalui indeks sampai panjang maksimum
  for (let i = 0; i < maxLength; i++) {
    // Jika indeks masih dalam batas panjang kata pertama, tambahkan huruf dari kata pertama
    if (i < word1.length) {
      result += word1[i];
    }

    // Jika indeks masih dalam batas panjang kata kedua, tambahkan huruf dari kata kedua
    if (i < word2.length) {
      result += word2[i];
    }
  }
  return result;
}
