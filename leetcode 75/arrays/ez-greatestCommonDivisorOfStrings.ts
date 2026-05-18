/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

=> cari potongan string terbesar yang bisa diulang-ulang untuk membentuk KEDUA string.
=> t divides s berarti s harus bisa dibentuk FULL dari pengulangan t.

contoh:
str1 = "ABABAB"
str2 = "ABAB"
x = "AB"

s = "AAAAAA"
t = "AA"
"AA" + "AA" + "AA"

Constraints:
    1 <= str1.length, str2.length <= 1000 (panjang str1 dan str2 minimal 1 karakter dan maksimal 1000 karakter)
    str1 and str2 consist of English uppercase letters. (A-Z | tidak ada karakter selain huruf kapital A-Z)

*/

export function gcdOfStrings(str1: string, str2: string): string {
  // kalau digabung hasilnya berbeda berarti tidak memiliki pattern dasar yang sama
  if (str1 + str2 !== str2 + str1) return "";

  // cari faktor pembagi terbesar dari panjang str1 dan str2
  const gcdLength = gcd(str1.length, str2.length);

  // cari angka terbesar yang bisa membagi dua angka tanpa sisa
  function gcd(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  return str1.slice(0, gcdLength);
}

// pendekatan rekursif
export function gcdOfStrings2(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcdLength = gcd(str1.length, str2.length);

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  return str1.substring(0, gcdLength);
}
