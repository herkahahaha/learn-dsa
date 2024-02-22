// with temporary variable
export const LinterStack = (str: string[]): boolean => {
  let stack: string[] = [];
  let bracketPairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let openingBracket = ["(", "{", "["] as string[];
  let closingBracket = [")", "}", "]"] as string[];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openingBracket.includes(char)) {
      stack.push(char);
    } else if (closingBracket.includes(char)) {
      const lastOpBracket = stack.pop();
      if (lastOpBracket !== bracketPairs[char]) return false;
    }
  }
  return stack.length === 0;
};

// without temporary variable
export const LinterStack2 = (str: string[]): boolean => {
  // let str = "({[]})";
  const stack: string[] = [];
  const breakets: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (char in breakets) {
      // console.log("charInBreakets", char in breakets);
      stack.push(char);
    } else if (char == ")" || char == "}" || char == "]") {
      if (breakets[stack.pop() as string] !== char) return false;
    }
  }
  return stack.length === 0;
};
