import { fizzbuzz } from "./exercise";
import { BubbleSort, InsertionSort, MergeSort, SelectionSort } from "./sorting";

// exercise
fizzbuzz(15); // n = 15

// sorting
console.log("bubble sort", BubbleSort([4, 7, 3, 6, 2])); // sorting array data
console.log("selection sort", SelectionSort([64, 34, 25, 12, 22, 11, 90])); //selection sort
console.log("insertion sort", InsertionSort([4, 5, 2, 3, 1])); //selection sort
console.log("merge sort", MergeSort([3, 7, 4, 6, 5])); //merge sort
