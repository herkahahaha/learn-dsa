export const Starstring = (args: number): string[] => {
  let str = [];
  for (let i = 1; i <= args; i++) {
    str.push("*".repeat(i));
    // console.log(str);
  }

  return str;
};

// replace value of array using *
export const StarStringArr = (arr: number[]): string[] => {
  return arr.map((val) => "*".repeat(val));
};
