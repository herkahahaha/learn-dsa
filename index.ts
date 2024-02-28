//===================== popular interview question =======================
/*
for anagram usecase
first thing in my mind is 
  1. create temp file as object such as hasmap
  2. loop traverse every element
  3. we create key from sorting the character already split
  4. we create value base on strig data
  5. set temp[key] = value
  6. return Object.values(temp)
*/

export const Anagrams = (args: string[]): string[][] => {
  let temp: Record<string, string[]> = {};

  args.forEach((char) => {
    const key = char.split("").sort().join() as string;
    const value = temp[key] ?? [];
    value.push(char);
    temp[key] = value;
  });

  return Object.values(temp);
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
  let stack = [] as string[];
  let breacket: Record<string, string> = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (let char of str) {
    if (char in breacket) {
      // console.log(char);
      stack.push(char);
    } else if (char == "]" || char == ")" || char == "}") {
      if (breacket[stack.pop() as string] !== char) return false;
    }
  }

  return stack.length === 0;
};
