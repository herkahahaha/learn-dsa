// with temporary variable
export const LinterStack = (str: any) => {
  let stack = [];
  let bracketPairs: any = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let openingBracket = ["(", "{", "["];
  let closingBracket = [")", "}", "]"];

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
export const LinterStack2 = (str: any) => {
  // let str = "({[]})";
  const stack: any = [];
  const breakets: any = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (char in breakets) {
      // console.log("charInBreakets", char in breakets);
      stack.push(char);
    } else if (char == ")" || char == "}" || char == "]") {
      if (breakets[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
};
