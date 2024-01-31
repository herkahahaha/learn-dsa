# Recursive in bahasa

Rekursif adalah suatu konsep di mana sebuah fungsi memanggil dirinya sendiri. Dalam konteks algoritma, rekursi sering digunakan untuk menyelesaikan masalah yang dapat dibagi menjadi submasalah yang lebih kecil dan serupa.

Ada dua bagian penting dalam sebuah fungsi rekursif:

1. **Kasus Basis (Base Case)**: Ini adalah kondisi khusus di mana rekursi berhenti dan fungsi tidak memanggil dirinya sendiri lagi. Tanpa kasus basis yang benar, fungsi rekursif akan terus memanggil dirinya sendiri secara tak terbatas (terjadi kondisi yang dikenal sebagai stack overflow).

2. **Langkah Rekursif (Recursive Step)**: Bagian dari fungsi yang memanggil dirinya sendiri dengan argumen yang lebih sederhana atau lebih kecil dari argumen sebelumnya. Ini adalah bagian yang membuat masalah semakin kecil sehingga kasus basis pada akhirnya dapat tercapai.

Contoh klasik penggunaan rekursi adalah algoritma untuk menghitung faktorial:

```
Faktorial dari sebuah bilangan n (dinyatakan sebagai n!) adalah hasil perkalian dari semua bilangan bulat positif dari 1 hingga n.

```

```js
function factorial(n) {
  // Kasus Basis
  if (n === 0) {
    return 1;
  }
  // Langkah Rekursif
  else {
    return n * factorial(n - 1);
  }
}

// Contoh penggunaan:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
```

Pada contoh di atas, kita memiliki kasus basis saat n sama dengan 0, yang mengembalikan nilai 1. Kemudian kita memiliki langkah rekursif di mana kita mengalikan nilai n dengan nilai dari panggilan fungsi rekursif dengan argumen n - 1, membuat masalah semakin kecil hingga mencapai kasus basis.

## Source

[ChatGpt](https://chat.openai.com)
