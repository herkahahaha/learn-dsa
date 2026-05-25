/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

=> Bayangin ada deretan kursi panjang di bioskop.
  1 = kursi sudah diduduki orang
  0 = kursi kosong

  Aturannya:
  orang baru tidak boleh duduk tepat di sebelah orang lain karena misalnya mereka pengen jaga jarak.

  Nah tugas lu:
  cek apakah masih mungkin menempatkan n orang baru tanpa ada yang duduk berdempetan.

Constraints:

   * 1 <= flowerbed.length <= 2 * 10*4 (panjang array minimal 1 maksimal 20.000)
   * flowerbed[i] is 0 or 1. (gak ada angka random | gak perlu validasi aneh)
    There are no two adjacent flowers in flowerbed. (Artinya input awal SUDAH VALID.)
    0 <= n <= flowerbed.length (bisa jadi gak perlu tanam sama sekali & maksimal n sebanyak panjang array)


Implikasi algoritma
  Kalau max 20 ribu:

  O(n) aman
  O(n log n) aman
  O(n²) mulai berbahaya

  Karena: 20.000² = 400 juta operasi yang kemungkinan besar timeout. Makanya dari constraint ini lu mulai mikir: "gw harus scan sekali jalan"
*/

export function canPlaceFlower(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    // Kita cek kiri dan kanan apakah ada tanaman yang sudah ada
    const left = i === 0 || flowerbed[i - 1] === 0;
    const right = flowerbed[i] === 0 || flowerbed[i + 1] === 0;
    // jika tidak ada kita bisa menempatkan tanaman di posisi ini
    if (flowerbed[i] === 0 && left && right) {
      flowerbed[i] = 1;
      n--;
    }

    if (n <= 0) return true;
  }
  return false;
}

export function canPlaceFlower2(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n === 0;
}
