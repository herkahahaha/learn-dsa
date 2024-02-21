/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

clear the questions
eat ate tea is anagram when we random every single string

eat => hashmap1
e => 1
a => 1
t => 1

ate => hasmap2
a => 1
t => 1
e => 1

timecomplexity = 0(N ^2 * M) bcs we check every string
space complexity = O(N)

case 2 How we groping the eat immedietly using sourting
=> eat,ate,tea,eaten
sorted => aet,aet,aet,aeent

++ more easier to code
for x
 key =  sorted(x)
 map[key] = x

 time complexity will be better 0(N * M log M)


 best aproach using counting
 using chart alphabet 26char a ~ z

 eat
 a,b,c,d,e...t (26)
 1,0,0,0,1...1

 time complexity O(N * M)
*/

export const GropuAnagram = (str: string[]): string[][] => {
  let map: Record<string, string[]> = {};
  str.forEach((chart) => {
    const key = chart.split("").sort().join("") as string;
    const value = map[key] ?? [];
    value.push(chart);
    map[key] = value;
  });
  return Object.values(map);
};
