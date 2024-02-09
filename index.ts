import {
  BinarySearch,
  SearchLinear,
  BubbleSort,
  InsertionSort,
  MergeSort,
  SelectionSort,
} from "./algo";
import { createHashTable } from "./algo/hastable";

import {
  fizzbuzz,
  FindMeetings,
  palindrom,
  twoSum,
  LinterStack,
  LinterStack2,
} from "./exercise";

// exercise
fizzbuzz(15); // n = 15
// Example usage:
const schedules = [
  [
    [13, 15],
    [11, 12],
    [10, 13],
  ], // Schedule for member 1
  [[8, 9]], // Schedule for member 2
  [[13, 18]], // Schedule for member 3
];
const meetings = FindMeetings(schedules);
console.log("meetings", meetings);

palindrom("ab"); //false
palindrom("kodok"); //true

twoSum([3, 2, 4], 6); // [1,2]

LinterStack("({})"); //true
LinterStack("[({})]"); //true
LinterStack("[]"); //true
LinterStack2("[}"); //false

// sorting ======================================================================
console.log("bubble sort", BubbleSort([4, 7, 3, 6, 2])); // sorting array data
console.log("selection sort", SelectionSort([64, 34, 25, 12, 22, 11, 90])); //selection sort
console.log("insertion sort", InsertionSort([4, 5, 2, 3, 1])); //selection sort
console.log("merge sort", MergeSort([3, 7, 4, 6, 5])); //merge sort

// array sesarch
console.log("linear search", SearchLinear([3, 5, 6, 7, 1, 9], 9));
console.log(
  "binary search",
  BinarySearch([100, 101, 102, 1000, 1001, 1002], 102)
);

// Example usage of HashTable
const hashTable = createHashTable();

hashTable.insert("name", "John");
hashTable.insert("age", 30);
hashTable.insert("city", "New York");

console.log(hashTable.retrieve("name")); // Output: "John"
console.log(hashTable.contains("age")); // Output: true

hashTable.remove("age");

console.log(hashTable.keys()); // Output: ["name", "city"]
