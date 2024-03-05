//===================== popular interview question =======================
/*
for anagram usecase
first thing in my mind is 
  1. create temp file as object such as hasmap
  2. loop traverse every element
  3. we create key from sorting the character already split
  4. we create value base on strig hasmap[data]
  5. set temp[key] = value
  6. return Object.values(temp)
*/

export const Anagrams = (args: string[]): string[][] => {
  let hasmap: Record<string, string[]> = {};

  args.forEach((char) => {
    const key = char.split("").sort().join("");
    const value = hasmap[key] ?? [];
    value.push(char);
    hasmap[key] = value;
    // console.log(value);
  });

  return Object.values(hasmap);
};

/*
parenthesist usecase
given boolean true when {[()]} 
given boolean false when {[()] 
every open breacket have close breacket should be return true

first thing in my mind 
1. create stack as array
2. and open and close value as breacket local variable
3. loop traverse every string
    if character in open value of breacket , push into stack
    else if close breacket char has matching with the stack
      breackets[stack.pop()] not wqual whit char will be false
*/

export const parenthesists = (str: string): boolean => {
  let stack: string[] = [];
  let breackets: Record<string, string> = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    if (char in breackets) {
      stack.push(char);
    } else if (char == "]" || char == ")" || char == "}") {
      if (breackets[stack.pop() as string] !== char) return false;
    }
  }

  return stack.length === 0;
};

/*
Reverse Word medium UseCase
Approach
We need two varibles:

anchor: the index of the last alphabet of a word
flag: to indicate the status if it is a space to cut word (e.g.,word) or normal space.
Complexity
Time complexity:
O(n): one loop for retrieving the whole string

Space complexity:
O(n): a word list


the first thing in my mind is reverse loop and using substring
1. Temporary var for words, pointer = data.length-1, and boolean for flag
2. reverse loop i = data.length-1, i > -1; --i
    - if data[i] === " " ? false flag, words.push(data.substring(i+1, pointer + 1))
    - else if i === 0 ? 
      - flag ? words.push(data.substring(0, pointer + 1))
      - else if s[i] === " " ? words.push(s[0])
    - else if s[i] !== " " && !flag ? flag is true, poniter = i
3. Return data.join(" ")
*/

export const reverseWord = (s: string): string => {
  let words: string[] = [];
  let flag = false as boolean;
  let pointer = s.length - 1;

  for (let i = s.length - 1; i > -1; --i) {
    if (s[i] == " ") {
      flag = false;
      words.push(s.substring(i + 1, pointer + 1));
    } else if (i === 0) {
      if (flag) {
        words.push(s.substring(0, pointer + 1));
      } else if (s[i] === " ") {
        words.push(s[0]);
      }
    } else if (s[i] !== " " && !flag) {
      flag = true;
      pointer = i;
    }
  }

  return words.join(" ");
};

/*
 clarify the question 
 [1,1,1,2,2,3] k=2
  1 => 3
  2 => 2
  3 => 1
  if k=2 result must be 1,2

  top of my mind is using hasmpap
  - traverse every elemen and set into hasmap
    so hasmap has data like this 1 => 3, 2 => 2, 3 => 1
  - loop [key, value] of hasmap and push them into result variable 
  - sort the result, and then splice(0, k) and mapping
*/

export const topKFrequent = (nums: number[], k: number): number[] => {
  const hasmap: Map<number, number> = new Map();
  for (let num of nums) {
    const getHasmap = hasmap.get(num) ?? 0;
    hasmap.set(num, getHasmap + 1 || 1);
  }
  const result = [] as number[][];
  for (let [key, value] of hasmap) {
    result.push([key, value]);
  }
  result.sort((a, b) => b[1 - a[1]]);
  // console.log(result);
  return result.slice(0, k).map((val) => val[0]);
};
