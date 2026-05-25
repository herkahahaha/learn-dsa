/**
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

=> Setiap menemukan huruf vokal kita akan menukarnya dengan huruf vokal yang ditemukan terakhir. sementara karakter yang lain tetap di tempatnya.

=> misalnya hello -> holle

Constraints:
1 <= s.length <= 3 * 10^5 || (panjang string minimal 1 karakter, maksimal 300.000 karakter)
s consist of printable ASCII characters. || (s merupakan huruf (A-Z, a-z), angka (0-9), dan simbol (!, @, #, $, dll).)

======================================================================================================================

Pendekatan Kita menggunakan two pointers:
- Pointer pertama (left) menunjuk ke karakter pertama dari string.
- Pointer kedua (right) menunjuk ke karakter terakhir dari string.
- Kita akan melakukan iterasi dari kiri ke kanan dan dari kanan ke kiri secara bersamaan.
- Ketika kedua pointer menunjuk ke huruf vokal, kita akan menukarnya dan terus berlanjut sampai kedua pointer bertemu.

Complexity
Karena constraint besar, ini penting.
Time Complexity O(n) Karena setiap pointer hanya berjalan sekali.
Space Complexity O(n) karena kita perlu menyimpan string yang sudah diubah.

**/

export function reverseVowels(s: string): string {
  const chars = s.split("");

  // kita menentukan huruf vokal menggunakan Set karena vowels.has() lebih cepat dibanding vowels.includes() untuk lookup berulang, meski perbedaanya kecil namun ini scalable
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Kita menentukan pointer Kiri dan kanan
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    //kita geser pointer kiri sampai menemukan huruf vokal
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }

    // kita menggeser pointer kanan sampai menemukan huruf vokal juga
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    // kita melakukan swap pada huruf vokal yang ditemukan
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars.join("");
}

// Versi menggunakaan elemen sementara lalu di pop()
export function reverseVowelsWithStack(s: string): string {
  let chars = s.split("");

  const vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Stack penampung setiap huruf vokal yang ditemukan
  const stack: string[] = [];

  // Kita push setiap huruf vokal yang ditemukan ke stack
  for (let char of chars) {
    if (vowelsSet.has(char)) {
      stack.push(char);
    }
  }

  // replace dengan urutan terbalik dari stack
  for (let i = 0; i < chars.length; i++) {
    if (vowelsSet.has(chars[i])) {
      chars[i] = stack.pop()!;
    }
  }

  return chars.join("");
}
